import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { Sparkles } from "lucide-react";
import Card from "./Card.tsx";

const aboutRevealSegments: { text?: string; highlight?: boolean; br?: boolean }[] = [
  {
    text: "I'm Arun Chavan-an aspiring",
    highlight: false,
  },
  { text: "Full Stack (MERN) Developer", highlight: true },
  { text: "with hands-on experience in", highlight: false },
  { text: "React and modern JavaScript", highlight: true },
  { text: ", and a strong foundation in HTML, CSS, and Tailwind CSS. Currently, I'm building backend expertise with", highlight: false },
  { text: "Node.js,Next.js", highlight: true },
  { text: " and", highlight: false },
  { text: "REST API development", highlight: true },
  { text: ", while creating", highlight: false },
  { text: "responsive and dynamic web applications", highlight: true },
  { br: true },
  { br: true },
  { text: "I'm passionate about solving real-world problems through code and continuously improving my", highlight: false },
  { text: "technical skills", highlight: true },
  { text: ". I focus on writing", highlight: false },
  { text: "efficient, scalable solutions", highlight: true },
  { text: "and keeping up with modern development practices.", highlight: false },
];

const aboutRevealWords = aboutRevealSegments.flatMap((segment, i) => {
  if (segment.br) return [{ word: `br-${i}`, highlight: false, isBr: true }];
  return segment.text!
    .split(" ")
    .filter(Boolean)
    .map(word => ({ word, highlight: !!segment.highlight, isBr: false }));
});

