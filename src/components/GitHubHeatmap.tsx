import { Github } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const CELL_SIZE = 9;
const CELL_GAP = 4;
const DAYS = 7;
const FALLBACK_WEEKS = 53;
const MONTH_LABEL_ROW_HEIGHT = 20;
const MONTH_TO_GRID_GAP = 8;
const DAY_ROW_HEIGHT = CELL_SIZE + CELL_GAP;
const DAY_LABEL_NUDGE_Y = -2;

const CONTRIBUTIONS_QUERY = `
    query($login: String!) {
        user(login: $login) {
            login
            avatarUrl(size: 80)
            url
            contributionsCollection {
                contributionCalendar {
                    totalContributions
                    months {
                        firstDay
                        name
                        year
                    }
                    weeks {
                        contributionDays {
                            date
                            contributionLevel
                            contributionCount
                        }
                    }
                }
            }
        }
    }
`;

type HeatLevel = 0 | 1 | 2 | 3 | 4;
type MonthTick = { label: string; week: number };
type HeatmapCell = {
    level: HeatLevel;
    contributionCount: number;
    date: string | null;
};

type GitHubContributionLevel =
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";

type GitHubContributionDay = {
    date: string;
    contributionLevel: GitHubContributionLevel;
    contributionCount: number;
};

type GitHubContributionWeek = {
    contributionDays: GitHubContributionDay[];
};

type GitHubContributionMonth = {
    firstDay: string;
    name: string;
    year: number;
};

type GitHubGraphQLResponse = {
    data?: {
        user?: {
            login: string;
            avatarUrl: string;
            url: string;
            contributionsCollection?: {
                contributionCalendar?: {
                    totalContributions: number;
                    months: GitHubContributionMonth[];
                    weeks: GitHubContributionWeek[];
                };
            };
        };
    };
    errors?: Array<{ message: string }>;
};

type HeatmapPayload = {
    username: string;
    avatarUrl: string | null;
    profileUrl: string | null;
    totalContributions: number;
    weeksCount: number;
    cells: HeatmapCell[];
    monthTicks: MonthTick[];
};

const monthFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    timeZone: "UTC",
});

const fullDateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
});

const levelToHeatMap: Record<GitHubContributionLevel, HeatLevel> = {
    NONE: 0,
    FIRST_QUARTILE: 1,
    SECOND_QUARTILE: 2,
    THIRD_QUARTILE: 3,
    FOURTH_QUARTILE: 4,
};

const getColor = (value: HeatLevel) => {
    const colors = [
        "bg-[#161b22]",
        "bg-[#0e4429]",
        "bg-[#006d32]",
        "bg-[#26a641]",
        "bg-[#39d353]",
    ];

    return colors[value];
};

const buildMonthTicks = (
    months: GitHubContributionMonth[],
    weeks: GitHubContributionWeek[]
): MonthTick[] => {
    const firstDayWeekIndex = new Map<string, number>();

    weeks.forEach((week, weekIndex) => {
        week.contributionDays.forEach((day) => {
            if (firstDayWeekIndex.has(day.date)) return;
            firstDayWeekIndex.set(day.date, weekIndex);
        });
    });

    return months
        .map((month) => {
            const week = firstDayWeekIndex.get(month.firstDay);
            if (week === undefined) return null;

            return {
                label: monthFormatter.format(new Date(month.firstDay)),
                week,
            };
        })
        .filter((tick): tick is MonthTick => tick !== null);
};

const emptyCell = (): HeatmapCell => ({
    level: 0,
    contributionCount: 0,
    date: null,
});

const normalizeCells = (cells: HeatmapCell[], weeksCount: number) => {
    const expectedCellCount = weeksCount * DAYS;

    if (cells.length === expectedCellCount) return cells;
    if (cells.length > expectedCellCount) return cells.slice(0, expectedCellCount);

    return [
        ...cells,
        ...Array.from({ length: expectedCellCount - cells.length }, emptyCell),
    ];
};

