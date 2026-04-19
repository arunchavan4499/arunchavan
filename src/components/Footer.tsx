import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Linkedin, Github, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="py-16 sm:py-20 md:py-24 px-14 sm:px-24 md:px-36 lg:px-48">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          <div>
            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
              className="mb-4 text-[clamp(1.9rem,3.8vw,2.7rem)] leading-[1.05] text-foreground"
              style={{
                fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              Let's work{" "}
              <span
                className="text-primary"
                style={{
                  fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                together
              </span>
            </motion.h2>
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.1 }}
              className="max-w-xl text-muted-foreground dark:text-gray-500 "
              style={{
                fontFamily: "'inter','__Satoshi_4a0ccf, -apple-system, sans-serif",
                letterSpacing: "0.008em",
                fontSize: "0.99rem",
                fontWeight: 500,
                lineHeight: "1.6",
              }}
            >
              Have a project in mind? Let's create something amazing together.
            </motion.p>
          </div>

          <div className="flex flex-col md:items-end justify-end">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.2 }}
            >
              <Link
                to="/contact"
                className="group relative overflow-hidden inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-foreground text-foreground rounded-full font-medium text-sm sm:text-base transition-colors duration-[800ms] after:content-[''] after:absolute after:inset-0 after:bg-foreground after:origin-bottom after:z-0 after:pointer-events-none after:[transform:scaleY(0)] after:transition-[transform] after:duration-[800ms] after:[transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:after:[transform:scaleY(1)] hover:text-background focus:outline-none"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-6 sm:pt-8 border-t border-border">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            {[
              { name: "LinkedIn", url: "https://linkedin.com", Icon: Linkedin, hoverClass: "hover:text-[#0A66C2]" },
              { name: "GitHub", url: "https://github.com", Icon: Github, hoverClass: "hover:text-black dark:hover:text-white" },
              { name: "Instagram", url: "https://instagram.com", Icon: Instagram, hoverClass: "hover:text-[#E4405F]" },
              { name: "Gmail", url: "mailto:arunchavan1729@gmail.com", Icon: Mail, hoverClass: "hover:text-[#E8705A]" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.name !== "Gmail" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`text-muted-foreground ${social.hoverClass} transition-colors duration-200 p-2 -m-2 focus:outline-none focus:ring-2 focus:ring-primary rounded`}
                aria-label={social.name}
              >
                <social.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground dark:text-gray-400" style={{ fontFamily: "'inter','__Satoshi_4a0ccf, -apple-system, sans-serif", fontWeight: 600 }}>
            Made with ❤️ by Arun.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
