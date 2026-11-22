import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ArrowRight, FileText, Check, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenResume?: () => void;
}

const Hero = ({ onOpenResume }: HeroProps) => {
  const [emailCopied, setEmailCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const decoRef = useRef<HTMLDivElement>(null);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText('harshithshetty2006@gmail.com');
    }
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=harshithshetty2006@gmail.com', '_blank');
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      
      // Waterfall entrance for left text
      tl.fromTo('.hero-in',
        { y: 60, opacity: 0, rotation: 2 },
        { y: 0, opacity: 1, rotation: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(1.5)' },
        0
      );

      // Photo entrance
      tl.fromTo('.hero-photo',
        { scale: 0.85, opacity: 0, y: 80, rotation: -6 },
        { scale: 1, opacity: 1, y: 0, rotation: 2, duration: 1, ease: 'back.out(1.4)' },
        0.3
      );

      // Parallax effect on subtle backdrop decoration
      if (decoRef.current) {
        gsap.to(decoRef.current, {
          y: 200,
          rotation: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-28 pb-16 relative overflow-hidden">
      
      {/* Background Decorative Grid Accent (Behind content) */}
      <div ref={decoRef} className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] hidden xl:block z-0 pointer-events-none opacity-20">
        <div className="grid grid-cols-6 grid-rows-6 gap-3 transform -rotate-12 scale-110">
          {[...Array(36)].map((_, i) => (
            <div 
              key={i} 
              className={`border-4 border-black ${i % 3 === 0 ? 'bg-accent' : i % 5 === 0 ? 'bg-yellow-400' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        
        {/* Left Column: Bio & Info */}
        <div className="max-w-3xl w-full lg:w-[58%]">
          <p className="hero-in opacity-0 font-bold uppercase tracking-widest text-accent mb-4 text-lg md:text-xl transition-all hover:scale-105 origin-left inline-block">
            Full Stack Developer · AI & Software Systems · Embedded Systems & IoT
          </p>
          
          <h1 ref={textRef} className="hero-in opacity-0 text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-black uppercase leading-none mb-6 text-white [-webkit-text-stroke:3px_black] drop-shadow-[8px_8px_0_#000] hover:text-white hover:[-webkit-text-stroke:3px_#2563eb] hover:drop-shadow-[16px_16px_0_#2563eb] hover:-translate-y-2 hover:-rotate-1 transition-all duration-300 cursor-default">
            Harshith R
          </h1>
          
          <div className="hero-in opacity-0 bg-white brutal-border brutal-shadow p-6 sm:p-8 max-w-2xl mt-4 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#000] hover:border-accent group">
            <p className="text-lg sm:text-xl md:text-2xl font-body font-bold leading-relaxed group-hover:text-accent transition-colors">
              Computer Science engineer & systems builder engineering intelligent software, IoT devices, and multi-agent AI workflows from silicon to production.
            </p>
            <div className="mt-5 font-sans text-base sm:text-lg md:text-xl uppercase bg-black text-white inline-block px-4 py-2 transform -rotate-1 transition-all duration-300 hover:bg-accent hover:scale-105 hover:rotate-1 hover:shadow-[6px_6px_0_0_#000]">
              "ARCHITECTING FULL STACK SYSTEMS FROM DATABASE TO PIXEL"
            </div>
          </div>
          
          {/* Action Buttons Row */}
          <div className="hero-in opacity-0 flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
            <a 
              href="https://github.com/Harshith404" 
              target="_blank" 
              rel="noreferrer" 
              className="group bg-white text-black brutal-border brutal-shadow font-sans font-bold uppercase tracking-wider px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] transition-all duration-300 flex-1 sm:flex-none sm:min-w-[170px]"
            >
              <span className="flex items-center gap-2.5">
                <FaGithub size={22} /> GitHub
              </span>
              <ArrowRight strokeWidth={3} size={18} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>

            <a 
              href="https://linkedin.com/in/harshith-r1506" 
              target="_blank" 
              rel="noreferrer" 
              className="group bg-white text-black brutal-border brutal-shadow font-sans font-bold uppercase tracking-wider px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] transition-all duration-300 flex-1 sm:flex-none sm:min-w-[170px]"
            >
              <span className="flex items-center gap-2.5">
                <FaLinkedin size={22} /> LinkedIn
              </span>
              <ArrowRight strokeWidth={3} size={18} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>

            <a 
              href="https://leetcode.com/u/Harshith_Rangaraju" 
              target="_blank" 
              rel="noreferrer" 
              className="group bg-white text-black brutal-border brutal-shadow font-sans font-bold uppercase tracking-wider px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-yellow-400 hover:text-black hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] transition-all duration-300 flex-1 sm:flex-none sm:min-w-[170px]"
            >
              <span className="flex items-center gap-2.5">
                <SiLeetcode size={22} /> LeetCode
              </span>
              <ArrowRight strokeWidth={3} size={18} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>

            <button 
              type="button"
              onClick={() => onOpenResume ? onOpenResume() : window.open('/resume.pdf', '_blank')}
              className="group bg-yellow-400 text-black brutal-border brutal-shadow font-sans font-bold uppercase tracking-wider px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#2563eb] transition-all duration-300 flex-1 sm:flex-none sm:min-w-[170px] cursor-pointer"
            >
              <span className="flex items-center gap-2.5">
                <FileText size={22} /> Resume
              </span>
              <ArrowRight strokeWidth={3} size={18} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </button>

            <a 
              href="mailto:harshithshetty2006@gmail.com" 
              onClick={handleEmailClick}
              className={`group brutal-border brutal-shadow font-sans font-bold uppercase tracking-wider px-5 py-3.5 flex items-center justify-between gap-3 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] transition-all duration-300 flex-1 sm:flex-none sm:min-w-[170px] cursor-pointer ${emailCopied ? 'bg-green-400 text-black' : 'bg-white text-black hover:bg-accent hover:text-white'}`}
              title="Click to open in Gmail & copy address"
            >
              <span className="flex items-center gap-2.5">
                {emailCopied ? <Check strokeWidth={3} size={22} /> : <Mail strokeWidth={2.5} size={22} />}
                {emailCopied ? 'Copied!' : 'Email'}
              </span>
              <ArrowRight strokeWidth={3} size={18} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Right Column: Neo-Brutalist Portrait Photo Card */}
        <div className="hero-photo opacity-0 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] relative lg:mr-4 mt-6 lg:mt-0">
          
          {/* Offset colored backdrop layer */}
          <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 brutal-border -z-10" />

          {/* Main Card Frame */}
          <div className="bg-white text-black brutal-border border-8 brutal-shadow p-4 sm:p-5 relative transform rotate-2 hover:rotate-0 transition-all duration-500 group shadow-[14px_14px_0_0_#000] hover:shadow-[20px_20px_0_0_#2563eb]">
            
            {/* Top Bar / Header of Dossier Photo */}
            <div className="flex justify-between items-center pb-3 mb-3 border-b-4 border-black">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-black inline-block" />
                <span className="font-mono font-bold text-xs uppercase tracking-widest text-black">
                  HARSHITH_R.RAW
                </span>
              </div>
              <span className="bg-black text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">
                DEV_ID: RNS-2428
              </span>
            </div>

            {/* Photo Container */}
            <div className="relative aspect-[4/5] overflow-hidden brutal-border border-4 border-black bg-black">
              <img 
                src="/HarshithProfessional.jpeg" 
                alt="Harshith R"
                className="w-full h-full object-cover object-top grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 scale-100 group-hover:scale-105"
              />
              {/* Subtle Scanline Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(0deg,#000,#000_2px,transparent_2px,transparent_4px)] pointer-events-none" />
            </div>

            {/* Bottom Caption / Badge */}
            <div className="mt-3.5 flex items-center justify-between">
              <div>
                <p className="font-black text-lg uppercase tracking-tight leading-tight">
                  Harshith R
                </p>
                <p className="font-bold text-xs uppercase text-accent tracking-wide">
                  Full Stack · AI & IoT
                </p>
              </div>
              <span className="bg-yellow-400 text-black font-black text-xs uppercase px-2.5 py-1 brutal-border border-2 border-black shadow-[2px_2px_0_0_#000] transform -rotate-2">
                ACTIVE
              </span>
            </div>
          </div>

          {/* Floating Rotating Stamp (Subtly Overlapping) */}
          <div className="absolute -bottom-8 -left-8 w-28 h-28 sm:w-32 sm:h-32 pointer-events-none z-20">
            <div className="w-full h-full bg-yellow-400 rounded-full brutal-border border-4 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
              <div className="text-center font-black font-sans uppercase text-[10px] sm:text-xs tracking-tighter leading-tight text-black">
                ENGINEERING <br /> ★ IMPACT ★ <br /> 2026
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
