import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FolderGit2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    index: "01",
    title: "RNS Navis",
    subtitle: "Autonomous Campus EV & Live Telemetry Dashboard",
    tags: ["React", "FastAPI", "Folium", "Machine Learning", "Sensor Fusion"],
    stats: "College Funded · Tesla Mentored",
    points: [
      "Contributing as part of an 8-person team of seniors and juniors from CSE and Mechanical Engineering, building a self-driving campus EV (8–10 passenger capacity), heavily funded directly by the college and used daily by students and faculty.",
      "Building dashboard interfaces for real-time vehicle telemetry, diagnostics, geospatial tracking, and route visualization, using React, FastAPI, and Folium to give operators a clear live view of vehicle status.",
      "Collaborating closely with the Mechanical Engineering sub-team to align sensor data feeds with live dashboard telemetry.",
      "Mentored on autonomous-vehicle engineering by a Tesla engineer, alongside RNSIT's Principal, CEO, and Mechanical Dept. HOD."
    ]
  },
  {
    index: "02",
    title: "AgriSahayak",
    subtitle: "AI Farmer Ecosystem & Multimodal Crop Analytics",
    tags: ["Python", "ML", "Gemini Live API", "Voice Assistant", "Marketplace"],
    stats: "Smart India Hackathon · Top 50 of 280+",
    points: [
      "Built a farmer-support platform: a Gemini Live voice assistant, real-time crop-price analytics, a rated buyer-seller marketplace, government-scheme benefit matching, and ML-based crop grading.",
      "Advanced from 280+ college teams into the top 50 in the final round, judged by industry experts.",
      "Proposed a dedicated helpline number connecting farmers directly to the platform, similar to emergency-service lines, alongside plans for an official government-linked deployment."
    ]
  },
  {
    index: "03",
    title: "MIRA",
    subtitle: "Gamified AI + 3D DSA Tutor & Presentation Engine",
    tags: ["React", "Three.js", "Gemini Live API", "OpenAI API", "3D Avatar"],
    stats: "Winner, Samsung Track · 10+ Active Students",
    points: [
      "Co-built a gamified AI + 3D-model tutor that auto-generates presentations and teaches Data Structures & Algorithms from uploaded files or YouTube links; used regularly by 10+ students.",
      "Interactive 3D robot avatar with expressive emotion states and conversational voice explanations.",
      "Commended by Samsung engineers and faculty judges at Samsung Innovation Campus."
    ]
  },
  {
    index: "04",
    title: "FinTouch",
    subtitle: "Biometric Fingerprint-Based Payment System",
    tags: ["MERN Stack", "Fingerprint Sensor", "Razorpay", "Biometrics"],
    stats: "1st Place Winner · Open House Hackathon",
    points: [
      "Built a fingerprint-authenticated payment demo where a biometric scan directly authorizes a fund transfer from the matched user's account.",
      "Won 1st place and a cash prize at the college's Open House Hackathon.",
      "Architected secure transaction verification, enrollment flows, and biometric template matching."
    ]
  },
  {
    index: "05",
    title: "Academic Platform & CMS",
    subtitle: "Full-Stack Academic Portal & Faculty Management System",
    tags: ["React", "TypeScript", "Supabase", "Node.js", "Vercel"],
    stats: "Professor Commended · Solo Ownership",
    points: [
      "Independently architected and deployed a 10+ page academic website with a full CMS and admin dashboard for a faculty member — frontend, backend, auth, and deployment, solo.",
      "Earned a written recommendation from the supervising professor citing strong full-stack ownership and reliability."
    ]
  },
  {
    index: "06",
    title: "SmartDeskBuddy",
    subtitle: "Real-Time Voice-Interactive Hardware Desk Assistant",
    tags: ["ESP32-S3", "Arduino", "Xiaozhi AI", "IoT Audio", "Hardware"],
    stats: "Patent in Progress · Hackathon Finalist",
    points: [
      "Led a 3-person team to build a real-time voice-interactive desk assistant; reached the final round of RNSIT's interdisciplinary IoT hackathon.",
      "Invited by faculty mentor Prof. Rashmi to pursue a patent filing and research paper based on the project (in progress)."
    ]
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const projectCards = gsap.utils.toArray('.project-card');
    
    projectCards.forEach((card: any) => {
      gsap.fromTo(card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="px-6 md:px-24 py-20 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-5xl md:text-8xl font-bold uppercase inline-block bg-accent px-4 py-2 transform rotate-1 text-white brutal-border brutal-shadow">
            Selected Projects
          </h2>
        </div>
        <div className="font-sans font-bold text-sm uppercase tracking-widest bg-black text-white px-4 py-2 brutal-border border-black flex items-center gap-2 self-start md:self-auto">
          <FolderGit2 size={18} /> 6 Featured Builds
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <div 
            key={project.index} 
            className="project-card bg-white text-black brutal-border brutal-shadow p-6 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[14px_14px_0_0_#2563eb] group relative overflow-hidden"
          >
            {/* Top Bar: Number + Stats Badge */}
            <div className="flex justify-between items-start gap-4 mb-6 pb-4 border-b-4 border-black">
              <div className="flex items-center gap-2">
                <span className="font-black text-2xl md:text-3xl font-sans tracking-tight bg-black text-white px-3 py-1">
                  {project.index}
                </span>
                <span className="font-bold uppercase text-xs tracking-widest text-gray-500">
                  // PROJ
                </span>
              </div>
              {project.stats && (
                <span className="bg-accent text-white text-xs font-bold uppercase px-3 py-1.5 brutal-border border-black shadow-[3px_3px_0_0_#000] text-right">
                  {project.stats}
                </span>
              )}
            </div>

            {/* Project Title & Subtitle */}
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-base md:text-lg font-bold text-accent inline-block bg-yellow-100 px-2 py-0.5 border-2 border-black transform -rotate-1">
                {project.subtitle}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-black text-white text-xs font-bold uppercase px-2.5 py-1">
                  {tag}
                </span>
              ))}
            </div>

            {/* Bullet Points */}
            <ul className="list-square pl-6 space-y-3 font-body font-medium text-base text-gray-800 leading-relaxed mt-auto pt-4 border-t-2 border-dashed border-gray-300">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