const fetchGitHubHeatmap = async (username: string): Promise<HeatmapPayload> => {
    const response = await fetch("/.netlify/functions/github-heatmap", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: username }),
    });

    if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(`GitHub proxy request failed with status ${response.status}. ${text}`);
    }

    const payload = (await response.json()) as GitHubGraphQLResponse;

    if (payload.errors?.length) {
        throw new Error(payload.errors[0].message);
    }

    const user = payload.data?.user;
    const calendar = user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
        throw new Error("Could not load contribution calendar for this GitHub user.");
    }

    const weeks = calendar.weeks;
    const months = calendar.months;
    const weeksCount = weeks.length || FALLBACK_WEEKS;

    const rawCells = weeks.flatMap((week) =>
        week.contributionDays.map((day) => ({
            level: levelToHeatMap[day.contributionLevel] ?? 0,
            contributionCount: day.contributionCount,
            date: day.date,
        }))
    );

    return {
        username: user?.login ?? username,
        avatarUrl: user?.avatarUrl ?? null,
        profileUrl: user?.url ?? (username ? `https://github.com/${username}` : null),
        totalContributions: calendar.totalContributions,
        weeksCount,
        cells: normalizeCells(rawCells, weeksCount),
        monthTicks: buildMonthTicks(months, weeks),
    };
};

const getConfigError = (username: string) => {
    if (!username) {
        return "Set VITE_GITHUB_USERNAME in .env.local.";
    }

    return null;
};

const sanitizeEnvValue = (rawValue: string) => {
    const value = rawValue.trim();
    if (!value) return "";
    if (value.toLowerCase().startsWith("your-")) return "";

    return value;
};

