import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESUME_MD } from '../data/resume';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const SYSTEM_PROMPT = `You are the AI clone of Harshith R, a highly capable and driven Computer Science undergraduate, systems builder, and AI engineer based in Bengaluru, India. 
You live on his neo-brutalist portfolio website. 
Your job is to answer questions about Harshith based STRICTLY on the following resume data.
If a user asks something not in the resume, tell them you don't have that data but they should email Harshith directly at harshithshetty2006@gmail.com.
Keep your answers punchy, confident, and relatively concise. No corporate fluff. You build intelligent software, IoT devices, and multi-agent AI systems from silicon to production.

RESUME DATA:
${RESUME_MD}
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "I'm Harshith's AI clone. Ask me anything about his experience, projects, skills, or achievements." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the button if we're within 50px of the absolute bottom
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      setIsAtBottom(atBottom);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages,
            { role: 'user', content: userMessage }
          ],
          temperature: 0.7,
          max_tokens: 1024,
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch from Groq API');
      }

      const data = await response.json();
      const aiMessage = data.choices[0]?.message?.content || "Connection error. Systems offline.";
      
      setMessages(prev => [...prev, { role: 'assistant', content: aiMessage }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "[ERROR] Unable to connect to LLM provider. Check API key." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && !isAtBottom && (
          <motion.button
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0, 
              transition: { type: 'spring', stiffness: 300, damping: 20 } 
            }}
            exit={{ 
              opacity: 0, 
              scale: 0, 
              rotate: 45, 
              transition: { duration: 0.15, ease: 'easeIn' } 
            }}
            whileHover={{ y: -8, boxShadow: '12px 12px 0px 0px #000' }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 bg-accent text-white p-4 brutal-border brutal-shadow flex items-center gap-3 cursor-crosshair origin-bottom-right"
          >
            <Terminal className="w-8 h-8" />
            <span className="font-bold text-xl uppercase hidden md:inline">Ask AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, y: 100, x: 50, rotate: 10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0, 
              x: 0, 
              rotate: 0, 
              transition: { type: 'spring', stiffness: 400, damping: 25 } 
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.5, 
              y: 100, 
              x: 50, 
              rotate: 10, 
              transition: { duration: 0.15, ease: 'easeIn' } 
            }}
            className="fixed bottom-0 right-0 w-full md:bottom-12 md:right-12 md:w-[450px] h-[600px] max-h-[100dvh] bg-white brutal-border brutal-shadow z-50 flex flex-col cursor-crosshair shadow-[16px_16px_0_0_#2563eb] origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-black text-white p-4 flex justify-between items-center border-b-4 border-black">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-accent animate-pulse border-2 border-white"></div>
                <h3 className="font-bold text-2xl uppercase tracking-tighter">Harshith_AI</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:text-accent transition-colors p-1"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 bg-[#f4f4f5] flex flex-col gap-4 relative">
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[repeating-linear-gradient(45deg,#000,#000_10px,transparent_10px,transparent_20px)]"></div>
              
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}
                >
                  <div 
                    className={`max-w-[85%] p-4 brutal-border font-body font-medium text-lg ${
                      msg.role === 'user' 
                        ? 'bg-black text-white shadow-[4px_4px_0_0_#2563eb]' 
                        : 'bg-white text-black shadow-[4px_4px_0_0_#000]'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start relative z-10">
                  <div className="max-w-[85%] p-4 brutal-border font-body font-bold text-accent bg-white shadow-[4px_4px_0_0_#000] animate-pulse">
                    [ PROCESSING QUERY... ]
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t-4 border-black">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about my experience..."
                  className="flex-1 p-3 brutal-border font-body font-bold outline-none focus:bg-yellow-100 transition-colors placeholder:text-gray-400"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-accent text-white p-3 brutal-border brutal-shadow hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
