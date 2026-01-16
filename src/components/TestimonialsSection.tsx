import { motion } from "framer-motion";
import { Sparkles, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Vritika Naik",
    role: "Regional Head @GirlScript",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    content: "I am amazed at Devraj's ability to create intriguing designs. At GirlScript, Devraj not only worked with graphic designing but also designed the UI and contributed to the front end of the website. His work ethics are immaculate.",
  },
  {
    id: 2,
    name: "Amrit Raj",
    role: "Senior Developer @Ignite Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    content: "I had the pleasure of collaborating with Devraj on a project where his exceptional UI/UX skills truly shone. Devraj's design proficiency is remarkable, consistently delivering top-notch work that elevates user experiences.",
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Product Manager @TechCorp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    content: "Working with Devraj was an absolute pleasure. His attention to detail and ability to translate complex requirements into beautiful, functional designs is unmatched. Highly recommend!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-4"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Testimonials
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          What others<span className="text-primary">say</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12 max-w-lg"
        >
          I've worked with some amazing people over the years, here is what they have to say about me.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-secondary rounded-2xl"
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground mb-6 line-clamp-4">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
