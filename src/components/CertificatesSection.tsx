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
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[radial-gradient(ellipse_at_center,_#F5957A_0%,_#E8705A_100%)] dark:bg-emerald-500/20">
                        <Sparkles className="h-3.5 w-3.5 text-white dark:text-emerald-300" aria-hidden="true" />
                    </div>
                    <span className="text-sm uppercase tracking-widest text-primary">Credentials</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-heading mb-8"
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
                                        className="truncate text-base text-foreground"
                                        style={{ fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif", fontWeight: 500 }}
                                    >
                                        {certificate.title}
                                    </h3>
                                    <p
                                        className="text-sm text-muted-foreground"
                                        style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif", fontWeight: 500 }}
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
                                    <span className="text-xs text-muted-foreground">Coming soon</span>
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
