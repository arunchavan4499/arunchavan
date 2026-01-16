import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "📘" },
  { name: "React.js", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Angular", icon: "🅰️" },
  { name: "Redux", icon: "🔄" },
  { name: "Node.js", icon: "💚" },
  { name: "Express.js", icon: "🚂" },
  { name: "MySQL", icon: "🐬" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "Firebase", icon: "🔥" },
  { name: "AWS", icon: "☁️" },
  { name: "Figma", icon: "🎯" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "GIT", icon: "📦" },
];

const SkillsMarquee = () => {
  return (
    <section className="py-8 overflow-hidden border-y border-border">
      <div className="animate-marquee-slow flex items-center gap-6 whitespace-nowrap">
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full"
          >
            <span className="text-lg">{skill.icon}</span>
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMarquee;
