import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MusicPlayer from "./components/MusicPlayer";
import DotField from "./components/DotField";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <div className="fixed inset-0 z-0">
      <DotField
        dotRadius={1.5}
        dotSpacing={14}
        cursorRadius={500}
        cursorForce={0.1}
        bulgeOnly={true}
        bulgeStrength={67}
        glowRadius={160}
        sparkle={false}
        waveAmplitude={0}
        gradientFrom="rgba(168, 85, 247, 0.35)"
        gradientTo="rgba(180, 151, 207, 0.25)"
        glowColor="#120F17"
      />
    </div>
    <div className="relative z-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <MusicPlayer />
    </div>
  </TooltipProvider>
);

export default App;
