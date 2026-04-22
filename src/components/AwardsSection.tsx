import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import BorderGlow from "./BorderGlow";
import { useState } from "react";
import Loader from "./Loader";

const awards = [
    {
        id: 1,
        title: "2nd Place — National Level Hackathon",
        organization: "HIRE-4-THON 2026 • Team Project",
        date: "Mar 2026",
        logo: "🥈",
       description: "Achieved 2nd place at a national-level hackathon by developing an AI-powered web application within 24 hours, Competed against 75+ teams",
        details: [
            "Built an AI-powered web application within 24 hours as part of a collaborative hackathon team",
            "Developed a responsive and modern UI using React.js and Tailwind CSS",
            "Integrated REST APIs to enable dynamic data flow and real-time interactions",
            "Collaborated on system architecture, UI/UX design, and feature planning",
           
        ],
    },

    // Add more awards as needed
];

export default function AwardsSection() {
    const [openAwardId, setOpenAwardId] = useState<number | null>(null);

    return (
        <section className="py-16 sm:py-20 md:py-24 px-14 sm:px-24 md:px-36 lg:px-48 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div>
                        <div className="mb-12">
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
                                    Recognition
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
                                Awards & Recognition
                            </motion.h2>


                        </div>

                        <div className="pt-3 max-w-lg">
                            <div className="relative ml-2 border-l border-border/70 pl-6">
                                {awards.map((award, index) => (
                                    <motion.article
                                        key={award.id}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative mb-3 last:mb-0"
                                    >
                                        <span className="absolute -left-[1.82rem] top-5 h-3 w-3 rounded-full border-2 border-background bg-primary ring-2 ring-primary/25 pointer-events-none" />

                                        <BorderGlow borderRadius={24} backgroundColor="hsl(var(--secondary))">
                                            <div
                                                className="px-4 py-4 sm:px-5 cursor-pointer"
                                                onClick={() => setOpenAwardId(openAwardId === award.id ? null : award.id)}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3 flex-1">
                                                        <span className="text-2xl">{award.logo}</span>
                                                        <div>
                                                            <h3
                                                                className="mb-1 text-[1.05rem] leading-snug text-foreground"
                                                                style={{
                                                                    fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                                                                    fontWeight: 500,
                                                                    letterSpacing: "0.01em",
                                                                }}
                                                            >
                                                                {award.title}
                                                            </h3>
                                                            <p
                                                                className="text-[13px] text-muted-foreground"
                                                                style={{
                                                                    fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                                                                    fontWeight: 500,
                                                                    letterSpacing: "0.005em",
                                                                }}
                                                            >
                                                                {award.organization}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 flex-shrink-0">
                                                        <span
                                                            className="text-[11px] uppercase tracking-[0.12em] text-primary"
                                                            style={{
                                                                fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            {award.date}
                                                        </span>
                                                        <motion.svg
                                                            animate={{ rotate: openAwardId === award.id ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="h-4 w-4 text-primary"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </motion.svg>
                                                    </div>
                                                </div>

                                                <motion.div
                                                    initial={false}
                                                    animate={{ height: openAwardId === award.id ? "auto" : 0, opacity: openAwardId === award.id ? 1 : 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    style={{ overflow: "hidden" }}
                                                >
                                                    <div className="mt-4 pt-4 border-t border-border/50">
                                                        <p
                                                            className="text-[0.9rem] text-muted-foreground mb-3"
                                                            style={{
                                                                fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                                                                fontWeight: 500,
                                                                letterSpacing: "0.005em",
                                                                lineHeight: "1.6",
                                                            }}
                                                        >
                                                            {award.description}
                                                        </p>

                                                        {award.details && (
                                                            <ul className="space-y-2 pl-2">
                                                                {award.details.map((item, idx) => (
                                                                    <li
                                                                        key={idx}
                                                                        className="flex items-start gap-2 text-[0.85rem] text-muted-foreground"
                                                                    >
                                                                        <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/60" />
                                                                        <p
                                                                            style={{
                                                                                fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                                                                                letterSpacing: "0.005em",
                                                                                fontWeight: 500,
                                                                                lineHeight: "1.5",
                                                                            }}
                                                                        >
                                                                            {item}
                                                                        </p>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </BorderGlow>
                                    </motion.article>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pt-40">
                        <div style={{ transform: 'scale(1.3)' }}>
                            <Loader />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
