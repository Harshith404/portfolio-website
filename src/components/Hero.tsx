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
  const shutterRef = useRef<HTMLDivElement>(null);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText('harshithshetty2006@gmail.com');
    }
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=harshithshetty2006@gmail.com', '_blank');
  };

  const triggerShutter = () => {
    if (!shutterRef.current) return;
    gsap.killTweensOf(shutterRef.current);
    gsap.killTweensOf('.photo-img');
    gsap.fromTo(shutterRef.current,
      { opacity: 0.95 },
      { opacity: 0, duration: 0.28, ease: 'power2.out' }
    );
    gsap.fromTo('.photo-img',
      { scale: 1.07, filter: 'brightness(1.35)' },
      { scale: 1, filter: 'brightness(1)', duration: 0.35, ease: 'power2.out' }
    );
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Unified Left side entrance (waterfall effect)
      tl.fromTo('.hero-in',
        { y: 60, opacity: 0, rotation: 2 },
        { y: 0, opacity: 1, rotation: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(1.5)' },
        0
      );

      // Right side entrance (starts slightly after the left side)
      tl.from('.right-deco',
        { scale: 0, opacity: 0, y: 100, duration: 1, stagger: 0.15, ease: 'back.out(1.5)' },
        0.2
      );

      // Scroll parallax effect
      gsap.to(decoRef.current, {
        y: 300,
        rotation: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen h-auto sm:h-screen flex flex-col justify-center px-4 sm:px-6 md:px-24 pt-20 sm:pt-16 pb-8 sm:pb-0 relative overflow-hidden">

      {/* Brutalist Decorations - Right Side (Parallax Container) */}
      <div ref={decoRef} className="absolute top-[10%] -right-[10%] w-[800px] h-[800px] hidden lg:block z-10 pointer-events-none">

        {/* Abstract Grid - Massive */}
        <div className="right-deco absolute inset-0 grid grid-cols-5 grid-rows-5 gap-4 transform -rotate-12 scale-125 z-10 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`brutal-border border-8 pointer-events-auto cursor-crosshair transition-all duration-300 ease-out hover:scale-125 hover:-translate-y-4 hover:bg-white hover:border-accent hover:shadow-[12px_12px_0_0_#2563eb] hover:z-30 relative ${i % 3 === 0 ? 'bg-accent' : i % 5 === 0 ? 'bg-black' : 'bg-transparent'} ${i % 2 === 0 ? 'animate-pulse' : ''}`}
              style={{ animationDuration: `${(i % 5) + 2}s` }}
            ></div>
          ))}
        </div>

        {/* Rotating Badge - Massive (Full circle in complete view) */}
        <div className="right-deco absolute top-[56%] left-[2%] w-80 h-80 z-20 pointer-events-auto">
          <div className="w-full h-full bg-white rounded-full brutal-border border-8 brutal-shadow flex items-center justify-center animate-spin cursor-crosshair transition-all duration-500 ease-out hover:bg-black hover:text-white hover:scale-125 hover:shadow-[16px_16px_0_0_#2563eb]" style={{ animationDuration: '15s' }}>
            <div className="text-center font-bold font-sans uppercase text-xl tracking-widest leading-tight transition-colors duration-500">
              Full Stack <br /> Developer <br /> ★ <br /> AI Systems <br /> & IoT
            </div>
          </div>
        </div>

        {/* Floating Box - Massive */}
        <div className="right-deco absolute top-[10%] right-[20%] w-64 h-64 bg-accent brutal-border border-8 brutal-shadow transform rotate-12 pointer-events-auto cursor-crosshair transition-all duration-500 ease-out hover:bg-white hover:rotate-90 hover:scale-75 hover:shadow-[24px_24px_0_0_#000] hover:z-20"></div>

        {/* Photo Card - Moved Northeast so rotating disk is 100% unobstructed */}
        <div className="right-deco absolute top-[6%] left-[32%] xl:left-[32%] w-[320px] z-30 pointer-events-auto">
          {/* Offset colored backdrop layer */}
          <div className="absolute inset-0 bg-accent translate-x-3 translate-y-3 brutal-border -z-10" />

          {/* Main Card Frame */}
          <div
            onMouseEnter={triggerShutter}
            className="bg-white text-black brutal-border border-6 brutal-shadow p-3.5 relative transform rotate-1 hover:rotate-0 transition-all duration-500 group shadow-[14px_14px_0_0_#000] hover:shadow-[20px_20px_0_0_#2563eb] cursor-pointer"
            title="Hover to trigger shutter"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center pb-2 mb-2.5 border-b-2 border-black">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse border border-black inline-block" />
                <span className="font-mono font-bold text-[11px] uppercase tracking-wider text-black">
                  HARSHITH_R.RAW
                </span>
              </div>
              <span className="bg-black text-white text-[9px] font-mono font-bold px-1.5 py-0.5 uppercase tracking-wider">
                DEV_ID: RNS-2428
              </span>
            </div>

            {/* Clean Natural Photo with Shutter Flash on Hover */}
            <div className="relative aspect-[4/5] overflow-hidden brutal-border border-4 border-black bg-black">
              <img
                src="/HarshithProfessional.jpeg"
                alt="Harshith R"
                className="photo-img w-full h-full object-cover object-top transition-transform duration-500 scale-100 group-hover:scale-105"
              />
              {/* Shutter Flash */}
              <div
                ref={shutterRef}
                className="absolute inset-0 bg-white pointer-events-none z-20 opacity-0"
              />
            </div>

            {/* Bottom Bar */}
            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="font-black text-base uppercase tracking-tight leading-tight">Harshith R</p>
                <p className="font-bold text-[11px] uppercase text-accent tracking-wide">Full Stack · AI & IoT</p>
              </div>
              <span className="bg-yellow-400 text-black font-black text-[11px] uppercase px-2.5 py-1 brutal-border border-2 border-black shadow-[2px_2px_0_0_#000]">
                ACTIVE
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Left content - responsive */}
      <div className="max-w-5xl w-full lg:w-[58%] z-20 relative pointer-events-none">
        <p className="hero-in opacity-0 font-bold uppercase tracking-widest text-accent mb-2 sm:mb-4 text-xs sm:text-sm md:text-lg transition-all hover:scale-105 origin-left inline-block pointer-events-auto">
          Full Stack Developer · AI & Software Systems · Embedded Systems & IoT
        </p>

        <h1 ref={textRef} className="hero-in opacity-0 text-5xl sm:text-7xl md:text-[8rem] font-bold uppercase leading-none mb-3 sm:mb-6 text-white [-webkit-text-stroke:2px_black] sm:[-webkit-text-stroke:3px_black] drop-shadow-[5px_5px_0_#000] sm:drop-shadow-[8px_8px_0_#000] hover:text-white hover:[-webkit-text-stroke:3px_#2563eb] hover:drop-shadow-[16px_16px_0_#2563eb] hover:-translate-y-4 hover:-rotate-2 transition-all duration-300 cursor-default pointer-events-auto">
          Harshith R
        </h1>

        <div className="hero-in opacity-0 bg-white brutal-border brutal-shadow p-3 sm:p-6 max-w-2xl mt-3 sm:mt-6 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000] hover:border-accent group pointer-events-auto">
          <p className="text-xs sm:text-base md:text-xl font-body font-bold leading-relaxed group-hover:text-accent transition-colors">
            Computer Science engineer & systems builder engineering intelligent software, IoT devices, and multi-agent AI workflows from silicon to production.
          </p>
          <div className="hidden sm:inline-block mt-3 font-sans text-xs md:text-base uppercase bg-black text-white px-3 py-1 transform -rotate-2 transition-all duration-300 hover:bg-accent hover:scale-105 hover:rotate-2 hover:shadow-[6px_6px_0_0_#000]">
            "ARCHITECTING FULL STACK SYSTEMS FROM DATABASE TO PIXEL"
          </div>
        </div>

        <div className="hero-in opacity-0 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-8 pointer-events-auto">
          <a href="https://github.com/Harshith404" target="_blank" rel="noreferrer" className="group bg-white text-black brutal-border brutal-shadow font-sans font-bold uppercase tracking-widest px-3 sm:px-5 py-2 sm:py-3 flex items-center justify-between gap-2 hover:bg-accent hover:text-white hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] transition-all duration-300 text-xs sm:text-sm">
            <span className="flex items-center gap-3">
              <FaGithub size={18} className="shrink-0" /> GitHub
            </span>
            <ArrowRight strokeWidth={3} size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0 hidden sm:block" />
          </a>
          <a href="https://linkedin.com/in/harshith-r1506" target="_blank" rel="noreferrer" className="group bg-white text-black brutal-border brutal-shadow font-sans font-bold uppercase tracking-widest px-3 sm:px-5 py-2 sm:py-3 flex items-center justify-between gap-2 hover:bg-accent hover:text-white hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] transition-all duration-300 text-xs sm:text-sm">
            <span className="flex items-center gap-3">
              <FaLinkedin size={18} className="shrink-0" /> LinkedIn
            </span>
            <ArrowRight strokeWidth={3} size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0 hidden sm:block" />
          </a>
          <a href="https://leetcode.com/u/Harshith_Rangaraju" target="_blank" rel="noreferrer" className="group bg-white text-black brutal-border brutal-shadow font-sans font-bold uppercase tracking-widest px-3 sm:px-5 py-2 sm:py-3 flex items-center justify-between gap-2 hover:bg-yellow-400 hover:text-black hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] transition-all duration-300 text-xs sm:text-sm">
            <span className="flex items-center gap-3">
              <SiLeetcode size={18} className="shrink-0" /> LeetCode
            </span>
            <ArrowRight strokeWidth={3} size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0 hidden sm:block" />
          </a>
          <button
            type="button"
            onClick={() => onOpenResume ? onOpenResume() : window.open('/resume.pdf', '_blank')}
            className="group bg-yellow-400 text-black brutal-border brutal-shadow font-sans font-bold uppercase tracking-widest px-3 sm:px-5 py-2 sm:py-3 flex items-center justify-between gap-2 hover:bg-black hover:text-white hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#2563eb] transition-all duration-300 text-xs sm:text-sm cursor-pointer"
          >
            <span className="flex items-center gap-3">
              <FileText size={18} className="shrink-0" /> Resume
            </span>
            <ArrowRight strokeWidth={3} size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0 hidden sm:block" />
          </button>
          <a
            href="mailto:harshithshetty2006@gmail.com"
            onClick={handleEmailClick}
            className={`group brutal-border brutal-shadow font-sans font-bold uppercase tracking-wide px-3 sm:px-5 py-2 sm:py-3 flex items-center justify-between gap-2 hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] transition-all duration-300 text-xs sm:text-sm col-span-2 sm:col-span-1 cursor-pointer ${emailCopied ? 'bg-green-400 text-black' : 'bg-white text-black hover:bg-accent hover:text-white'}`}
            title="Click to open in Gmail & copy address"
          >
            <span className="flex items-center gap-3">
              {emailCopied ? <Check strokeWidth={3} size={18} className="shrink-0" /> : <Mail strokeWidth={2.5} size={18} className="shrink-0" />}
              {emailCopied ? 'Copied!' : 'Email'}
            </span>
            <ArrowRight strokeWidth={3} size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0 hidden sm:block" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
