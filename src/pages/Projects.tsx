import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useState, type MouseEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShowMoreLess from "@/components/ShowMoreLess";

type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tint: string;
  repositoryUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Infinity – Student Notes & Chat App",
    category: "Development",
    year: "2024",
    image: "public/proj1.png",
    description: "student notes and chat to help students with their studies",
    tint: "bg-[#a364ff]",
    repositoryUrl: "https://github.com/arunchavan4499/infinity-student-notes-chat-app",
    liveUrl: "https://infinity-student-notes-chat-app.vercel.app",
  },
  {
    id: 2,
    title: "Student Attendance Management System",
    category: "Development",
    year: "2025",
    image: "public/proj2.png",
    description: "student attendance management and progress tracking ",
    tint: "bg-[#cee8ff]",
    repositoryUrl: "https://github.com/arunchavan4499/student-attendance-management-system",
    liveUrl: "https://infinity-student-notes-chat-app.vercel.app",
  },
  {
    id: 3,
    title: "QuantTradeAI – AI-Powered Stock Market Analysis",
    category: "Development",
    year: "2025",
    image: "public/proj3.png",
    description: "AI-powered stock market analysis and prediction tools",
    tint: "bg-[#0D6E6E]",
    repositoryUrl: "https://github.com/arunchavan4499/quanttradeai",
    liveUrl: "https://quanttradeai.vercel.app",
  },
  {
    id: 4,
    title: "SmartSettle – Adaptive algorithm based payment route optimization system",
    category: "Development",
    year: "2025",
    image: "public/proj4.png",
    description: "Adaptive algorithm based payment route optimization system",
    tint: "bg-[#ff79b0]",
    repositoryUrl: "https://github.com/arunchavan4499/SmartSettle",
    liveUrl: "https://quanttradeai.vercel.app",
  },
  {
    id: 5,
    title: "SmartSettle – Adaptive algorithm based payment route optimization system",
    category: "Development",
    year: "2025",
    image: "public/proj4.png",
    description: "Adaptive algorithm based payment route optimization system",
    tint: "bg-[#ff79b0]",
    repositoryUrl: "https://github.com/arunchavan4499/SmartSettle",
    liveUrl: "https://quanttradeai.vercel.app",
  },
  {
    id: 6,
    title: "SmartSettle – Adaptive algorithm based payment route optimization system",
    category: "Development",
    year: "2025",
    image: "public/proj4.png",
    description: "Adaptive algorithm based payment route optimization system",
    tint: "bg-[#ff79b0]",
    repositoryUrl: "https://github.com/arunchavan4499/SmartSettle",
    liveUrl: "https://quanttradeai.vercel.app",
  },

];

const filterOptions = ["All", "Development", "Design"] as const;
type FilterOption = (typeof filterOptions)[number];
const VISIBLE_PROJECT_COUNT = 6;

type ProjectsProps = {
  embedded?: boolean;
};

