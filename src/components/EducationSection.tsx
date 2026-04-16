import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const educationData = [
    {
        startYear: "2023",
        endYear: "2026",
        degree: "Bachelor of Computer Applications",
        institution: "Bengaluru University",
    },
    {
        startYear: "2017",
        endYear: "2021",
        degree: "High School",
        institution: "Isaac Newton High School",
    },
];

export default function EducationSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 px-14 sm:px-24 md:px-36 lg:px-48 bg-background">
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
                                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
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
                                Academic Journey
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
                            Education
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
                            }}
                        >
                            Key milestones from my academic path that shaped my foundation in software and problem-solving.
                        </motion.p>
                    </div>

                    <div className="border-t border-border pt-3">
                        <div className="relative ml-2 border-l border-border/70 pl-6">
                            {educationData.map((item, index) => (
                                <motion.article
                                    key={`${item.startYear}-${item.degree}`}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative mb-3 rounded-2xl border border-border/70 bg-card/70 px-4 py-4 sm:px-5 last:mb-0"
                                >
                                    <span className="absolute -left-[1.82rem] top-5 h-3 w-3 rounded-full border-2 border-background bg-primary ring-2 ring-primary/25" />

                                    <p
                                        className="mb-1 text-[11px] uppercase tracking-[0.12em] text-primary"
                                        style={{
                                            fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {item.startYear} - {item.endYear}
                                    </p>

                                    <h3
                                        className="mb-1 text-[1.05rem] leading-snug text-foreground"
                                        style={{
                                            fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                                            fontWeight: 500,
                                            letterSpacing: "0.01em",
                                        }}
                                    >
                                        {item.degree}
                                    </h3>

                                    <p
                                        className="text-[0.93rem] text-muted-foreground"
                                        style={{
                                            fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                                            fontWeight: 500,
                                            letterSpacing: "0.005em",
                                        }}
                                    >
                                        {item.institution}
                                    </p>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
