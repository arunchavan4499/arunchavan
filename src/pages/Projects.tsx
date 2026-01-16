import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    id: 1,
    title: "Aora",
    category: "Development",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    description: "A modern mobile application for content creators",
  },
  {
    id: 2,
    title: "Code Screenshot",
    category: "Development & Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    description: "Beautiful code screenshots for social media",
  },
  {
    id: 3,
    title: "iPhone 15 Pro",
    category: "Development & Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=600&fit=crop",
    description: "3D showcase of the latest iPhone",
  },
  {
    id: 4,
    title: "Ochi Design",
    category: "Development & Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop",
    description: "Award-winning agency website clone",
  },
  {
    id: 5,
    title: "Portfolio V2",
    category: "Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Personal portfolio redesign",
  },
  {
    id: 6,
    title: "E-Commerce Dashboard",
    category: "Development",
    year: "2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "Analytics dashboard for online stores",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              My Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Selected<span className="text-primary">Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mb-16"
          >
            Here's a curated selection showcasing my expertise and the achieved results.
            Each project represents a unique challenge and creative solution.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-secondary mb-4">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-3 bg-primary rounded-full">
                      <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {project.description}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
