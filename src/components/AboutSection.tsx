import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AboutSection = () => {
  const text = "I'm Devraj Chatribin, with over 5+ years of experience in design & development with strong focus on producing high quality & impactful digital experiences. I have worked with some of the most innovative industry leaders to help build their top-notch products.";
  
  const words = text.split(" ");

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm uppercase tracking-widest">
            <span className="text-primary">ABOUT</span> ME
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl lg:text-5xl font-medium text-center leading-relaxed"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.02 }}
              className="inline-block mr-3"
            >
              {index < 2 ? (
                <span className="text-primary">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
