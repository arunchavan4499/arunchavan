import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const getCurrentTheme = (): "light" | "dark" => {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

type ViewTransitionLike = {
  ready: Promise<void>;
};

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void | Promise<void>) => ViewTransitionLike;
};

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(getCurrentTheme);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const scrollProgress = useSpring(
    useTransform(scrollY, [0, 260], [0, 1], { clamp: true }),
    { stiffness: 140, damping: 24, mass: 0.3 },
  );

  const shellReveal = useSpring(
    useTransform(scrollY, [0, 110], [0, 1], { clamp: true }),
    { stiffness: 170, damping: 26, mass: 0.28 },
  );

  const navMaxWidth = useTransform(scrollProgress, [0, 1], ["90rem", "68rem"]);
  const blurAmount = useTransform(shellReveal, [0, 1], [0, 22]);
  const saturationAmount = useTransform(shellReveal, [0, 1], [100, 165]);
  const borderAlpha = useTransform(shellReveal, [0, 1], [0, 0.28]);
  const shadowAlpha = useTransform(shellReveal, [0, 1], [0, 0.22]);

  const bgStartAlpha = useTransform(shellReveal, [0, 1], [0, 0]);
  const bgEndAlpha = useTransform(shellReveal, [0, 1], [0, 0]);

  const navBackground = useMotionTemplate`linear-gradient(135deg, rgba(${theme === "dark" ? "8, 8, 8" : "255, 255, 255"}, ${bgStartAlpha}) 0%, rgba(${theme === "dark" ? "18, 18, 18" : "244, 244, 244"}, ${bgEndAlpha}) 100%)`;
  const navBackdrop = useMotionTemplate`blur(${blurAmount}px) saturate(${saturationAmount}%)`;
  const navBorderColor = useMotionTemplate`rgba(${theme === "dark" ? "255, 255, 255" : "25, 25, 25"}, ${borderAlpha})`;
  const navShadow = useMotionTemplate`0 10px 32px rgba(0, 0, 0, ${shadowAlpha})`;

  useEffect(() => {
    const root = document.documentElement;

    const syncTheme = () => {
      setTheme(root.classList.contains("dark") ? "dark" : "light");
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleTheme = (event?: MouseEvent<HTMLButtonElement>) => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    const applyTheme = () => {
      setTheme(next);
      root.classList.toggle("dark", next === "dark");
      window.localStorage.setItem("theme", next);
    };

    if (shouldReduceMotion || !event) {
      applyTheme();
      return;
    }

    const doc = document as DocumentWithViewTransition;
    if (!doc.startViewTransition) {
      applyTheme();
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const maxX = Math.max(x, window.innerWidth - x);
    const maxY = Math.max(y, window.innerHeight - y);
    const endRadius = Math.hypot(maxX, maxY);

    const transition = doc.startViewTransition(() => {
      applyTheme();
    });

    transition.ready.then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        } as KeyframeAnimationOptions,
      );
    }).catch(() => {
      // Fallback behavior is already handled above.
    });
  };

  return (
    <motion.nav
      initial={shouldReduceMotion ? {} : { y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-2 sm:top-3 z-50 flex justify-center px-3 sm:px-4 md:px-6"
      role="navigation"
      aria-label="Main navigation"
    >
      <motion.div
        className="relative isolate flex h-[52px] sm:h-[56px] w-full items-center justify-between rounded-full px-5 sm:px-6 transition-all duration-300 ease-out"
        style={{
          maxWidth: navMaxWidth,
          transformOrigin: "top center",
        }}
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full border"
          style={{
            background: navBackground,
            backdropFilter: navBackdrop,
            WebkitBackdropFilter: navBackdrop,
            borderColor: navBorderColor,
            boxShadow: navShadow,
          }}
        />

        {/* Logo */}
        <Link
          to="/"
          className="relative z-10 font-black text-foreground text-base sm:text-lg focus:outline-none rounded-md px-1"
          aria-label="Home"
        >
          AC
        </Link>

        {/* Desktop Nav */}
        <motion.div className="nav-spotlight relative z-10 hidden md:flex items-center gap-6 lg:gap-8 transition-all duration-300">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "nav-spotlight-link relative transition-all duration-200 rounded-full px-3 py-1.5",
                  isActive
                    ? "text-black dark:text-white"
                    : "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                )}
                style={{ fontSize: '15px', letterSpacing: '0.01em', fontWeight: 500, fontFamily: '__Satoshi_4a0ccf, -apple-system, sans-serif' }}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-primary transition-all duration-250",
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  )}
                  aria-hidden="true"
                />
                <div className="relative z-10">{link.name}</div>
              </Link>
            );
          })}
        </motion.div>

        {/* Theme toggle - Desktop */}
        <div className="relative z-10 hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-secondary transition-all duration-200 focus:outline-none"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 transition-transform duration-200" aria-hidden="true" />
            ) : (
              <Moon className="w-5 h-5 transition-transform duration-200" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="relative z-10 md:hidden p-2.5 -mr-2 focus:outline-none rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 px-3 sm:px-4"
            id="mobile-menu"
          >
            <div className="flex flex-col gap-1 rounded-2xl backdrop-blur-md p-4 shadow-lg shadow-black/10 dark:shadow-black/30"
              style={{
                background: theme === "dark"
                  ? "linear-gradient(135deg, rgba(8, 8, 8, 0.95) 0%, rgba(18, 18, 18, 0.9) 100%)"
                  : "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 250, 250, 0.9) 100%)"
              }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.2, delay: shouldReduceMotion ? 0 : index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block py-3 px-4 rounded-lg transition-all duration-200",
                      location.pathname === link.path
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                    style={{ fontSize: '16px', letterSpacing: '0.01em', fontWeight: 500, fontFamily: '__Satoshi_4a0ccf, system-ui, -apple-system, sans-serif' }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {location.pathname === link.path && (
                          <div className="h-5 w-1 rounded-full bg-primary" aria-hidden="true" />
                        )}
                        <div>{link.name}</div>
                      </div>
                      {location.pathname === link.path && (
                        <div
                          className="h-[2px] w-8 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
              <div className="mt-2 pt-3 border-t border-border">
                <button
                  onClick={(event) => {
                    toggleTheme(event);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-secondary transition-all duration-200"
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                  <span className="text-muted-foreground font-medium" style={{ fontSize: '16px' }}>Theme</span>
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Moon className="w-5 h-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
