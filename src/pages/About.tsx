import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SkillsMarquee from "@/components/SkillsMarquee";
import Footer from "@/components/Footer";

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "OneShield Software",
    period: "Aug 2022 — Present",
    logo: "🛡️",
  },
  {
    id: 2,
    role: "Founder",
    company: "Design and Code",
    period: "Jan 2021 — Present",
    logo: "💻",
  },
  {
    id: 3,
    role: "Design Engineer",
    company: "BlackboxAI",
    period: "Feb 2025 — Mar 2025",
    logo: "🤖",
  },
  {
    id: 4,
    role: "UI/UX Designer",
    company: "Social3",
    period: "Aug 2022 — Sep 2023",
    logo: "🎨",
  },
];

const designProcess = [
  { step: "01", title: "Strategize", description: "To create something awesome, one must first talk about the details. Planning is essential." },
  { step: "02", title: "Wireframe", description: "After hashing out the details of the website, it's easy to throw the ideas onto pen & paper." },
  { step: "03", title: "Design", description: "The most fun part of all - adding pizzaz to the wireframes and bring it to life." },
  { step: "04", title: "Development", description: "The design may be final but it needs to be functional and practical. Development is key." },
  { step: "05", title: "Quality Assurance", description: "Website load times, SEO, file optimization, etc., weigh in to the quality of the site." },
];

const awards = [
  { title: "Star Performer of the Year", date: "May 2021" },
  { title: "Best Beginner Hack", date: "Apr 2021" },
  { title: "Sketch Webpage Contest Winner", date: "Nov 2020" },
  { title: "Best Space App Winner", date: "Sep 2021" },
];

const communityFeatures = [
  { icon: "🎯", title: "Mentoring", description: "Get connected with a mentor that will help you pave your career path." },
  { icon: "💼", title: "Opportunities", description: "Get Internships and Job opportunities and gain experience while you learn." },
  { icon: "📚", title: "Free Resources", description: "Get Free resources related to Designing and Development from the community." },
  { icon: "⭐", title: "Help & Reviews", description: "Get your portfolio and projects reviewed by Industry experts and mentors." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-80 h-96 mx-auto md:mx-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                alt="Devraj Chatribin"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Rotating "Let's Talk" badge */}
              <Link
                to="/contact"
                className="absolute -right-8 bottom-20 w-24 h-24 bg-secondary rounded-full flex items-center justify-center group hover:bg-primary transition-colors"
              >
                <div className="relative w-full h-full">
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <path
                      id="circlePath"
                      fill="none"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                    <text className="text-[10px] fill-current uppercase tracking-widest">
                      <textPath href="#circlePath">
                        Let's Talk • Let's Talk • Let's Talk •
                      </textPath>
                    </text>
                  </svg>
                  <ArrowUpRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              A <span className="text-primary">creative developer</span>
              <br />& digital designer
            </h1>
            <p className="text-muted-foreground mb-8 max-w-lg">
              I collaborate with brands globally to design impactful, mission-focused
              websites that drive results and achieve business goals.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:bg-secondary transition-colors"
            >
              My Resume
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Marquee */}
      <SkillsMarquee />

      {/* Experience Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-4"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  Work History
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                Experience
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground"
              >
                I have worked with some of the most innovative industry leaders to help build their top-notch products.
              </motion.p>
            </div>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-secondary rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{exp.logo}</span>
                    <div>
                      <h3 className="font-semibold">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">@{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
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
              Steps I follow
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-12"
          >
            My<span className="text-primary">Design Process</span>
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-6">
            {designProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-secondary rounded-xl"
              >
                <span className="text-sm text-primary font-medium">{item.step}.</span>
                <h3 className="text-lg font-semibold mt-2 mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
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
              Awards
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-12"
          >
            Awards &<span className="text-primary">Recognition</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-secondary rounded-xl"
              >
                <p className="text-sm text-muted-foreground mb-2">{award.date}</p>
                <h3 className="font-semibold">{award.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-4"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  Community Work
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Building a<span className="text-primary">Tech Community</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground"
              >
                I founded Design & Code which is a global community with a mission to connect designers and developers to create a happy community eager to learn, innovate and grow together.
              </motion.p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "3k+", label: "Community Members" },
                { value: "16+", label: "Events conducted" },
                { value: "3", label: "Years" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <span className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</span>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-secondary rounded-xl"
              >
                <span className="text-2xl mb-4 block">{feature.icon}</span>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
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
