const skills = [
  {
    name: "HTML",
    color: "#E34C26",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#E44D26" />
        <path d="M16 27.6l6.2-1.7 2-22.9H16v24.6z" fill="#F16529" />
        <path d="M16 13h-4.4l-.3-3.4H16V6.4H8.2l.1 1.2.9 10.4H16V13zm0 9.2l-.1.1-3.1-.8-.2-2.3H9l.4 4.3 6.6 1.8.1-.1v-3z" fill="#EBEBEB" />
        <path d="M16 13v3.6h3.9l-.4 4.4-3.5.9v3.3l6.6-1.8.1-.9.7-8.4.1-1.1H16zm0-6.6v3.6h7.6l.1-.9.1-2.7H16z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "CSS",
    color: "#1572B6",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#1572B6" />
        <path d="M16 27.6l6.2-1.7 2-22.9H16v24.6z" fill="#33A9DC" />
        <path d="M16 13H11.5l.3 3.6H16V13zm0-6.6H8.3l.3 3.6H16V6.4z" fill="#fff" />
        <path d="M16 22.8v-3.6l-.1.1-3.1-.8-.2-2H9l.4 4.3 6.6 1.8.1-.1-.1.3z" fill="#EBEBEB" />
        <path d="M16 16.6h-4.2l.4 4.4 3.8 1v-3.6l-.1.2h.1v-2zM16 6.4v3.6h7.3l.1-1.1.1-2.5H16zM16 13v3.6h3.9l-.4 4.4-3.5.9v3.3l6.6-1.8.1-.9.7-8.4.1-1.1H16z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="2" fill="#F7DF1E" />
        <path d="M9.2 25.2l2.1-1.3c.4.7.8 1.3 1.7 1.3.9 0 1.4-.3 1.4-1.7V15h2.6v8.6c0 2.7-1.6 4-3.9 4-2.1 0-3.3-1.1-3.9-2.4zM18.2 24.9l2.1-1.2c.6 1 1.3 1.7 2.7 1.7 1.1 0 1.8-.6 1.8-1.3 0-.9-.7-1.2-1.9-1.8l-.7-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-1.9 1.5-3.4 3.8-3.4 1.6 0 2.8.6 3.6 2l-2 1.3c-.4-.8-1-1.1-1.7-1.1-.8 0-1.2.5-1.2 1.1 0 .8.5 1.1 1.7 1.6l.7.3c2.2.9 3.4 1.9 3.4 4 0 2.3-1.8 3.6-4.2 3.6-2.4 0-3.9-1.2-4.7-2.6z" fill="#323330" />
      </svg>
    ),
  },
  {
    name: "React.js",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="2.8" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="1.2">
          <ellipse cx="16" cy="16" rx="14" ry="5.5" />
          <ellipse cx="16" cy="16" rx="14" ry="5.5" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="14" ry="5.5" transform="rotate(120 16 16)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#ffffff",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" fill="#000" />
        <path d="M10.5 21V11h8.1l.1 1.6h-6.4v3h5.8v1.6h-5.8v3.2h6.5V21H10.5z" fill="url(#nextGrad)" />
        <path d="M19.5 11l4.5 7v-7h1.5v10L19 13v8h-1.5V11h2z" fill="#fff" />
        <defs>
          <linearGradient id="nextGrad" x1="10.5" y1="16" x2="19" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "#38B2AC",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8c-2.7 0-4.4 1.35-5.1 4.05 1.02-1.35 2.21-1.856 3.57-1.518.776.194 1.33.757 1.94 1.378C17.44 13 18.6 14.2 21.1 14.2c2.7 0 4.44-1.35 5.1-4.05-1.02 1.35-2.21 1.856-3.57 1.518-.776-.194-1.33-.757-1.94-1.378C19.66 9.2 18.5 8 16 8zM10.9 14.2c-2.7 0-4.44 1.35-5.1 4.05 1.02-1.35 2.21-1.856 3.57-1.518.776.194 1.33.757 1.94 1.378C12.34 19.2 13.5 20.4 16 20.4c2.7 0 4.44-1.35 5.1-4.05-1.02 1.35-2.21 1.856-3.57 1.518-.776-.194-1.33-.757-1.94-1.378C14.56 15.4 13.4 14.2 10.9 14.2z" fill="#38B2AC" />
      </svg>
    ),
  },
  {
    name: "Figma",
    color: "#F24E1E",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.5 4h5.25c2.9 0 5.25 2.35 5.25 5.25s-2.35 5.25-5.25 5.25H10.5V4z"
          fill="#F24E1E"
        />
        <path
          d="M10.5 14.5h5.25c2.9 0 5.25 2.35 5.25 5.25s-2.35 5.25-5.25 5.25H10.5v-10.5z"
          fill="#FF7262"
        />
        <path
          d="M5.25 19.75a5.25 5.25 0 0 0 5.25 5.25 5.25 5.25 0 0 0 5.25-5.25v-5.25H10.5a5.25 5.25 0 0 0-5.25 5.25z"
          fill="#A259FF"
        />
        <path
          d="M15.75 4h5.25a5.25 5.25 0 1 1 0 10.5h-5.25V4z"
          fill="#1ABCFE"
        />
        <path
          d="M21 14.5a5.25 5.25 0 1 1-5.25 5.25V14.5H21z"
          fill="#0ACF83"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#339933",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3z" fill="#339933" />
        <path d="M16 3v26M4 9.5l12 6.5M28 9.5l-12 6.5" stroke="#fff" strokeWidth="0.5" strokeOpacity="0.2" />
        <path d="M16 7.5l-8.5 4.9v9.8L16 27.2l8.5-5V12.4L16 7.5z" fill="#43A047" />
        <text x="11" y="19" fontFamily="monospace" fontSize="8" fill="#fff" fontWeight="bold">JS</text>
      </svg>
    ),
  },
  {
    name: "Java",
    color: "#007396",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2 19.6s-1.2.7.8 1c2.5.3 3.7.3 6.5-.3 0 0 .7.5 1.7.9-6.1 2.6-13.8-.2-9-1.6zM11.5 16.9s-1.3 1 .7 1.2c2.6.3 4.6.3 8.1-.4 0 0 .5.5 1.3.8-7.2 2.1-15.2.2-10.1-1.6z" fill="#5382A1" />
        <path d="M17.6 12.1c1.5 1.7-.4 3.2-.4 3.2s3.7-1.9 2-4.3c-1.6-2.2-2.8-3.3 3.8-7.1 0 0-10.4 2.6-5.4 8.2z" fill="#E76F00" />
        <path d="M24.5 21.8s.9.7-1 1.4c-3.5 1-14.6 1.3-17.7.1-1.1-.5.9-1.2 1.6-1.3.6-.1 1-.1 1-.1-1.2-.8-7.5 1.6-3.2 2.3 11.6 1.9 21.2-.8 19.3-2.4zM12.8 14.2s-5.5 1.3-1.9 1.8c1.5.2 4.5.2 7.3-.1 2.3-.2 4.6-.7 4.6-.7s-.8.3-1.4.7c-5.6 1.5-16.4.8-13.3-.7 2.6-1.2 4.7-1 4.7-1zM22.3 18.6c5.7-2.9 3-5.8 1.2-5.4-.4.1-.6.2-.6.2s.2-.3.5-.4c3.7-1.3 6.5 3.8-1.1 5.8 0 0 .1-.1 0-.2z" fill="#5382A1" />
        <path d="M19.1 2s3.1 3.1-3 7.9c-5 4-1.1 6.2 0 8.8-2.9-2.6-5-4.9-3.6-7.1C14.5 8.4 20.7 6.8 19.1 2z" fill="#E76F00" />
        <path d="M13.3 27.4c5.5.4 13.9-.2 14.1-2.5 0 0-.4 1-4.5 1.8-4.7.9-10.5.8-13.9.2 0 0 .7.6 4.3.5z" fill="#5382A1" />
      </svg>
    ),
  },
  {
    name: "Python",
    color: "#3776AB",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.9 4C10.7 4 11 6.3 11 6.3V8.7h5v.7H8.7S5 8.9 5 14.2s3.2 5.1 3.2 5.1H10v-2.5s-.1-3.2 3.1-3.2h5.4s3 .1 3-2.9V7.1S22.1 4 15.9 4z" fill="url(#pyBlue)" />
        <path d="M16.1 28c5.2 0 4.9-2.3 4.9-2.3V23.3h-5v-.7h8.3s3.7.4 3.7-4.9-3.2-5.1-3.2-5.1H23v2.5s.1 3.2-3.1 3.2h-5.4s-3-.1-3 2.9v4.7s-.5 3 4.6 3z" fill="url(#pyYellow)" />
        <circle cx="13.5" cy="6.8" r=".9" fill="#fff" />
        <circle cx="18.5" cy="25.2" r=".9" fill="#fff" />
        <defs>
          <linearGradient id="pyBlue" x1="5" y1="4" x2="22.5" y2="19.3" gradientUnits="userSpaceOnUse">
            <stop stopColor="#387EB8" />
            <stop offset="1" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="pyYellow" x1="9.5" y1="12.7" x2="27" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE052" />
            <stop offset="1" stopColor="#FFC331" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "C++",
    color: "#00599C",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3L4.5 9.5v13L16 29l11.5-6.5v-13L16 3z" fill="#00599C" />
        <path d="M16 3L4.5 9.5v13L16 29l11.5-6.5v-13L16 3z" fill="url(#cppGrad)" opacity="0.3" />
        <path d="M16 8.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5c2.7 0 5-1.4 6.4-3.5l-2.7-1.5c-.8 1.3-2.2 2.2-3.8 2.2-2.5 0-4.5-2-4.5-4.6s2-4.6 4.5-4.6c1.6 0 2.9.9 3.7 2.1l2.7-1.6C20.9 9.9 18.6 8.5 16 8.5z" fill="#fff" />
        <path d="M21 14.5h1.5v-1.5H24V14.5h1.5V16H24v1.5h-1.5V16H21zM26 14.5h1.5v-1.5H29V14.5h1.5V16H29v1.5h-1.5V16H26z" fill="#fff" />
        <defs>
          <linearGradient id="cppGrad" x1="4.5" y1="3" x2="27.5" y2="29">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#004482" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.5 14.5L17.5 2.5a1.7 1.7 0 00-2.4 0L12.7 4.9l3 3a2 2 0 012.5 2.6l2.9 2.9a2 2 0 112.4 2.4 2 2 0 01-2.2-.4 2 2 0 01-.5-2l-2.7-2.7v7.1a2 2 0 11-2-.1V10.5a2 2 0 01-1.1-2.6L11.9 5 2.5 14.4a1.7 1.7 0 000 2.4L14.5 28.8a1.7 1.7 0 002.4 0L29.5 17a1.7 1.7 0 000-2.5z" fill="#F05032" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    color: "#ffffff",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" fill="#24292E" />
        <path fillRule="evenodd" clipRule="evenodd" d="M16 5.3a11 11 0 00-3.5 21.5c.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11 11 0 0016 5.3z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Unity 3D",
    color: "#ffffff",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" fill="#000" />
        <path d="M19.3 16l-3.5-6H9.5L6 16l3.5 6h6.3l3.5-6zm-6.8 4.5L10 16l2.5-4.5h5l2.5 4.5-2.5 4.5h-5z" fill="#fff" />
        <path d="M24.2 8.8l-4 .7 1.5 2.5-3.5 6 3.9.1 1.7-2.9L26 16l-2.2 1.8 1.7 2.9 3.9.1-3.5-6 1.5-2.5-4-1.5h1.8zM12.3 7.5L8.8 8.8l-4 1.5 1.5 2.5-3.5 6 3.9-.1 1.7-2.9L10.6 17l3.9-.1-3.5-6 1.5-2.5-4-1.4 3.8.5z" fill="#fff" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Vuforia",
    color: "#5C2D91",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#5C2D91" />
        <path d="M6 10l10 12 10-12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M11 10l5 6 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
        <circle cx="16" cy="23" r="2" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Blender",
    color: "#F5792A",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" fill="#F5792A" />
        <circle cx="16" cy="16" r="4.5" fill="#fff" />
        <path d="M16 11.5l-7.5 1.5L6 18l4.5 4.5H16h5.5L26 18l-2.5-5-7.5-1.5z" fill="none" stroke="#fff" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill="#F5792A" />
        <path d="M10 12.5l-4-3M22 12.5l4-3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    color: "#47A248",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" fill="#0B2B1B" />
        <path d="M16 5.5c-2.5 3-4 6.2-4 10.5 0 5.1 2 8.6 4 10.9 2-2.3 4-5.8 4-10.9 0-4.3-1.5-7.5-4-10.5z" fill="#47A248" />
        <path d="M16 8.4c-1.3 2.1-2 4.4-2 7.6 0 3.7 1 6.3 2 8v-15.6z" fill="#58C070" />
        <path d="M16 8.4V24c1-1.7 2-4.3 2-8 0-3.2-.7-5.5-2-7.6z" fill="#3D9142" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    color: "#0B4F83",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="26" height="24" rx="12" fill="#0B4F83" />
        <ellipse cx="16" cy="11" rx="8" ry="3.3" fill="#fff" opacity="0.95" />
        <path d="M8 11v8c0 1.8 3.6 3.3 8 3.3s8-1.5 8-3.3v-8" fill="none" stroke="#fff" strokeWidth="1.7" />
        <path d="M8 15c0 1.8 3.6 3.3 8 3.3s8-1.5 8-3.3" fill="none" stroke="#fff" strokeWidth="1.4" opacity="0.92" />
      </svg>
    ),
  },
  {
    name: "AWS (EC2)",
    color: "#FF9900",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="26" height="24" rx="6" fill="#232F3E" />
        <path d="M10 21.5h12M9 17.5h14M11 13.5h10" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8.5 9.5l3.2-2 3.2 2v4l-3.2 2-3.2-2v-4z" fill="#FF9900" />
        <path d="M17.3 9.5l3.2-2 3.2 2v4l-3.2 2-3.2-2v-4z" fill="#FFC266" />
      </svg>
    ),
  },
  {
    name: "Docker",
    color: "#2496ED",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="28" height="26" rx="6" fill="#0B1D2A" />
        <rect x="8" y="12" width="3" height="3" fill="#2496ED" />
        <rect x="12" y="12" width="3" height="3" fill="#2496ED" />
        <rect x="16" y="12" width="3" height="3" fill="#2496ED" />
        <rect x="20" y="12" width="3" height="3" fill="#2496ED" />
        <rect x="12" y="16" width="3" height="3" fill="#56B6F2" />
        <rect x="16" y="16" width="3" height="3" fill="#56B6F2" />
        <path d="M8 20c1 3.2 3.7 4.7 7.5 4.7 5.3 0 8.6-2.4 9.6-6.2-1.2.9-2.8 1.2-4.6 1.2H8z" fill="#2496ED" />
      </svg>
    ),
  },
];

