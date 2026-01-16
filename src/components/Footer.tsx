import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Let's work{" "}
              <span className="text-primary">together</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-md"
            >
              Have a project in mind? Let's create something amazing together.
            </motion.p>
          </div>

          <div className="flex flex-col md:items-end justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-colors"
              >
                Get in Touch
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            {["LinkedIn", "GitHub", "Instagram", "Gmail"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                {social}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Devraj Chatribin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
