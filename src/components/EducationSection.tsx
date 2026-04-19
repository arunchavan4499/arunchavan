import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import BorderGlow from "./BorderGlow";
import CubeLoader from "./CubeLoader";

const educationData = [
    {
        startYear: "2024",
        endYear: "2027",
        degree: "BE-Computer Science and Engineering",
        institution: "K S Institute Of Technology",
    },
    {
        startYear: "2022",
        endYear: "2024",
        degree: "12th(PUC)",
        institution: "V.B Darbar PU Collage",
    },
    {
        startYear: "2019",
        endYear: "2022",
        degree: "High School",
        institution: "Shree Amoghasidha High School",
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

                        {/* <motion.p
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
                           Academic highlights driving my growth in software and logic.
                        </motion.p> */}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-28 flex justify-center"
                        >
                            <CubeLoader size={180} />
                        </motion.div>
                    </div>

                    <div className="pt-3">
                        <div className="relative ml-2 border-l border-border/70 pl-6">
                            {educationData.map((item, index) => (
                                <motion.article
                                    key={`${item.startYear}-${item.degree}`}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative mb-3 last:mb-0"
                                >
                                    <span className="absolute -left-[1.82rem] top-5 h-3 w-3 rounded-full border-2 border-background bg-primary ring-2 ring-primary/25 pointer-events-none" />

                                    <BorderGlow borderRadius={24} backgroundColor="hsl(var(--secondary))">
                                        <div className="px-4 py-4 sm:px-5">
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
                                                className="text-[0.93rem] text-muted-foreground dark:text-gray-500"
                                                style={{
                                                    fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                                                    fontWeight: 500,
                                                    letterSpacing: "0.005em",
                                                }}
                                            >
                                                {item.institution}
                                            </p>
                                        </div>
                                    </BorderGlow>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