const skillExpertise: Record<string, number> = {
  HTML: 90,
  CSS: 90,
  JavaScript: 80,
  "React.js": 70,
  "Next.js": 25,
  "Tailwind CSS": 85,
  Figma: 85,
  "Node.js": 30,
  Java: 65,
  Python: 65,
  "C++": 70,
  Git: 88,
  GitHub: 90,
  "Unity 3D": 65,
  Vuforia: 72,
  Blender: 72,
  MongoDB: 75,
  MySQL: 75,
  "AWS (EC2)": 75,
  Docker: 75,
};

const SkillsMarquee = () => {
  const tripled = [...skills, ...skills, ...skills];

  return (
    <section
      className="py-12 sm:py-14 md:py-16 px-14 sm:px-24 md:px-36 lg:px-48"
      aria-label="Skills and technologies"
    >
      <style>{`
        @keyframes marquee-slow {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 16s linear infinite;
          will-change: transform;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
        .skill-icon svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        .skill-card {
          transition: transform 0.25s ease, filter 0.2s ease, opacity 0.2s ease;
          transform: scale(1);
          transform-origin: center center;
          position: relative;
          overflow: visible;
        }
        .skill-percent {
          position: absolute;
          top: -24px;
          left: 0;
          z-index: 5;
          font-size: 10px;
          font-weight: 700;
          color: hsl(var(--foreground));
          background: hsl(var(--secondary));
          border: 1px solid hsl(var(--border));
          border-radius: 999px;
          padding: 1px 6px;
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity 0.2s ease, transform 0.2s ease;
          white-space: nowrap;
          line-height: 1;
        }
        .skill-text {
          position: relative;
          display: flex;
          align-items: flex-start;
          padding-top: 0;
          line-height: 1;
        }
        .skill-name {
          font-size: 0.75rem;
          font-weight: 600;
          line-height: 1.1;
          color: hsl(var(--foreground));
          white-space: nowrap;
        }
        @media (min-width: 640px) {
          .skill-name {
            font-size: 0.875rem;
          }
        }
        .skills-row:hover .skill-card {
          filter: blur(2px);
          opacity: 0.5;
        }
        .skills-row:hover .skill-card:hover {
          transform: scale(1.2);
          filter: none;
          opacity: 1;
          z-index: 2;
        }
        .skills-row:hover .skill-card:hover .skill-percent,
        .skill-card:hover .skill-percent {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl overflow-hidden pt-7 -mt-7">
        <div
          className="flex items-center gap-3 sm:gap-4 whitespace-nowrap animate-marquee-slow skills-row"
          role="list"
          aria-label="Technologies"
        >
          {tripled.map((skill, index) => (
            <div
              key={index}
              className="skill-card flex h-12 sm:h-14 items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 flex-shrink-0"
              role="listitem"
              aria-label={skill.name}
            >
              <span
                className={`${skill.name === "JavaScript" ? "w-7 h-7 sm:w-8 sm:h-8" : "w-8 h-8 sm:w-9 sm:h-9"} flex-shrink-0 block skill-icon`}
                aria-hidden="true"
                style={{
                  minWidth: skill.name === "JavaScript" ? "2rem" : "2.25rem",
                  minHeight: skill.name === "JavaScript" ? "2rem" : "2.25rem",
                  width: skill.name === "JavaScript" ? "2rem" : "2.25rem",
                  height: skill.name === "JavaScript" ? "2rem" : "2.25rem",
                }}
              >
                {skill.svg}
              </span>
              <span className="skill-text">
                <span className="skill-percent" aria-label={`${skillExpertise[skill.name] ?? 75} percent proficiency`}>
                  {skillExpertise[skill.name] ?? 75}%
                </span>
                <span className="skill-name">{skill.name}</span>
              </span>
            </div>
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[32px] sm:w-[48px]"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0px, hsl(var(--background)) 12px, hsl(var(--background) / 0.72) 24px, hsl(var(--background) / 0) 32px)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[32px] sm:w-[48px]"
          style={{
            background:
              "linear-gradient(to left, hsl(var(--background)) 0px, hsl(var(--background)) 12px, hsl(var(--background) / 0.72) 24px, hsl(var(--background) / 0) 32px)",
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default SkillsMarquee;
