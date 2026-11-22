import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Trophy, BookOpen, Star } from 'lucide-react';

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo('.folder-element',
      { 
        y: 150, 
        x: (i) => i === 0 ? -50 : 50,
        opacity: 0, 
        rotation: (i) => i === 0 ? -15 : 15,
        scale: 0.8
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.75)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section id="education" ref={sectionRef} className="px-6 md:px-24 py-20 relative">
      <h2 className="text-5xl md:text-8xl font-bold uppercase mb-8 inline-block bg-white text-black px-4 py-2 transform rotate-2 brutal-border brutal-shadow relative z-30">
        Education & Leadership
      </h2>
      
      <div className="flex flex-col xl:flex-row gap-12 xl:gap-0 xl:-space-x-12 mt-12 justify-center items-stretch">
        
        {/* FILE 1: RNSIT (Overlapping Folder) */}
        <div className="folder-element w-full xl:w-[55%] relative z-10 transition-all duration-300 xl:hover:-translate-x-8 hover:-translate-y-8 hover:-rotate-2 hover:scale-[1.02] cursor-crosshair group">
          {/* Folder Tab */}
          <div className="w-56 bg-black text-white border-4 border-black px-4 py-2 font-bold uppercase tracking-widest text-sm translate-y-1 relative z-20 flex items-center gap-2">
            <BookOpen size={16} /> [FILE: EDU-01 // RNSIT]
          </div>
          
          {/* Folder Body (Dossier Content) */}
          <div className="bg-white text-black p-6 sm:p-10 brutal-border brutal-shadow relative z-10 transition-all duration-300 group-hover:shadow-[24px_24px_0_0_#2563eb] flex flex-col h-full">
            
            {/* Header / Stamp */}
            <div className="flex justify-between items-start mb-6">
              <div className="bg-black text-white font-bold px-3 py-1 text-sm tracking-widest uppercase">
                INSTITUTION: RNSIT BENGALURU
              </div>
              <div className="text-accent font-bold px-2 py-1 text-sm tracking-widest uppercase border-2 border-accent transform rotate-3">
                [ CGPA: 9.75 / 10 ]
              </div>
            </div>

            {/* Title Block */}
            <div className="mb-6">
              <h3 className="text-3xl lg:text-4xl font-bold uppercase leading-tight mb-4">R N S Institute of Technology</h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <p className="text-lg text-white font-bold bg-accent px-3 py-2 brutal-border">B.E. Computer Science & Engineering</p>
                <span className="bg-white text-black font-bold px-3 py-2 text-base border-4 border-black shadow-[4px_4px_0_0_#000]">Expected 2028</span>
              </div>
            </div>
            
            <div className="border-t-4 border-black pt-6 flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-300 text-black px-3 py-1 font-bold text-sm border-2 border-black">
                  SGPA Sem 1–4: 9.6, 9.9, 9.5, 10.0
                </span>
                <span className="bg-black text-white px-3 py-1 font-bold text-sm">
                  Consistent Top Performer
                </span>
              </div>

              <ul className="list-square pl-6 font-body font-medium text-base space-y-2">
                <li><strong className="text-accent">Gold Medal of Merit (4th Sem):</strong> Branch Topper, Computer Science (SGPA 10.0)</li>
                <li><strong className="text-accent">Gold Medal of Merit (2nd Sem):</strong> 100% Perfect Score in Mathematics</li>
                <li><strong className="text-accent">NPTEL Elite Certification:</strong> All-India exam conducted by IIT Madras faculty</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FILE 2: Leadership & Outreach (Overlapping Folder) */}
        <div className="folder-element w-full xl:w-[55%] relative z-20 hover:z-40 transition-all duration-300 xl:hover:translate-x-8 hover:-translate-y-8 hover:rotate-2 hover:scale-[1.02] xl:mt-24 cursor-crosshair group">
          {/* Folder Tab */}
          <div className="w-56 bg-accent text-white border-4 border-black px-4 py-2 font-bold uppercase tracking-widest text-sm translate-y-1 relative z-20 xl:ml-12 flex items-center gap-2">
            <Star size={16} /> [FILE: LEAD-02 // IMPACT]
          </div>
          
          {/* Folder Body (Dossier Content) */}
          <div className="bg-white text-black p-6 sm:p-10 brutal-border brutal-shadow relative z-10 transition-all duration-300 group-hover:shadow-[24px_24px_0_0_#000] flex flex-col h-full">
            
            {/* Header / Stamp */}
            <div className="flex justify-between items-start mb-6">
              <div className="bg-black text-white font-bold px-3 py-1 text-sm tracking-widest uppercase">
                ROLE: COMMUNITY LEAD
              </div>
              <div className="text-accent font-bold px-2 py-1 text-sm tracking-widest uppercase border-2 border-accent transform -rotate-2">
                [ STATUS: ACTIVE ]
              </div>
            </div>

            {/* Title Block */}
            <div className="mb-6">
              <h3 className="text-3xl lg:text-4xl font-bold uppercase leading-tight mb-4">Leadership, Teaching & Outreach</h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-black text-white font-bold px-3 py-1 text-sm brutal-border">Student Council</span>
                <span className="bg-yellow-300 text-black font-bold px-3 py-1 text-sm border-2 border-black">Indian Data Club</span>
                <span className="bg-white text-black font-bold px-3 py-1 text-sm border-2 border-black">BigO Club</span>
              </div>
            </div>
            
            <div className="border-t-4 border-black pt-6">
              <ul className="list-square pl-6 font-body font-medium text-base space-y-2 leading-relaxed">
                <li><strong className="text-black">Member, Student Council (2nd Year):</strong> Coordinated academics & communication for 100+ students with faculty.</li>
                <li><strong className="text-black">Event Coordinator, Indian Data Club:</strong> Organized hackathons and technical events for the college community.</li>
                <li><strong className="text-black">Core Member, BigO Club:</strong> Active participant in competitive programming & algorithm problem-solving.</li>
                <li><strong className="text-black">Teaching & Mentorship:</strong> Taught Data Analytics to incoming juniors; authored modules and assisted placements office with DSA question banks.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Honors & Awards Neo-Brutalist Block */}
      <div className="mt-20 bg-black text-white brutal-border border-white p-8 md:p-12 brutal-shadow shadow-[12px_12px_0_0_#2563eb] relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b-4 border-white pb-4">
          <div className="flex items-center gap-3">
            <Trophy className="text-yellow-400 w-10 h-10" />
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Honors & Hackathons</h3>
          </div>
          <span className="bg-yellow-400 text-black font-bold text-sm uppercase px-3 py-1">20+ Hackathons Competed</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white text-black p-5 brutal-border border-black">
            <div className="font-black text-accent text-lg uppercase mb-1">1st Place Winner</div>
            <div className="font-bold text-xl uppercase">Open House Hackathon</div>
            <div className="text-sm font-medium text-gray-700 mt-2">FinTouch biometric payment demo with cash prize</div>
          </div>

          <div className="bg-white text-black p-5 brutal-border border-black">
            <div className="font-black text-accent text-lg uppercase mb-1">Track Winner</div>
            <div className="font-bold text-xl uppercase">Samsung Innovation Campus</div>
            <div className="text-sm font-medium text-gray-700 mt-2">Won AI Hackathon (MIRA) & IoT track (Women's safety device)</div>
          </div>

          <div className="bg-white text-black p-5 brutal-border border-black">
            <div className="font-black text-accent text-lg uppercase mb-1">Top 50 of 280+ Teams</div>
            <div className="font-bold text-xl uppercase">Smart India Hackathon 2026</div>
            <div className="text-sm font-medium text-gray-700 mt-2">Final round for AgriSahayak AI voice farmer platform</div>
          </div>

          <div className="bg-white text-black p-5 brutal-border border-black">
            <div className="font-black text-accent text-lg uppercase mb-1">2nd Place</div>
            <div className="font-bold text-xl uppercase">Dept. DSA Hackathon</div>
            <div className="text-sm font-medium text-gray-700 mt-2">Algorithmic problem-solving with a team of 4</div>
          </div>

          <div className="bg-white text-black p-5 brutal-border border-black">
            <div className="font-black text-accent text-lg uppercase mb-1">Finalist & Patent Filing</div>
            <div className="font-bold text-xl uppercase">RNSIT IoT Hackathon</div>
            <div className="text-sm font-medium text-gray-700 mt-2">SmartDeskBuddy voice desk assistant invited for patent</div>
          </div>

          <div className="bg-white text-black p-5 brutal-border border-black">
            <div className="font-black text-yellow-600 text-lg uppercase mb-1">200+ Day Continuous Streak</div>
            <div className="font-bold text-xl uppercase">LeetCode Engineering</div>
            <div className="text-sm font-medium text-gray-700 mt-2">Consistent daily algorithmic problem solving</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
