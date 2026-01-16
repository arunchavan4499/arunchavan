import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const items = [
  "Websites",
  "Designing",
  "Graphics",
  "Animations",
  "Community",
  "Development",
  "Mentor",
];

const MarqueeSection = () => {
  return (
    <section className="py-8 bg-secondary overflow-hidden">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-2xl md:text-3xl font-medium text-muted-foreground">
              {item}
            </span>
            <Sparkles className="w-5 h-5 text-muted-foreground" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
