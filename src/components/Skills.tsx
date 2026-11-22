import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
    details: "200+ day continuous LeetCode streak · DSA"
  },
  {
    name: "AI & ML Systems",
    skills: ["CrewAI", "Gemini Live API", "OpenAI API", "Applied Machine Learning", "Multi-Agent Workflows"],
    details: "Conversational AI · Voice Assistants · Multi-Agent Orchestration"
  },
  {
    name: "Frontend Development",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Three.js", "Framer Motion", "GSAP"],
    details: "Interactive 3D · High-performance UI/UX · Canvas"
  },
  {
    name: "Backend & Systems",
    skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "Twilio WhatsApp API", "JWT & RBAC"],
    details: "Async pipelines · Microservices · Webhook infrastructure"
  },
  {
    name: "Embedded Systems & IoT",
    skills: ["ESP32", "ESP32-S3", "Raspberry Pi", "Arduino", "Node-RED", "I2S Audio"],
    details: "Sensor telemetry · Hardware device control · Edge AI"
  },
  {
    name: "Databases & Tools",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "Git", "GitHub", "VS Code", "Vercel", "Render"],
    details: "Database design · Deployment · API integration"
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blocks = gsap.utils.toArray('.skill-block');
    
    blocks.forEach((block: any, i) => {
      gsap.fromTo(block,
        { scale: 0.8, opacity: 0, rotation: i % 2 === 0 ? -5 : 5 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="px-6 md:px-24 py-20 bg-accent text-white relative border-y-8 border-black">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_2px,_transparent_2px)] [background-size:20px_20px]"></div>
      
      <h2 className="text-5xl md:text-8xl font-bold uppercase mb-16 inline-block bg-black px-4 py-2 transform -rotate-2 text-white brutal-border border-white brutal-shadow">
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-block bg-white text-black brutal-border border-black brutal-shadow p-6 transform hover:-translate-y-2 hover:translate-x-2 transition-transform">
            <h3 className="text-2xl font-bold uppercase mb-4 border-b-4 border-black pb-2 inline-block">{category.name}</h3>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="bg-black text-white px-2 py-1 font-bold text-sm">
                  {skill}
                </span>
              ))}
            </div>
            
            {category.details && (
              <p className="mt-4 text-sm font-bold bg-accent text-white p-2 transform rotate-1 inline-block">
                {category.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
