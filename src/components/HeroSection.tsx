import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="text-2xl">👋</span>
          <span className="text-muted-foreground">Hey! It's me Devraj,</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
        >
          Crafting{" "}
          <span className="text-primary">purpose driven experiences</span>{" "}
          that inspire & engage.
        </motion.h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-lg border-t border-border pt-6"
          >
            I work with brands globally to build pixel-perfect, engaging, and
            accessible digital experiences that drive results and achieve
            business goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
            >
              Know me better
            </Link>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-6 mt-12"
        >
          {[
            { name: "LINKEDIN", url: "#" },
            { name: "GITHUB", url: "#" },
            { name: "INSTAGRAM", url: "#" },
            { name: "GMAIL", url: "#" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              {social.name}
              <ArrowUpRight className="w-3 h-3" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
