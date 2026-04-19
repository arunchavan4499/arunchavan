import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles } from "lucide-react";

const experiences = [
    // {
    //     id: 1,
    //     role: "2nd Place — National Hackathon",
    //     company: "HIRE-4-THON 2026 • Team Project",
    //     period: "Mar 2026",
    //     logo: "🥈",
    //     bullets: [
    //         "Built an AI-powered web application within 24 hours",
    //         "Developed responsive UI using React.js & Tailwind CSS",
    //         "Integrated REST APIs and enabled real-time interactions",
    //         "Collaborated on architecture, UI/UX, and feature planning",
    //         "Delivered a scalable solution recognized at national level",
    //     ],
    //     stack: ["React", "Tailwind", "JavaScript", "APIs", "Git"],
    // },


    // Add more experiences as needed
];

const AccordionItem = ({
    exp,
    index,
    defaultOpen = false,
}: {
    exp: (typeof experiences)[0];
    index: number;
    defaultOpen?: boolean;
}) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="block"
        >
            <div className="bg-white/38 backdrop-blur-[6px] transition-all duration-300 dark:bg-black/32">
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left sm:px-5"
                >
                    <div className="flex items-center gap-3 min-w-0">
                        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/55 text-xl shadow-[0_6px_16px_-12px_rgba(0,0,0,0.35)] dark:bg-black/45">
                            {exp.logo}
                        </span>
                        <div className="min-w-0">
                            <p
                                className="truncate text-[clamp(1rem,0.35vw+0.9rem,1.12rem)] font-medium leading-[1.15] text-zinc-900 dark:text-zinc-100"
                                style={{ fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif", letterSpacing: "0.01em" }}
                            >
                                {exp.role}
                            </p>
                            <p
                                className="text-[13px] text-muted-foreground"
                                style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif", fontWeight: 500, letterSpacing: "0.01em" }}
                            >
                                {exp.company}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <span
                            className="inline-flex items-center px-3.5 py-1 text-sm font-semibold leading-none text-muted-foreground"
                            style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif", letterSpacing: "0.01em" }}
                        >
                            {exp.period}
                        </span>
                        <motion.svg
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="h-4 w-4 text-zinc-400 dark:text-zinc-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </motion.svg>
                    </div>
                </button>

                <motion.div
                    initial={false}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                >
                    <div className="px-4 pb-4 sm:px-5">
                        {exp.bullets && (
                            <ul className="mb-3 space-y-2 pl-2">
                                {exp.bullets.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2 text-[13px] text-muted-foreground"
                                        style={{ fontFamily: "'Santoshi', 'Satoshi', '__Satoshi_4a0ccf', -apple-system, sans-serif", letterSpacing: "0.01em" }}
                                    >
                                        <div className="mt-[0.45rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                                        <p
                                            className="ashu"
                                            style={exp.role.includes("Hackathon")
                                                ? {
                                                    fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                                                    wordSpacing: "0.10em",
                                                    letterSpacing: "0.01em",
                                                    fontSize: "0.9rem",
                                                    fontWeight: 500,
                                                    lineHeight: "1.6",
                                                }
                                                : undefined
                                            }
                                        >
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {exp.stack && (
                            <div className="flex flex-wrap gap-2">
                                {exp.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-md bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                                        style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif", fontWeight: 500 }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default function ExperienceSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 px-14 sm:px-24 md:px-36 lg:px-48">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-4 text-muted-foreground"
                        >
                            <motion.span
                                animate={{ opacity: [1, 0.35, 1] }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                className="inline-flex"
                            >
                                <Sparkles className="w-4 h-4 text-primary" />
                            </motion.span>
                            <span
                                className="text-sm uppercase tracking-widest text-primary"
                                style={{
                                    fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                                    fontWeight: 500,
                                    letterSpacing: "0.10em",
                                }}
                            >
                                Work History
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-4 text-[clamp(1.9rem,3.8vw,2.7rem)] leading-[1.05] text-foreground"
                            style={{
                                fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                                fontWeight: 500,
                                letterSpacing: "0.01em",
                            }}
                        >
                            Experience
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="max-w-xl text-muted-foreground"
                            style={{
                                fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                                letterSpacing: "0.008em",
                                fontSize: "0.99rem",
                                fontWeight: 500,
                                lineHeight: "1.6",
                            }}>

                            {/* I have worked with some of the most innovative industry leaders to help build their top-notch products. */}
                            A brief overview of my professional journey and the roles I've embraced along the way.
                        </motion.p>
                    </div>

                    <div className="space-y-3 border-t border-border pt-3">
                        {experiences.map((exp, index) => (
                            <AccordionItem key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
