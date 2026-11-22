import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const projects = [
  {
    title: "RNS Navis",
    subtitle: "Autonomous Campus EV & Live Telemetry Dashboard",
    tags: ["React", "FastAPI", "Folium", "Machine Learning", "Sensor Fusion"],
    image: "/reframe.jpg",
    stats: "College Funded · Tesla Mentored",
    points: [
      "Contributing as part of an 8-person team of seniors and juniors from CSE and Mechanical Engineering, building a self-driving campus EV (8–10 passenger capacity), heavily funded directly by the college and used daily by students and faculty.",
      "Building dashboard interfaces for real-time vehicle telemetry, diagnostics, geospatial tracking, and route visualization, using React, FastAPI, and Folium to give operators a clear live view of vehicle status.",
      "Collaborating closely with the Mechanical Engineering sub-team to align sensor data feeds with live dashboard telemetry.",
      "Mentored on autonomous-vehicle engineering by a Tesla engineer, alongside RNSIT's Principal, CEO, and Mechanical Dept. HOD."
    ]
  },
  {
    title: "AgriSahayak",
    subtitle: "AI Farmer Ecosystem & Multimodal Crop Analytics",
    tags: ["Python", "ML", "Gemini Live API", "Voice Assistant", "Marketplace"],
    image: "/falcon.jpg",
    stats: "Smart India Hackathon · Top 50 of 280+",
    points: [
      "Built a farmer-support platform: a Gemini Live voice assistant, real-time crop-price analytics, a rated buyer-seller marketplace, government-scheme benefit matching, and ML-based crop grading.",
      "Advanced from 280+ college teams into the top 50 in the final round, judged by industry experts.",
      "Proposed a dedicated helpline number connecting farmers directly to the platform, similar to emergency-service lines, alongside plans for an official government-linked deployment."
    ]
  },
  {
    title: "MIRA",
    subtitle: "Gamified AI + 3D DSA Tutor & Presentation Engine",
    tags: ["React", "Three.js", "Gemini Live API", "OpenAI API", "3D Avatar"],
    image: "/reframe.jpg",
    stats: "Winner, Samsung Track · 10+ Active Students",
    points: [
      "Co-built a gamified AI + 3D-model tutor that auto-generates presentations and teaches Data Structures & Algorithms from uploaded files or YouTube links; used regularly by 10+ students.",
      "Interactive 3D robot avatar with expressive emotion states and conversational voice explanations.",
      "Commended by Samsung engineers and faculty judges at Samsung Innovation Campus."
    ]
  },
  {
    title: "FinTouch",
    subtitle: "Biometric Fingerprint-Based Payment System",
    tags: ["MERN Stack", "Fingerprint Sensor", "Razorpay", "Biometrics"],
    image: "/fintouch.jpg",
    stats: "1st Place Winner · Open House Hackathon",
    points: [
      "Built a fingerprint-authenticated payment demo where a biometric scan directly authorizes a fund transfer from the matched user’s account.",
      "Won 1st place and a cash prize at the college’s Open House Hackathon.",
      "Architected secure transaction verification, enrollment flows, and biometric template matching."
    ]
  },
  {
    title: "Academic Platform & CMS",
    subtitle: "Full-Stack Academic Portal & Faculty Management System",
    tags: ["React", "TypeScript", "Supabase", "Node.js", "Vercel"],
    image: "/falcon.jpg",
    stats: "Professor Commended · Solo Ownership",
    points: [
      "Independently architected and deployed a 10+ page academic website with a full CMS and admin dashboard for a faculty member — frontend, backend, auth, and deployment, solo.",
      "Earned a written recommendation from the supervising professor citing strong full-stack ownership and reliability."
    ]
  },
  {
    title: "SmartDeskBuddy",
    subtitle: "Real-Time Voice-Interactive Hardware Desk Assistant",
    tags: ["ESP32-S3", "Arduino", "Xiaozhi AI", "IoT Audio", "Hardware"],
    image: "/fintouch.jpg",
    stats: "Patent in Progress · Hackathon Finalist",
    points: [
      "Led a 3-person team to build a real-time voice-interactive desk assistant; reached the final round of RNSIT’s interdisciplinary IoT hackathon.",
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
        { y: 150, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="px-6 md:px-24 py-20 relative">
      <h2 className="text-5xl md:text-8xl font-bold uppercase mb-16 inline-block bg-accent px-4 py-2 transform rotate-1 text-white brutal-border brutal-shadow">
        Selected Projects
      </h2>
      
      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <div key={index} className={`project-card flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-16 items-center`}>
            
            {/* Image side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 brutal-border -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <div className="bg-black brutal-border overflow-hidden aspect-[4/3] relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100" 
                />
              </div>
            </div>
            
            {/* Content side */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-black text-white text-xs font-bold uppercase px-3 py-1">
                    {tag}
                  </span>
                ))}
                {project.stats && (
                  <span className="bg-accent text-white text-xs font-bold uppercase px-3 py-1 brutal-border">
                    {project.stats}
                  </span>
                )}
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold uppercase leading-none mb-2">{project.title}</h3>
              <p className="text-xl md:text-2xl font-bold text-accent mb-6 bg-white inline-block px-2 transform -rotate-1">{project.subtitle}</p>
              
              <ul className="list-square pl-6 space-y-3 font-body font-medium text-lg mb-8">
                {project.points.map((point, i) => (
                  <li key={i} className="leading-relaxed">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
