import { motion } from "framer-motion";
import { Sparkles, Mail, MapPin, Phone, Linkedin, Github, Instagram, Twitter, Eye } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BorderGlow from "@/components/BorderGlow";
import CountUp from "@/components/CountUp";

const getOrdinalSuffix = (num: number) => {
  const mod10 = num % 10;
  const mod100 = num % 100;

  if (mod10 === 1 && mod100 !== 11) return "st";
  if (mod10 === 2 && mod100 !== 12) return "nd";
  if (mod10 === 3 && mod100 !== 13) return "rd";
  return "th";
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const visitorCount = 56;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-20 md:pt-32 pb-16 md:pb-24 px-14 sm:px-24 md:px-36 lg:px-48">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left side - Info */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 mb-4"
              >
                <motion.span
                  animate={{ opacity: [1, 0.35, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex"
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.span>
                <span className="text-sm uppercase tracking-widest text-primary">
                  Get in Touch
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-bold mb-6"
                style={{
                  fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                  fontSize: 'clamp(1.5rem, 8vw, 3.75rem)',
                  lineHeight: '1.1',
                  wordSpacing: '0.05em',
                  letterSpacing: '0.01em',
                  fontWeight: 505
                }}
              >
                Let's work{" "}
                <span className="text-primary" style={{
                  fontFamily: "'Clash Display', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                  fontSize: 'clamp(1.5rem, 8vw, 3.75rem)',
                  lineHeight: '1.1',
                  wordSpacing: '0.05em',
                  letterSpacing: '0.01em',
                  fontWeight: 505
                }}>together</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="ashu"
                style={{ fontFamily: '__Satoshi_4a0ccf, -apple-system, sans-serif', wordSpacing: '0.10em', letterSpacing: '0.01em', fontSize: '1rem', fontWeight: 500, lineHeight: '1.6' }}
              >
                Have a project in mind or just want to say hello? I'd love to hear
                from you. Fill out the form or reach out through any of the channels
                below.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 space-y-4"
              >
                {/* Availability Status Card */}
                <div className="w-full">
                  <div className="rounded-[23px] border border-border/60 bg-card/95 p-6 backdrop-blur-[2px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-[#a364ff] status-blink" />
                      </div>
                      <span className="text-sm font-medium text-foreground" style={{ fontFamily: '__Satoshi_4a0ccf, -apple-system, sans-serif', wordSpacing: '0.10em', letterSpacing: '0.01em', fontSize: '1rem', fontWeight: 500, lineHeight: '1.6' }}>Open to work</span>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="h-20 w-20 rounded-full overflow-hidden border border-border/60 shadow-lg">
                          <img
                            src="/good."
                            alt="Arun Chavan"
                            className="h-full w-full object-cover"
                            style={{ objectPosition: "50% 24%" }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">ARUN CHAVAN</h3>
                        <p className="ashu" style={{ fontFamily: '__Satoshi_4a0ccf, -apple-system, sans-serif', wordSpacing: '0.10em', letterSpacing: '0.01em', fontSize: '0.8rem', fontWeight: 500, lineHeight: '1.6' }}>MEARN-DEVELOPER</p>
                      </div>
                    </div>

                    <p className="ashu"
                      style={{ fontFamily: '__Satoshi_4a0ccf, -apple-system, sans-serif', wordSpacing: '0.10em', letterSpacing: '0.01em', fontSize: '1rem', fontWeight: 500, lineHeight: '1.6' }}>

                      My inbox is always open. Whether you have a project or just want to say Hi. I would love to hear from you. Feel free to contact me and I'll get back to you.
                    </p>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="space-y-3">
                  <div className="w-full">
                    <a
                      href="mailto:arunchavan1729@gmail.com"
                      className="group flex items-center gap-4 rounded-[15px] border border-border/60 bg-card/95 p-4 transition-all duration-300 group-hover:translate-x-1"
                    >
                      <div className="p-3 bg-black/10 dark:bg-white/10 rounded-lg transition-colors">
                        <Mail className="w-5 h-5 text-black dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1" style={{ fontFamily: '__Satoshi_4a0ccf, -apple-system, sans-serif', wordSpacing: '0.10em', letterSpacing: '0.01em', fontSize: '1rem', fontWeight: 500, lineHeight: '1.6' }}>Email</p>
                        <p className="ashu" style={{ fontFamily: '__Satoshi_4a0ccf, -apple-system, sans-serif', wordSpacing: '0.10em', letterSpacing: '0.01em', fontSize: '1rem', fontWeight: 500, lineHeight: '1.6' }}>
                          arunchavan1729@gmail.com
                        </p>
                      </div>
                    </a>
                  </div>



                  <div className="w-full">
                    <div className="flex items-center gap-4 rounded-[15px] border border-border/60 bg-card/95 p-4">
                      <div className="p-3 bg-black/10 dark:bg-white/10 rounded-lg">
                        <MapPin className="w-5 h-5 text-black dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1" style={{ fontFamily: '__Satoshi_4a0ccf, -apple-system, sans-serif', wordSpacing: '0.10em', letterSpacing: '0.01em', fontSize: '1rem', fontWeight: 500, lineHeight: '1.6' }}>Location</p>
                        <p className="ashu" style={{ fontFamily: '__Satoshi_4a0ccf, -apple-system, sans-serif', wordSpacing: '0.10em', letterSpacing: '0.01em', fontSize: '1rem', fontWeight: 500, lineHeight: '1.6' }}>Karnataka, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6 mt-12"
              >
                {[
                  { name: "LinkedIn", url: "https://linkedin.com", Icon: Linkedin },
                  { name: "GitHub", url: "https://github.com", Icon: Github },
                  { name: "Instagram", url: "https://instagram.com", Icon: Instagram },
                  { name: "Twitter", url: "https://twitter.com", Icon: Twitter },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    title={social.name}
                  >
                    <social.Icon className="w-5 h-5" />
                  </a>
                ))}
              </motion.div> */}
            </div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <BorderGlow
                className="w-full"
                borderRadius={24}
                backgroundColor="hsl(var(--secondary))"
                edgeSensitivity={18}
                glowRadius={62}
                glowIntensity={1.6}
                glowColor="272 94 74"
                coneSpread={30}
                fillOpacity={0.8}
                colors={["#c084fc", "#f472b6", "#e879f9"]}
                animated
                loop
                alwaysOn
              >
                <div className="rounded-[23px] border border-border/60 bg-card/95 p-4 sm:p-6 md:p-7 backdrop-blur-[2px]">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-2 text-foreground" style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontFamily: "'__Satoshi_4a0ccf'" }}>Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-card text-foreground rounded-md sm:rounded-lg border border-black/40 dark:border-white/40 focus:border-black/60 dark:focus:border-white/60 focus:outline-none focus:ring-1 focus:ring-black/50 dark:focus:ring-white/50 transition-colors text-sm"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-2 text-foreground" style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontFamily: "'__Satoshi_4a0ccf'" }}>Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-card text-foreground rounded-md sm:rounded-lg border border-black/40 dark:border-white/40 focus:border-black/60 dark:focus:border-white/60 focus:outline-none focus:ring-1 focus:ring-black/50 dark:focus:ring-white/50 transition-colors text-sm"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-2 text-foreground" style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontFamily: "'__Satoshi_4a0ccf'" }}>Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-card text-foreground rounded-md sm:rounded-lg border border-black/40 dark:border-white/40 focus:border-black/60 dark:focus:border-white/60 focus:outline-none focus:ring-1 focus:ring-black/50 dark:focus:ring-white/50 transition-colors text-sm"
                        placeholder="Project Inquiry"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-2 text-foreground" style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontFamily: "'__Satoshi_4a0ccf'" }}>Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-card text-foreground rounded-md sm:rounded-lg border border-black/40 dark:border-white/40 focus:border-black/60 dark:focus:border-white/60 focus:outline-none focus:ring-1 focus:ring-black/50 dark:focus:ring-white/50 transition-colors resize-none text-sm"
                        placeholder="Tell me about your project..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-fit inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 border border-foreground/55 text-foreground rounded-md sm:rounded-lg font-medium text-base sm:text-lg hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 focus:outline-none cursor-pointer"
                    >
                      <div className="transition-all duration-200 group-hover:rotate-45">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          className="h-5 w-5"
                          aria-hidden="true"
                        >
                          <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z" />
                        </svg>
                      </div>
                      Send Message
                    </button>
                  </form>
                </div>
              </BorderGlow>

              {/* Visitor Count Card *\/ */}

              <div className="mt-[100px]">
                <div className="w-fit rounded-[15px] border border-border/60 bg-card/95 p-4 backdrop-blur-[2px] flex justify-center items-center mx-auto">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-black/10 dark:bg-white/10">
                      <Eye className="h-5 w-5 text-black dark:text-white" aria-hidden="true" />
                    </div>

                    <p
                      className="flex items-center gap-1 whitespace-nowrap text-[clamp(1rem,1.05vw,1.45rem)] font-semibold leading-none text-foreground"
                      style={{
                        fontFamily: "'__Satoshi_4a0ccf', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      <span className="text-[1em] text-foreground">You are the</span>
                      <CountUp
                        to={visitorCount}
                        duration={1.6}
                        className="text-[1em] text-violet-500 dark:text-violet-300"
                      />
                      <span className="text-[1em] text-violet-500/80 dark:text-violet-300/80">{getOrdinalSuffix(visitorCount)}</span>
                      <span className="text-[1em] text-foreground">visitor</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