const Projects = ({ embedded = false }: ProjectsProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");
  const [centerHoverProjectId, setCenterHoverProjectId] = useState<number | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category.toLowerCase().includes(activeFilter.toLowerCase());
  });
  const hasOverflowProjects = filteredProjects.length > VISIBLE_PROJECT_COUNT;
  const primaryProjects = hasOverflowProjects
    ? filteredProjects.slice(0, VISIBLE_PROJECT_COUNT)
    : filteredProjects;
  const overflowProjects = hasOverflowProjects
    ? filteredProjects.slice(VISIBLE_PROJECT_COUNT)
    : [];

  const handleProjectMouseMove = (event: MouseEvent<HTMLDivElement>, projectId: number) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const xRatio = (event.clientX - rect.left) / rect.width;
    const yRatio = (event.clientY - rect.top) / rect.height;
    const isInCenterRange = xRatio > 0.25 && xRatio < 0.75 && yRatio > 0.25 && yRatio < 0.75;

    setCenterHoverProjectId((currentId) => {
      if (isInCenterRange) {
        return currentId === projectId ? currentId : projectId;
      }

      return currentId === projectId ? null : currentId;
    });
  };

  const clearProjectMouseRange = (projectId: number) => {
    setCenterHoverProjectId((currentId) => (currentId === projectId ? null : currentId));
  };

  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={(event) => handleProjectMouseMove(event, project.id)}
      onMouseLeave={() => clearProjectMouseRange(project.id)}
      className={`project-spotlight-item ${centerHoverProjectId === project.id ? "project-spotlight-item-centered" : ""}`}
    >
      <div className="project-spotlight-card group cursor-pointer">
        <div className={`relative overflow-hidden rounded-[28px] p-5 md:p-7 ${project.tint} mb-5`}>
          <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-black/5 shadow-[0_18px_34px_rgba(0,0,0,0.16)]">
            <img
              src={project.image}
              alt={project.title}
              className="project-spotlight-image w-full h-full object-cover transition-transform duration-500"
            />
          </div>
        </div>
        <div className="flex items-end justify-between gap-4 px-0.5">
          <div className="min-w-0">
            <h3
              className="text-sm sm:text-base text-foreground/90 leading-tight mb-1.5"
              style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif" }}
            >
              {project.title}
            </h3>
            <p
              className="text-sm sm:text-base text-muted-foreground leading-none"
              style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif" }}
            >
              {project.category}
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <span
              className="text-sm sm:text-base text-muted-foreground leading-none"
              style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif" }}
            >
              {project.year}
            </span>

            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/20 text-foreground/75 transition-colors duration-200 hover:text-foreground hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live deployment`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/20 text-foreground/75 transition-colors duration-200 hover:text-foreground hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
        <div className="sr-only">
          <p>{project.description}</p>
        </div>
      </div>
    </motion.div>
  );

  const sectionPaddingClass = embedded ? "pt-12 md:pt-16" : "pt-20 md:pt-32";

  const projectsContent = (
    <section className={`${sectionPaddingClass} pb-16 md:pb-24 px-14 sm:px-24 md:px-36 lg:px-48`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 mb-4"
        >
          <motion.span
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="inline-flex"
          >
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-primary" aria-hidden="true" />
          </motion.span>
          <span className="text-base uppercase tracking-widest text-primary">
            My Work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 font-display section-heading"
          style={{ wordSpacing: '0.10em', letterSpacing: '0.02em', fontSize: 'clamp(1.5rem, 8vw, 48px)', fontWeight: '500', }}
        >
          My Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="ashu"
          style={{ fontFamily: '__Satoshi_4a0ccf, -apple-system, sans-serif', wordSpacing: '0.10em', letterSpacing: '0.01em', fontSize: '1rem', fontWeight: 500, lineHeight: '1.6' }}>

          A focused selection of work highlighting my skills, approach, and impact.
        </motion.p>

        <div className="mb-8 flex justify-end">
          <div className="flex items-center gap-3 text-sm" style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif" }}>
            {filterOptions.map((option) => {
              const isActive = activeFilter === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setActiveFilter(option)}
                  className={isActive
                    ? "rounded-full bg-foreground/10 px-5 py-2 text-foreground"
                    : "rounded-full px-2 py-2 text-foreground/75 hover:text-foreground transition-colors"
                  }
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <div className={`project-spotlight grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ${centerHoverProjectId !== null ? "project-spotlight-center-active" : ""}`}>
          {primaryProjects.map((project, index) => renderProjectCard(project, index))}

          {primaryProjects.length === 0 && (
            <div className="md:col-span-2 h-[150px] w-full overflow-hidden flex items-center justify-center">
              <img
                src="/image.png"
                alt="No projects found"
                className="h-full w-full object-contain dark:rounded-md dark:bg-white dark:p-1"
              />
            </div>
          )}
        </div>

        {hasOverflowProjects && (
          <ShowMoreLess
            previewHeight={0}
            showMoreLabel="— Show more —"
            showLessLabel="— Show less —"
            className="pt-3"
          >
            <div className={`project-spotlight grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ${centerHoverProjectId !== null ? "project-spotlight-center-active" : ""}`}>
              {overflowProjects.map((project, index) =>
                renderProjectCard(project, index + VISIBLE_PROJECT_COUNT)
              )}
            </div>
          </ShowMoreLess>
        )}
      </div>
    </section>
  );

  if (embedded) {
    return projectsContent;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {projectsContent}

      <Footer />
    </div>
  );
};

export default Projects;
