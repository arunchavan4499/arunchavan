import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";

const expertise = [
  {
    id: 1,
    title: "Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
  },
];

const ExpertiseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-4"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Speciality
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Areas of<span className="text-primary">Expertise</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            {expertise.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-xl transition-all ${
                  activeIndex === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <img
              src={expertise[activeIndex].image}
              alt={expertise[activeIndex].title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
