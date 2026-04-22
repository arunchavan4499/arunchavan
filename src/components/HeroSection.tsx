import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, Github, Mail, Phone, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import HeroDividerTruckLoader from "@/components/HeroDividerTruckLoader";


const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen bg-background pt-20 sm:pt-28 md:pt-36 lg:pt-56 px-14 sm:px-24 md:px-36 lg:px-48 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        {/* Ballpit was removed on request. Re-add it in this background container if asked later. */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-background/20" />
          <div className="absolute inset-y-0 left-0 w-24 sm:w-32 md:w-40 bg-gradient-to-r from-background/70 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-32 md:w-40 bg-gradient-to-l from-background/70 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-7"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-hand text-[#E8705A] dark:text-[#B5FF6D] sm:w-6 sm:h-6"
            aria-hidden="true"
            animate={shouldReduceMotion ? {} : { rotate: [0, -15, 15, -15, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path>
            <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path>
            <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path>
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
          </motion.svg>
          <p
            className="font-medium text-muted-foreground dark:text-gray-400 text-sm sm:text-base md:text-lg"
            style={{ fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif", wordSpacing: '0.06em' }}
          >
            Hey! It's me Arun,
          </p>
        </motion.div>

        {/* Big Headline */}
        <motion.h1
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
          className="font-semibold tracking-tight mb-10 text-foreground dark:text-white"
          style={{
            fontSize: 'clamp(1.75rem, 5vw + 0.5rem, 3rem)',
            lineHeight: '1.2',
            letterSpacing: '0.02em',
            wordSpacing: '0.06em',
            fontWeight: '510'
          }}
        >
          Great experiences {" "}
          <span
            className="text-[#E8705A] dark:text-[#B5FF6D]"
            style={{ fontSize: 'clamp(1.75rem, 5vw + 0.5rem, 3rem)', fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
          >
            aren’t created by adding more, but by understanding what truly matters and
          </span>
          {" "}removing everything else.
        </motion.h1>


        {/* Bottom Section - Responsive Layout */}
        <div className="flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-8">
          {/* Top Row: Divider and Bio - Stack on mobile */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 md:gap-12">
            {/* Divider - Hidden on small mobile, visible from sm */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
              className="hidden sm:block flex-shrink-0 relative overflow-hidden"
              style={{ width: 'clamp(140px, 24vw, 360px)', height: '74px' }}
              aria-hidden="true"
            >
              <div className="absolute bottom-0 left-0 w-full border-t border-border dark:border-gray-700" />
              <HeroDividerTruckLoader />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.5 }}
              className="font-medium text-muted-foreground dark:text-gray-500 text-sm sm:text-base md:text-lg"
              style={{ fontFamily: "'Inter','Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif", wordSpacing: '0.06em' }}
            >
              Aspiring web developer learning modern frontend technologies and building responsive applications.
            </motion.p>
          </div>

          {/* Bottom Row: Social Links and Button - Stack on mobile */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8 sm:gap-12 md:gap-16 pt-4 sm:pt-6">
            {/* Left: Social Links */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.6 }}
              className="flex flex-wrap gap-6 sm:gap-8 social-icon-container"
              aria-label="Social media links"
            >
              <style>{`
                .hero-social-icon {
                  transition: all 0.3s ease;
                }
                
                .hero-social-icon:hover {
                  transform: scale(1.3);
                }
              `}</style>
              {[
                { name: "LinkedIn", url: "https://linkedin.com", Icon: Linkedin, hoverClass: "hover:text-[#0A66C2]" },
                { name: "GitHub", url: "https://github.com", Icon: Github, hoverClass: "hover:text-black dark:hover:text-white" },
                { name: "Instagram", url: "https://instagram.com", Icon: Instagram, hoverClass: "hover:text-[#E4405F]" },
                { name: "Email", url: "mailto:arunchavan1729@gmail.com", Icon: Mail, hoverClass: "hover:text-[#E8705A]" },

              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`text-muted-foreground ${social.hoverClass} hero-social-icon transition-all duration-200 p-2 -m-2`}
                  aria-label={social.name}
                  rel="noopener noreferrer"
                  target={social.name !== "Email" && social.name !== "Phone" ? "_blank" : undefined}
                >
                  <social.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </motion.div>

            {/* Right: Button */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.7 }}
              className="self-start sm:self-auto"
            >
              <Link
                to="/about"
                className="relative overflow-hidden inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-foreground text-foreground rounded-full font-medium text-sm sm:text-base transition-colors duration-[800ms] after:content-[''] after:absolute after:inset-0 after:bg-foreground after:origin-bottom after:z-0 after:pointer-events-none after:[transform:scaleY(0)] after:transition-[transform] after:duration-[800ms] after:[transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:after:[transform:scaleY(1)] hover:text-background"
              >
                <span className="relative z-10">
                  Know me better
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
