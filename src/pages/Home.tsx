import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { FileText, X, Download } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import PixelCursor from '../components/PixelCursor';
import Chatbot from '../components/Chatbot';

gsap.registerPlugin(ScrollTrigger);

function ResumeModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.85, y: 60, rotate: -2 }}
        animate={{ scale: 1, y: 0, rotate: 0 }}
        exit={{ scale: 0.85, y: 60, rotate: 2 }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        className="relative w-full max-w-4xl h-[90vh] bg-white brutal-border border-black shadow-[12px_12px_0_0_#2563eb] flex flex-col z-10"
        onClick={e => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-black text-white px-6 py-4 flex items-center justify-between border-b-4 border-black shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-accent animate-pulse border-2 border-white" />
            <span className="font-bold text-xl uppercase tracking-tighter">Harshith_R // Resume</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Harshith_R_Resume.pdf"
              className="bg-accent text-white font-bold uppercase text-sm px-4 py-2 brutal-border border-white hover:bg-white hover:text-black transition-colors flex items-center gap-2"
            >
              <Download size={16} /> Download
            </a>
            <button
              onClick={onClose}
              className="text-white hover:text-accent transition-colors p-1"
              aria-label="Close resume"
            >
              <X size={28} />
            </button>
          </div>
        </div>

        {/* PDF iframe */}
        <iframe
          src="/resume.pdf"
          title="Harshith R Resume"
          className="flex-1 w-full"
          style={{ border: 'none' }}
        />
      </motion.div>
    </motion.div>
  );
}

function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => { ScrollTrigger.refresh(); }, 100);
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = resumeOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [resumeOpen]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <PixelCursor />

      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-40 mix-blend-difference text-white">
        <div className="font-sans font-bold text-2xl tracking-tighter uppercase">Harshith R</div>
        <div className="flex gap-6 font-bold uppercase text-sm items-center">
          <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <button
            onClick={() => setResumeOpen(true)}
            className="hover:text-yellow-400 transition-colors bg-white text-black px-3 py-1 font-black flex items-center gap-2 mix-blend-normal"
          >
            <FileText size={15} /> RESUME
          </button>
        </div>
      </nav>

      <main className="flex flex-col gap-32 pb-32">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>

      <footer className="w-full bg-black text-white mt-12 overflow-hidden">
        {/* Marquee Warning Tape */}
        <div className="bg-yellow-400 text-black py-4 sm:py-6 border-y-8 border-black transform -rotate-2 scale-110 relative z-10 my-16 shadow-[0_12px_0_0_#2563eb]">
          <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,#000,#000_20px,transparent_20px,transparent_40px)] pointer-events-none" />
          <div className="animate-marquee font-black uppercase text-5xl md:text-8xl tracking-tighter hover:text-black/20 hover:[-webkit-text-stroke:2px_black] transition-colors duration-300 relative z-20 cursor-crosshair">
            <span className="mr-12">TURNING ALGORITHMS &amp; HARDWARE INTO REAL-WORLD IMPACT //</span>
            <span className="mr-12">TURNING ALGORITHMS &amp; HARDWARE INTO REAL-WORLD IMPACT //</span>
            <span className="mr-12">TURNING ALGORITHMS &amp; HARDWARE INTO REAL-WORLD IMPACT //</span>
            <span className="mr-12">TURNING ALGORITHMS &amp; HARDWARE INTO REAL-WORLD IMPACT //</span>
          </div>
        </div>

        {/* Socials & Copyright */}
        <div className="p-12 md:p-24 flex flex-col xl:flex-row justify-between items-center gap-12 relative z-20">
          <div className="flex flex-wrap justify-center xl:justify-start gap-6">
            <a href="https://github.com/Harshith404" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold text-xl uppercase px-8 py-4 brutal-shadow border-4 border-black hover:-translate-y-2 transition-transform duration-300 flex items-center gap-3">
              GITHUB <FaGithub className="text-3xl" />
            </a>
            <a href="https://linkedin.com/in/harshith-r1506" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold text-xl uppercase px-8 py-4 brutal-shadow border-4 border-black hover:-translate-y-2 transition-transform duration-300 flex items-center gap-3">
              LINKEDIN <FaLinkedin className="text-3xl" />
            </a>
            <a href="mailto:harshithshetty2006@gmail.com" className="bg-accent text-white font-bold text-xl uppercase px-8 py-4 brutal-shadow border-4 border-black hover:-translate-y-2 transition-transform duration-300 flex items-center gap-3">
              EMAIL ME <FaPaperPlane className="text-3xl" />
            </a>
            <button
              onClick={() => setResumeOpen(true)}
              className="bg-yellow-400 text-black font-bold text-xl uppercase px-8 py-4 brutal-shadow border-4 border-black hover:-translate-y-2 transition-transform duration-300 flex items-center gap-3"
            >
              RESUME <FileText className="text-3xl" />
            </button>
          </div>

          <div className="text-center xl:text-right">
            <h3 className="text-4xl font-bold uppercase tracking-tighter mb-2">Harshith R</h3>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">© 2026 // ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>

      {/* Resume Modal */}
      <AnimatePresence>
        {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
      </AnimatePresence>

      {/* Floating Resume AI Chatbot */}
      <Chatbot />
    </div>
  );
}

export default Home;