const aboutSkillIcons = [
  {
    name: "React.js",
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
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" fill="#000" />
        <path d="M10.5 21V11h8.1l.1 1.6h-6.4v3h5.8v1.6h-5.8v3.2h6.5V21H10.5z" fill="url(#aboutNextGrad)" />
        <path d="M19.5 11l4.5 7v-7h1.5v10L19 13v8h-1.5V11h2z" fill="#fff" />
        <defs>
          <linearGradient id="aboutNextGrad" x1="10.5" y1="16" x2="19" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8c-2.7 0-4.4 1.35-5.1 4.05 1.02-1.35 2.21-1.856 3.57-1.518.776.194 1.33.757 1.94 1.378C17.44 13 18.6 14.2 21.1 14.2c2.7 0 4.44-1.35 5.1-4.05-1.02 1.35-2.21 1.856-3.57 1.518-.776-.194-1.33-.757-1.94-1.378C19.66 9.2 18.5 8 16 8zM10.9 14.2c-2.7 0-4.44 1.35-5.1 4.05 1.02-1.35 2.21-1.856 3.57-1.518.776.194 1.33.757 1.94 1.378C12.34 19.2 13.5 20.4 16 20.4c2.7 0 4.44-1.35 5.1-4.05-1.02 1.35-2.21 1.856-3.57 1.518-.776-.194-1.33-.757-1.94-1.378C14.56 15.4 13.4 14.2 10.9 14.2z" fill="#38B2AC" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="2" fill="#F7DF1E" />
        <path d="M9.2 25.2l2.1-1.3c.4.7.8 1.3 1.7 1.3.9 0 1.4-.3 1.4-1.7V15h2.6v8.6c0 2.7-1.6 4-3.9 4-2.1 0-3.3-1.1-3.9-2.4zM18.2 24.9l2.1-1.2c.6 1 1.3 1.7 2.7 1.7 1.1 0 1.8-.6 1.8-1.3 0-.9-.7-1.2-1.9-1.8l-.7-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-1.9 1.5-3.4 3.8-3.4 1.6 0 2.8.6 3.6 2l-2 1.3c-.4-.8-1-1.1-1.7-1.1-.8 0-1.2.5-1.2 1.1 0 .8.5 1.1 1.7 1.6l.7.3c2.2.9 3.4 1.9 3.4 4 0 2.3-1.8 3.6-4.2 3.6-2.4 0-3.9-1.2-4.7-2.6z" fill="#323330" />
      </svg>
    ),
  },
  {
    name: "Node.js",
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
    name: "Figma",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 4h5.25c2.9 0 5.25 2.35 5.25 5.25s-2.35 5.25-5.25 5.25H10.5V4z" fill="#F24E1E" />
        <path d="M10.5 14.5h5.25c2.9 0 5.25 2.35 5.25 5.25s-2.35 5.25-5.25 5.25H10.5v-10.5z" fill="#FF7262" />
        <path d="M5.25 19.75a5.25 5.25 0 0 0 5.25 5.25 5.25 5.25 0 0 0 5.25-5.25v-5.25H10.5a5.25 5.25 0 0 0-5.25 5.25z" fill="#A259FF" />
        <path d="M15.75 4h5.25a5.25 5.25 0 1 1 0 10.5h-5.25V4z" fill="#1ABCFE" />
        <path d="M21 14.5a5.25 5.25 0 1 1-5.25 5.25V14.5H21z" fill="#0ACF83" />
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.9 4C10.7 4 11 6.3 11 6.3V8.7h5v.7H8.7S5 8.9 5 14.2s3.2 5.1 3.2 5.1H10v-2.5s-.1-3.2 3.1-3.2h5.4s3 .1 3-2.9V7.1S22.1 4 15.9 4z" fill="url(#aboutPyBlue)" />
        <path d="M16.1 28c5.2 0 4.9-2.3 4.9-2.3V23.3h-5v-.7h8.3s3.7.4 3.7-4.9-3.2-5.1-3.2-5.1H23v2.5s.1 3.2-3.1 3.2h-5.4s-3-.1-3 2.9v4.7s-.5 3 4.6 3z" fill="url(#aboutPyYellow)" />
        <circle cx="13.5" cy="6.8" r=".9" fill="#fff" />
        <circle cx="18.5" cy="25.2" r=".9" fill="#fff" />
        <defs>
          <linearGradient id="aboutPyBlue" x1="5" y1="4" x2="22.5" y2="19.3" gradientUnits="userSpaceOnUse">
            <stop stopColor="#387EB8" />
            <stop offset="1" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="aboutPyYellow" x1="9.5" y1="12.7" x2="27" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE052" />
            <stop offset="1" stopColor="#FFC331" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Java",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2 19.6s-1.2.7.8 1c2.5.3 3.7.3 6.5-.3 0 0 .7.5 1.7.9-6.1 2.6-13.8-.2-9-1.6zM11.5 16.9s-1.3 1 .7 1.2c2.6.3 4.6.3 8.1-.4 0 0 .5.5 1.3.8-7.2 2.1-15.2.2-10.1-1.6z" fill="#5382A1" />
        <path d="M17.6 12.1c1.5 1.7-.4 3.2-.4 3.2s3.7-1.9 2-4.3c-1.6-2.2-2.8-3.3 3.8-7.1 0 0-10.4 2.6-5.4 8.2z" fill="#E76F00" />
        <path d="M24.5 21.8s.9.7-1 1.4c-3.5 1-14.6 1.3-17.7.1-1.1-.5.9-1.2 1.6-1.3.6-.1 1-.1 1-.1-1.2-.8-7.5 1.6-3.2 2.3 11.6 1.9 21.2-.8 19.3-2.4zM12.8 14.2s-5.5 1.3-1.9 1.8c1.5.2 4.5.2 7.3-.1 2.3-.2 4.6-.7 4.6-.7s-.8.3-1.4.7c-5.6 1.5-16.4.8-13.3-.7 2.6-1.2 4.7-1 4.7-1zM22.3 18.6c5.7-2.9 3-5.8 1.2-5.4-.4.1-.6.2-.6.2s.2-.3.5-.4c3.7-1.3 6.5 3.8-1.1 5.8 0 0 .1-.1 0-.2z" fill="#5382A1" />
        <path d="M19.1 2s3.1 3.1-3 7.9c-5 4-1.1 6.2 0 8.8-2.9-2.6-5-4.9-3.6-7.1C14.5 8.4 20.7 6.8 19.1 2z" fill="#E76F00" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
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
  {
    name: "HTML",
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
    name: "C++",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3L4.5 9.5v13L16 29l11.5-6.5v-13L16 3z" fill="#00599C" />
        <path d="M16 3L4.5 9.5v13L16 29l11.5-6.5v-13L16 3z" fill="url(#aboutCppGrad)" opacity="0.3" />
        <path d="M16 8.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5c2.7 0 5-1.4 6.4-3.5l-2.7-1.5c-.8 1.3-2.2 2.2-3.8 2.2-2.5 0-4.5-2-4.5-4.6s2-4.6 4.5-4.6c1.6 0 2.9.9 3.7 2.1l2.7-1.6C20.9 9.9 18.6 8.5 16 8.5z" fill="#fff" />
        <path d="M21 14.5h1.5v-1.5H24V14.5h1.5V16H24v1.5h-1.5V16H21zM26 14.5h1.5v-1.5H29V14.5h1.5V16H29v1.5h-1.5V16H26z" fill="#fff" />
        <defs>
          <linearGradient id="aboutCppGrad" x1="4.5" y1="3" x2="27.5" y2="29">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#004482" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Git",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.5 14.5L17.5 2.5a1.7 1.7 0 00-2.4 0L12.7 4.9l3 3a2 2 0 012.5 2.6l2.9 2.9a2 2 0 112.4 2.4 2 2 0 01-2.2-.4 2 2 0 01-.5-2l-2.7-2.7v7.1a2 2 0 11-2-.1V10.5a2 2 0 01-1.1-2.6L11.9 5 2.5 14.4a1.7 1.7 0 000 2.4L14.5 28.8a1.7 1.7 0 002.4 0L29.5 17a1.7 1.7 0 000-2.5z" fill="#F05032" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    svg: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" fill="#24292E" />
        <path fillRule="evenodd" clipRule="evenodd" d="M16 5.3a11 11 0 00-3.5 21.5c.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11 11 0 0016 5.3z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Unity 3D",
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
];

type RevealWordProps = {
  word: string;
  highlight: boolean;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

const RevealWord = ({ word, highlight, index, total, progress }: RevealWordProps) => {
  const step = 1 / Math.max(total, 1);
  const start = index * step;
  const end = Math.min(start + step, 1);
  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  const y = useTransform(progress, [start, end], [10, 0]);
  const filter = useTransform(progress, [start, end], ["blur(4px)", "blur(0px)"]);

  return (
    <motion.span
      className="inline-block will-change-transform"
      style={{
        opacity,
        y,
        filter,
        color: highlight ? "hsl(var(--primary))" : "inherit",
        fontSize: "inherit",
        marginRight: "0.28em",
      }}
    >
      {word}
    </motion.span>
  );
};

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const aboutTextRef = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: aboutTextRef,
    offset: ["start 0.95", "end 0.35"], // make the end bound higher up
  });
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 35, 
    damping: 25,
    mass: 1,
  });
  // Wrap up the reveal at exactly 76% of the scroll journey as requested
  const revealProgress = useTransform(smoothScrollProgress, [0, 0.76], [0, 1]);

  return (
    <section className="pt-[10px] pb-[50px] px-14 sm:px-24 md:px-36 lg:px-48 bg-background">
      <div className="max-w-7xl mx-auto px-1 sm:px-2">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
          className="flex items-center gap-2 mb-8 ml-1"
        >
          <motion.span
            animate={shouldReduceMotion ? undefined : { opacity: [1, 0.35, 1] }}
            transition={shouldReduceMotion ? undefined : { duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex"
            aria-hidden="true"
          >
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-primary" aria-hidden="true" />
          </motion.span>
          <span className="text-base uppercase tracking-widest text-primary">
            ABOUT ME
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="md:col-span-2"
          >
            <Card />
          </motion.div>

          <div className="md:col-span-3">
            <motion.div
              ref={aboutTextRef}
              className="text-left text-foreground dark:text-white [text-wrap:pretty]"
              style={{
                fontSize: 'clamp(1rem, 1.4vw + 0.6rem, 1.35rem)',
                fontFamily: "'__Satoshi_4a0ccf', system-ui, -apple-system, sans-serif",
                wordSpacing: '0.03em',
                lineHeight: '1.4',
                fontWeight: 500,
                letterSpacing: '0.01em',
              }}
            >
              {shouldReduceMotion ? (
                <>
                  I'm Arun Chavan, an aspiring{" "}
                  <span style={{ color: 'hsl(var(--primary))', fontSize: 'inherit' }}>Full Stack (MERN) Developer</span>
                  {" with hands-on experience in "}
                  <span style={{ color: 'hsl(var(--primary))', fontSize: 'inherit' }}>React and modern JavaScript</span>
                  {", and a strong foundation in HTML, CSS, and Tailwind CSS. Currently, I'm building backend expertise with "}
                  <span style={{ color: 'hsl(var(--primary))', fontSize: 'inherit' }}>Node.js, Next.js</span>
                  {" and "}
                  <span style={{ color: 'hsl(var(--primary))', fontSize: 'inherit' }}>REST API development</span>
                  {", while creating "}
                  <span style={{ color: 'hsl(var(--primary))', fontSize: 'inherit' }}>responsive and dynamic web applications</span>
                  {"."}
                  <span className="block w-full" style={{ height: '0.5em' }} aria-hidden="true" />
                  {"I'm passionate about solving real-world problems through code and continuously improving my "}
                  <span style={{ color: 'hsl(var(--primary))', fontSize: 'inherit' }}>technical skills</span>
                  {". I focus on writing "}
                  <span style={{ color: 'hsl(var(--primary))', fontSize: 'inherit' }}>efficient, scalable solutions</span>
                  {" and keeping up with modern development practices."}
                </>
              ) : (
                aboutRevealWords.map(({ word, highlight, isBr }, index) =>
                  isBr ? (
                    <span 
                      key={word} 
                      className="block w-full" 
                      style={{ height: '0.45em' }} 
                      aria-hidden="true" 
                    />
                  ) : (
                    <RevealWord
                      key={`${index}-${word}`}
                      word={word}
                      highlight={highlight}
                      index={index}
                      total={aboutRevealWords.length}
                      progress={revealProgress}
                    />
                  )
                )
              )}
            </motion.div>
            <hr className="mt-6 border-border/70 dark:border-border/60" aria-hidden="true" />
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : 0.08 }}
              className="mt-6"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground dark:text-gray-600">Skills</p>
              <style>{`
                .skill-tooltip-about {
                  position: absolute;
                  bottom: 100%;
                  left: 50%;
                  transform: translateX(-50%);
                  margin-bottom: 8px;
                  padding: 6px 12px;
                  background: hsl(var(--foreground));
                  color: hsl(var(--background));
                  border-radius: 6px;
                  font-size: 12px;
                  font-weight: 600;
                  white-space: nowrap;
                  opacity: 0;
                  pointer-events: none;
                  transition: opacity 0.2s ease;
                  z-index: 10;
                }
                .skill-tooltip-about::after {
                  content: '';
                  position: absolute;
                  top: 100%;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 0;
                  height: 0;
                  border-left: 4px solid transparent;
                  border-right: 4px solid transparent;
                  border-top: 4px solid hsl(var(--foreground));
                }
                .skill-card-about:hover .skill-tooltip-about {
                  opacity: 1;
                }
              `}</style>
              <div className="grid grid-cols-10 items-center justify-items-center gap-2.5 sm:gap-3" aria-label="Core skills icons">
                {aboutSkillIcons.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-card-about group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-border/70 bg-card/90 p-2 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <div className="skill-tooltip-about">{skill.name}</div>
                    <div className="h-full w-full transition-transform duration-200 group-hover:scale-105">
                      {skill.svg}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
