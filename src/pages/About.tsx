import { motion } from "framer-motion";
import { useState } from "react";
import {
  Sparkles,
  BrainCircuit,
  PenLine,
  PencilRuler,
  CodeXml,
  ShieldCheck,
  Download,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SkillsMarquee from "@/components/SkillsMarquee";
import CertificatesSection from "@/components/CertificatesSection";
import BorderGlow from "@/components/BorderGlow";
import Footer from "@/components/Footer";
import SkillsHeading from "@/components/SkillsHeading";
import GitHubHeatmap from "@/components/GitHubHeatmap";
import GlareHover from "@/components/GlareHover";
import LetsTalkInnerLoader from "@/components/LetsTalkInnerLoader";
import EducationSection from "@/components/EducationSection";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const resumePdf = "/resume/Arun-webdev1.pdf";
const profilePic = "/profilepic.png";
const letsTalkCircleText = "LET'S TALK • LET'S TALK • LET'S TALK • LET'S TALK • ";

const experiences = [
  {
    id: 1,
    role: "2nd Place — National Hackathon",
    company: "HIRE-4-THON 2026 • Team Project",
    period: "Mar 2026",
    logo: "🥈",
    bullets: [
      "Built an AI-powered web application within 24 hours",
      "Developed responsive UI using React.js & Tailwind CSS",
      "Integrated REST APIs and enabled real-time interactions",
      "Collaborated on architecture, UI/UX, and feature planning",
      "Delivered a scalable solution recognized at national level",
    ],
    stack: ["React", "Tailwind", "JavaScript", "APIs", "Git"],
  },
  // {
  //   id: 2,
  //   role: "Your Previous Role",
  //   company: "Previous Company",
  //   period: "Month Year — Month Year",
  //   logo: "�",
  // },

  // Add more experiences as needed
];

const designProcess = [
  {
    step: "01",
    title: "Strategize",
    description:
      "To create something awesome, one must first talk about the details. Planning is essential.",
    Icon: BrainCircuit,
    fontFamily: "'Buda', serif",
    fontSize: "16px",
    fontWeight: 600,
  },
  {
    step: "02",
    title: "Wireframe",
    description:
      "After hashing out the details of the website, it's easy to throw the ideas onto pen & paper.",
    Icon: PenLine,
    fontFamily: "'Buda', serif",
    fontSize: "16px",
    fontWeight: 600,
  },
  {
    step: "03",
    title: "Design",
    description:
      "The most fun part of all - adding pizzaz to the wireframes and bring it to life.",
    Icon: PencilRuler,
    fontFamily: "'Buda', serif",
    fontSize: "16px",
    fontWeight: 600,
  },
  {
    step: "04",
    title: "Development",
    description:
      "The design may be final but it needs to be functional and practical. Development is key.",
    Icon: CodeXml,
    fontFamily: "'Buda', serif",
    fontSize: "16px",
    fontWeight: 600,
  },
  {
    step: "05",
    title: "Quality Assurance",
    description:
      "Website load times, SEO, file optimization, etc., weigh in to the quality of the site.",
    Icon: ShieldCheck,
    fontFamily: "'Buda', serif",
    fontSize: "16px",
    fontWeight: 600,
  },
];

const AccordionItem = ({
  exp,
  index,
  defaultOpen = false,
}: {
  exp: (typeof experiences)[0];
  index: number;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="block"
    >
      <div className="bg-white/38 backdrop-blur-[6px] transition-all duration-300 dark:bg-black/32">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left sm:px-5"
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/55 text-xl shadow-[0_6px_16px_-12px_rgba(0,0,0,0.35)] dark:bg-black/45">
              {exp.logo}
            </span>
            <div className="min-w-0">
              <p
                className="truncate text-[clamp(1rem,0.35vw+0.9rem,1.12rem)] font-medium leading-[1.15] text-zinc-900 dark:text-zinc-100"
                style={{ fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif", letterSpacing: "0.01em" }}
              >
                {exp.role}
              </p>
              <p
                className="text-[13px] text-zinc-600 dark:text-zinc-400"
                style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif", fontWeight: 500, letterSpacing: "0.01em" }}
              >
                {exp.company}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span
              className="inline-flex items-center px-3.5 py-1 text-sm font-semibold leading-none text-zinc-700 dark:text-zinc-200"
              style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif", letterSpacing: "0.01em" }}
            >
              {exp.period}
            </span>
            <motion.svg
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="h-4 w-4 text-zinc-400 dark:text-zinc-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <polyline points="6 9 12 15 18 9" />
            </motion.svg>
          </div>
        </button>

        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div className="px-4 pb-4 sm:px-5">
            {exp.bullets && (
              <ul className="mb-3 space-y-2 pl-2">
                {exp.bullets.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-[13px] text-zinc-600 dark:text-zinc-400"
                    style={{ fontFamily: "'Santoshi', 'Satoshi', '__Satoshi_4a0ccf', -apple-system, sans-serif", letterSpacing: "0.01em" }}
                  >
                    <div className="mt-[0.45rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                    <p
                      className="ashu"
                      style={exp.role.includes("Hackathon")
                        ? {
                          fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                          wordSpacing: "0.10em",
                          letterSpacing: "0.01em",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                          lineHeight: "1.6",
                        }
                        : undefined
                      }
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            {exp.stack && (
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif", fontWeight: 500 }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  const handlePreviewResume = () => {
    window.open(resumePdf, "_blank");
    setResumeOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Arun-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setResumeOpen(false);
  };
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[90vh] px-14 sm:px-24 md:px-36 lg:px-48 py-16 md:py-24 md:pt-12">
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', columnGap: '2rem', alignItems: 'start', paddingTop: '43px' }} className="md:!grid-cols-[384px_1fr]">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto md:mx-0 md:w-auto"
              style={{ width: 'clamp(200px, 80vw, 384px)', height: 'clamp(300px, 100vw, 560px)' }}
            >
              <GlareHover
                width="100%"
                height="100%"
                background="transparent"
                borderRadius="0 0 260px 260px"
                borderColor="hsl(var(--border))"
                glareColor="#ffffff"
                glareOpacity={0.22}
                glareAngle={-35}
                glareSize={220}
                transitionDuration={700}
                className="h-full w-full"
              >
                <motion.img
                  src={profilePic}
                  alt="arun chavan"
                  width={384}
                  height={512}
                  className="aspect-3/4 h-full w-full object-cover transition duration-300 hover:scale-[1.015]"
                  whileHover={{ scale: 1.015 }}
                />
              </GlareHover>

              {/* Rotating "Let's Talk" CTA Button */}
              <Link
                to="/contact"
                className="group bg-background border-2 border-current text-foreground absolute right-0 bottom-0 grid aspect-square h-fit w-[45%] place-content-center rounded-full p-3 shadow hover:bg-foreground hover:text-background group-hover:border-background transition-all duration-200 focus:outline-none"
              >
                <div
                  className="border-current group-hover:border-background absolute rounded-full border flex items-center justify-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <LetsTalkInnerLoader className="h-full w-full" />
                </div>

                <motion.div
                  className="relative leading-none uppercase"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  style={{
                    transform: 'rotate(1.368deg)',
                    fontFamily: "__Satoshi_4a0ccf, 'Plus Jakarta Sans', -apple-system, sans-serif",
                    fontWeight: 600,
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                  }}
                >
                  {letsTalkCircleText.split("").map((char, index) => (
                    <span
                      key={index}
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 inline-block group-hover:text-background"
                      style={{
                        '--index': index,
                        '--total': letsTalkCircleText.length,
                        '--radius': 58,
                        transform: `translate(-50%, -50%)
                        rotate(calc(360deg / var(--total) * var(--index)))
                        translateY(calc(var(--radius, 58) * -1px))`,
                        transformOrigin: 'center center',
                        opacity: 1,
                        color: 'currentColor',
                      } as React.CSSProperties}
                    >
                      {char}
                    </span>
                  ))}
                  <span className="sr-only">LET'S TALK • LET'S TALK • LET'S TALK • LET'S TALK • </span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full space-y-6 mt-6 md:mt-0"
              style={{ paddingLeft: '9px', }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-balance" style={{ fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif", fontSize: '72px', lineHeight: '1.1', letterSpacing: '0.01em', fontWeight: 500, }}>
                A <span className="text-primary" style={{ fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif", fontSize: '72px', lineHeight: '1.1', wordSpacing: '0.02em', letterSpacing: '0.01em', fontWeight: 500, }}>creative developer</span>
                <br />& digital designer
              </h1>
              <p className="text-muted-foreground text-balance max-w-2xl"
                style={{ fontFamily: '-apple-system, sans-serif', wordSpacing: '0.10em', letterSpacing: '0.01em', fontSize: '14px', fontWeight: 500 }}>
                {/* Focused on creating thoughtful web experiences through design and code */}
                Passionate about building engaging digital experiences through the perfect blend of design and code.
              </p>
              <div >
                <DropdownMenu open={resumeOpen} onOpenChange={setResumeOpen}>
                  <DropdownMenuTrigger className="inline-flex items-center gap-2 px-6 py-2 border border-foreground rounded-full text-foreground hover:bg-foreground hover:text-background transition-all duration-300">
                    My Resume
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={handlePreviewResume} className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleDownloadResume} className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="w-full" style={{ marginTop: '1.25rem' }}>
                <GitHubHeatmap />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="px-14 sm:px-24 md:px-36 lg:px-48 pt-4">
        <div className="max-w-7xl mx-auto">
          <SkillsHeading count={20} />
        </div>
      </section>

      <SkillsMarquee />
      {/* Experience Section - Accordion */}
      <section className="py-16 sm:py-20 md:py-24 px-14 sm:px-24 md:px-36 lg:px-48">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-4 text-muted-foreground"
              >
                <motion.span
                  animate={{ opacity: [1, 0.35, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex"
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.span>
                <span
                  className="text-sm uppercase tracking-widest text-primary"
                  style={{
                    fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.10em",
                  }}
                >
                  Work History
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 text-[clamp(1.9rem,3.8vw,2.7rem)] leading-[1.05] text-foreground"
                style={{
                  fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                }}
              >
                Experience
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl text-muted-foreground"
                style={{
                  fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                  letterSpacing: "0.008em",
                  fontSize: "0.99rem",
                  fontWeight: 500,
                  lineHeight: "1.6",
                }}>

                {/* I have worked with some of the most innovative industry leaders to help build their top-notch products. */}
                A brief overview of my professional journey and the roles I've embraced along the way.
              </motion.p>
            </div>

            <div className="space-y-3 border-t border-border pt-3">
              {experiences.map((exp, index) => (
                <AccordionItem key={exp.id} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <EducationSection />

      {/* Certificates Section */}
      <CertificatesSection />

      {/* Design Process Section */}
      <section className="py-16 sm:py-20 md:py-24 px-14 sm:px-24 md:px-36 lg:px-48 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <motion.span
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="inline-flex"
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.span>
            <span
              className="text-sm uppercase tracking-widest text-primary"
              style={{
                fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.10em",
              }}
            >
              Steps I Follow
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-[clamp(1.9rem,3.8vw,2.7rem)] leading-[1.05] text-foreground"
            style={{
              fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            My Design Process
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {designProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <BorderGlow className="h-full w-full" borderRadius={24} backgroundColor="hsl(var(--secondary))">
                  <div className="p-4 md:p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.05 }}
                      className="mb-4 w-fit rounded-full border border-border/60 bg-background/60 p-4 text-primary"
                    >
                      <item.Icon className="h-5 w-5" />
                    </motion.div>

                    <motion.h5
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                      className="mb-2 text-[0.98rem] leading-snug text-foreground"
                      style={{
                        fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                        letterSpacing: "0.01em",
                        fontWeight: 500,
                      }}
                    >
                      {item.step}. {item.title}
                    </motion.h5>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.15 }}
                      className="text-[0.94rem] text-muted-foreground"
                      style={{
                        fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif",
                        fontWeight: 500,
                        lineHeight: "1.65",
                        letterSpacing: "0.006em",
                      }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
