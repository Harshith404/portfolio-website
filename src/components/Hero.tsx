import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ArrowRight, FileText, Check } from 'lucide-react';
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
        { scale: 0.88, opacity: 0, y: 70 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        0.3
      );

      // "Shakey at first" mechanical camera shutter / terminal stabilization jitter
      tl.to('.hero-photo-inner', { x: -8, y: 6, rotation: -3, duration: 0.05 })
        .to('.hero-photo-inner', { x: 9, y: -7, rotation: 3.5, duration: 0.05 })
        .to('.hero-photo-inner', { x: -7, y: 5, rotation: -2.5, duration: 0.05 })
        .to('.hero-photo-inner', { x: 6, y: -4, rotation: 2, duration: 0.05 })
        .to('.hero-photo-inner', { x: -4, y: 3, rotation: -1.2, duration: 0.04 })
        .to('.hero-photo-inner', { x: 3, y: -2, rotation: 0.8, duration: 0.04 })
        .to('.hero-photo-inner', { x: -1, y: 1, rotation: -0.3, duration: 0.03 })
        .to('.hero-photo-inner', { x: 0, y: 0, rotation: 0, duration: 0.08, ease: 'power2.out' });

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

        {/* Right Column: Clean, Vivid Neo-Brutalist Photo Card with Shake Entrance */}
        <div className="hero-photo opacity-0 w-full max-w-[340px] sm:max-w-[370px] lg:max-w-[390px] relative mt-8 lg:mt-0">
          
          {/* Offset colored shadow frame */}
          <div className="absolute inset-0 bg-accent translate-x-3 translate-y-3 brutal-border -z-10" />

          {/* Main Card Frame with Kinetic Shake */}
          <div className="hero-photo-inner bg-white text-black brutal-border border-6 brutal-shadow p-3.5 sm:p-4 relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-[16px_16px_0_0_#2563eb] group">
            
            {/* Top Bar: Status + Badge */}
            <div className="flex justify-between items-center pb-2.5 mb-2.5 border-b-4 border-black">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse border-2 border-black inline-block" />
                <span className="font-mono font-bold text-xs uppercase tracking-wider text-black">
                  ONLINE // DEV
                </span>
              </div>
              <span className="bg-black text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">
                B.E. CSE @ RNSIT
              </span>
            </div>

            {/* Photo Container: Natural Crisp Colors (No Grayscale) */}
            <div className="relative aspect-[4/5] overflow-hidden brutal-border border-4 border-black bg-gray-100">
              <img 
                src="/HarshithProfessional.jpeg" 
                alt="Harshith R"
                className="w-full h-full object-cover object-top transition-transform duration-500 scale-100 group-hover:scale-105"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="font-black text-base uppercase tracking-tight leading-tight">
                  Harshith R
                </p>
                <p className="font-bold text-[11px] uppercase text-accent tracking-wide">
                  Full Stack · AI Systems
                </p>
              </div>
              <span className="bg-yellow-400 text-black font-black text-[11px] uppercase px-2 py-0.5 brutal-border border-2 border-black shadow-[2px_2px_0_0_#000]">
                CGPA 9.75
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
