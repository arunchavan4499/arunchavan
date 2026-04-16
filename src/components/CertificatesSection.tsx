import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

const certificates = [
    {
        id: 1,
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle",
        year: "2025",
        link: "",
    },
    {
        id: 2,
        title: "Machine Learning for All",
        issuer: "University of London (Coursera)",
        year: "2025",
        link: "https://coursera.org/verify/UJ4UQ63VC1VM",
    },
    {
        id: 3,
        title: "Introduction to Generative AI",
        issuer: "Simplilearn and Google",
        year: "2025",
        link: "",
    },
];

const CertificatesSection = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 px-14 sm:px-24 md:px-36 lg:px-48 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-4"
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
                        Credentials
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 text-[clamp(1.9rem,3.8vw,2.7rem)] leading-[1.05] text-foreground"
                    style={{
                        fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                        fontWeight: 500,
                        letterSpacing: "0.01em",
                    }}
                >
                    Certificates
                </motion.h2>

                <div className="space-y-3">
                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={certificate.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="rounded-2xl border border-border/70 bg-card/70 px-4 py-4 sm:px-5"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="min-w-0">
                                    <h3
                                        className="truncate text-[1.03rem] leading-snug text-foreground"
                                        style={{
                                            fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                                            fontWeight: 500,
                                            letterSpacing: "0.01em",
                                        }}
                                    >
                                        {certificate.title}
                                    </h3>
                                    <p
                                        className="text-[0.93rem] text-muted-foreground"
                                        style={{
                                            fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                                            fontWeight: 500,
                                            letterSpacing: "0.005em",
                                        }}
                                    >
                                        {certificate.issuer} • {certificate.year}
                                    </p>
                                </div>
                                {certificate.link ? (
                                    <a
                                        href={certificate.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 hover:bg-secondary/80"
                                        aria-label={`Open certificate ${certificate.title}`}
                                    >
                                        <ExternalLink className="h-4 w-4 text-foreground" aria-hidden="true" />
                                    </a>
                                ) : (
                                    <span
                                        className="text-xs text-muted-foreground"
                                        style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif", fontWeight: 500 }}
                                    >
                                        Coming soon
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