const GithubHeatmap = () => {
    const githubUsername = sanitizeEnvValue(import.meta.env.VITE_GITHUB_USERNAME ?? "");

    const [heatmap, setHeatmap] = useState<HeatmapPayload | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(
        getConfigError(githubUsername)
    );

    useEffect(() => {
        const configError = getConfigError(githubUsername);
        if (configError) {
            setHeatmap(null);
            setErrorMessage(configError);
            setIsLoading(false);
            return;
        }

        let isSubscribed = true;
        setIsLoading(true);
        setErrorMessage(null);

        fetchGitHubHeatmap(githubUsername)
            .then((payload) => {
                if (!isSubscribed) return;
                setHeatmap(payload);
            })
            .catch((error: unknown) => {
                if (!isSubscribed) return;
                setHeatmap(null);
                setErrorMessage(error instanceof Error ? error.message : "Failed to load GitHub contribution stats.");
            })
            .finally(() => {
                if (!isSubscribed) return;
                setIsLoading(false);
            });

        return () => {
            isSubscribed = false;
        };
    }, [githubUsername]);

    const weeksCount = heatmap?.weeksCount ?? FALLBACK_WEEKS;

    const gridTrackWidth = useMemo(() => weeksCount * CELL_SIZE + (weeksCount - 1) * CELL_GAP, [weeksCount]);

    const cells = heatmap?.cells ?? Array.from({ length: weeksCount * DAYS }, emptyCell);

    const monthTicks = heatmap?.monthTicks ?? [];
    const totalContributions = heatmap?.totalContributions ?? 0;
    const profileUrl = heatmap?.profileUrl ?? (githubUsername ? `https://github.com/${githubUsername}` : null);
    const avatarName = heatmap?.username ?? githubUsername;
    const avatarAlt = `${avatarName || "GitHub"} profile picture`;
    const dayLabelTopOffset = MONTH_LABEL_ROW_HEIGHT + MONTH_TO_GRID_GAP + DAY_LABEL_NUDGE_Y;

    return (
        <div className="w-full text-zinc-100">
            <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                    {profileUrl ? (
                        <a href={profileUrl} target="_blank" rel="noreferrer" className="inline-flex h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full border border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900" aria-label="Open GitHub profile">
                            {heatmap?.avatarUrl ? (
                                <img src={heatmap.avatarUrl} alt={avatarAlt} className="h-full w-full object-cover" />
                            ) : (
                                <span className="inline-flex h-full w-full items-center justify-center">
                                    <Github className="h-7 w-7 text-zinc-700 dark:text-zinc-200" />
                                </span>
                            )}
                        </a>
                    ) : (
                        <span className="inline-flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900">
                            <Github className="h-7 w-7 text-zinc-700 dark:text-zinc-200" />
                        </span>
                    )}

                    <div className="min-w-0">
                        <h2 className="m-0 text-2xl leading-none text-zinc-900 dark:text-white sm:text-3xl" style={{ fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif", letterSpacing: "0.005em" }}>
                            <em className="text-muted-foreground dark:text-gray-500" style={{ fontStyle: "italic", fontWeight: 500 }}>Github</em>{" "}
                            <strong style={{ fontStyle: "normal", fontWeight: 600 }}>Activity</strong>
                        </h2>

                        <p className="ml-2 mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-400">
                            Total: <span className="font-semibold text-zinc-800 dark:text-white">{isLoading ? "..." : totalContributions}</span> contributions
                        </p>
                    </div>
                </div>

                {profileUrl && (
                    <a href={profileUrl} target="_blank" rel="noreferrer" className="mt-5 mr-4 whitespace-nowrap pt-0 text-right text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-gray-500 dark:hover:text-white" style={{ fontFamily: "'inter','__Satoshi_4a0ccf, -apple-system, sans-serif", wordSpacing: "0.10em", fontSize: "14px", fontWeight: 600 }}>
                        View Profile
                    </a>
                )}
            </div>

            <div className="relative">
                <div style={{ height: MONTH_LABEL_ROW_HEIGHT }}>
                    <div style={{ position: "relative", marginLeft: 36 }}>
                        {monthTicks.map((tick) => (
                            <div
                                key={tick.week + tick.label}
                                className="text-sm text-zinc-500"
                                style={{ position: "absolute", left: tick.week * (CELL_SIZE + CELL_GAP) }}
                            >
                                {tick.label}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-2 flex items-start">
                    {/* Day labels column */}
                    <div style={{ width: 36 }}>
                        <div style={{ height: MONTH_TO_GRID_GAP }} />
                        {Array.from({ length: DAYS }).map((_, dayIndex) => (
                            <div
                                key={dayIndex}
                                style={{ height: DAY_ROW_HEIGHT }}
                                className="flex items-center justify-start"
                            >
                                <span className="text-xs text-zinc-500">
                                    {dayIndex === 1 ? "Mon" : dayIndex === 3 ? "Wed" : dayIndex === 5 ? "Fri" : ""}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Calendar grid */}
                    <div style={{ display: "flex", gap: `${CELL_GAP}px` }}>
                        {Array.from({ length: weeksCount }).map((_, weekIndex) => (
                            <div key={weekIndex} style={{ display: "flex", flexDirection: "column", gap: `${CELL_GAP}px` }}>
                                {Array.from({ length: DAYS }).map((__, dayIndex) => {
                                    const idx = weekIndex * DAYS + dayIndex;
                                    const cell = cells[idx] ?? emptyCell();

                                    return (
                                        <div
                                            key={`${weekIndex}-${dayIndex}`}
                                            title={`${cell.date ?? ""}: ${cell.contributionCount} contribution${cell.contributionCount !== 1 ? "s" : ""}`}
                                            aria-label={`${cell.date ?? ""}: ${cell.contributionCount} contributions`}
                                            className={`rounded-sm ${getColor(cell.level)} border border-zinc-900/5`}
                                            style={{ width: CELL_SIZE, height: CELL_SIZE }}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                {errorMessage && <p className="text-red-500 mt-3">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default GithubHeatmap;
