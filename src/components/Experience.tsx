import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const experiences = [
  {
    company: "IIM Calcutta Innovation Park",
    role: "AI Product Development Intern & Team Lead",
    period: "Jul 2026 – Present",
    location: "Bengaluru / Remote",
    type: "Faculty Research · Jharkhand Govt. Pilot for 150 Entrepreneurs",
    points: [
      "Lead a 3-student team, working under 3 faculty mentors (Prof. Vinay K P, Prof. Sudarshan, Prof. Vimal Kumar), building a conversational-AI operations platform that lets micro-entrepreneurs manage sales, stock, and finances entirely over WhatsApp.",
      "Designed the Python/PostgreSQL backend and multi-agent CrewAI workflows; recognized by the Chief Minister of Jharkhand, with a pilot being prepared for 150 rural women entrepreneurs.",
      "System securely logs each entrepreneur’s business profile, inventory, and transaction history in the background as they interact naturally through WhatsApp chat."
    ]
  },
  {
    company: "Samsung Innovation Campus",
    role: "IoT & AI Intern",
    period: "Aug 2026 – Present",
    location: "Bengaluru, India",
    type: "2x Hackathon Track Winner · Commended by Samsung Engineers",
    points: [
      "Co-built 'MIRA,' a gamified AI + 3D-model tutor that auto-generates presentations and teaches Data Structures & Algorithms from uploaded files or YouTube links; used regularly by 10+ students.",
      "Built a women’s-safety device (ESP32, Node-RED) that beeps faster as it nears hidden cameras via unknown Wi-Fi signals, as part of a 2-person team; both the AI and IoT projects won their respective hackathon tracks and were appreciated by Samsung engineers and faculty judges."
    ]
  },
  {
    company: "Vendoprint Private Limited",
    role: "Software Development Intern",
    period: "Jul 2026 – Present",
    location: "Bengaluru, India",
    type: "Patented Hardware Kiosk Backend · Scaled to 10+ Hubs",
    points: [
      "Designed and implemented the backend architecture for a patented self-service document kiosk (photocopying and stapling), handling device control and transaction logic, under the mentorship of a Deloitte engineer and the company’s CEO.",
      "Preparing the system for on-campus deployment, with plans to scale to 10+ locations across Bengaluru."
    ]
  },
  {
    company: "Zefender Innovations Pvt. Ltd.",
    role: "AI Software Engineering Intern",
    period: "Jul 2026 – Present",
    location: "Bengaluru, India",
    type: "Startup Core Platform Architecture",
    points: [
      "Researching and implementing the company website’s architecture, working directly with the CEO and CTO.",
      "Developing AI-driven features for the company’s platform (ongoing)."
    ]
  }
];

const highlightKeywords = [
  'CrewAI', 'FastAPI', 'Python', 'PostgreSQL', 'Twilio WhatsApp API', 'Twilio',
  'Gemini Live API', 'OpenAI API', 'Node-RED', 'ESP32', 'React', 'IoT', 'MIRA'
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.exp-card');
    
    cards.forEach((card: any) => {
      gsap.fromTo(card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
    <section id="experience" ref={sectionRef} className="px-6 md:px-24 py-20 bg-black text-white relative">
      <h2 className="text-5xl md:text-8xl font-bold uppercase mb-16 inline-block bg-accent px-4 py-2 transform -rotate-1 text-white brutal-border border-white">
        Experience
      </h2>
      
      <div className="flex flex-col gap-12 border-l-8 border-white pl-8 md:pl-16 ml-4">
        {experiences.map((exp, index) => (
          <div key={index} className="exp-card relative">
            <div className="absolute -left-[44px] md:-left-[76px] top-0 w-8 h-8 bg-accent brutal-border border-white"></div>
            
            <div className="bg-white text-black brutal-border brutal-shadow p-6 md:p-10 transform transition-transform hover:-translate-y-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold uppercase">{exp.company}</h3>
                  <p className="text-xl font-bold text-accent mt-2">{exp.role}</p>
                  {exp.type && <p className="text-sm font-bold uppercase mt-1 bg-black text-white inline-block px-2">{exp.type}</p>}
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <p className="font-bold uppercase text-lg border-b-4 border-black inline-block">{exp.period}</p>
                  <p className="font-body font-bold text-gray-500 mt-1">{exp.location}</p>
                </div>
              </div>
              
              <ul className="list-square pl-6 space-y-3 font-body font-medium text-lg">
                {exp.points.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    {point.split(/(CrewAI|FastAPI|Python|PostgreSQL|Twilio WhatsApp API|Twilio|Gemini Live API|OpenAI API|Node-RED|ESP32|React|IoT|MIRA)/g).map((part, j) => {
                      if (highlightKeywords.includes(part)) {
                        return <span key={j} className="bg-yellow-300 px-1 font-bold">{part}</span>;
                      }
                      return <span key={j}>{part}</span>;
                    })}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
