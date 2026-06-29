import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, User, Terminal } from 'lucide-react';

const NexoAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm **Nexo AI**, Fahmy's intelligent assistant. How can I help you explore his work today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      let response = "I'm sorry, I'm currently in 'Demo Mode'. Fahmy is working on integrating my full brain! But I can tell you he is an expert in React and UI/UX.";
      
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('project')) response = "Fahmy has completed over 20 projects, including e-commerce platforms, portfolios, and legal firm websites. You can check them in the Projects section!";
      if (lowerInput.includes('contact') || lowerInput.includes('email')) response = "You can reach Fahmy at fahmyelmatry2030@gmail.com or via the contact form below.";
      if (lowerInput.includes('skills')) response = "Fahmy specializes in React, TypeScript, Next.js, and Tailwind CSS. He is also proficient in the MERN stack.";

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="nexo-ai-widget" style={{ position: 'fixed', bottom: '30px', left: '30px', zIndex: 9999 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom left' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="nexo-card"
            style={{
              position: 'absolute', bottom: '80px', left: 0,
              width: 'calc(100vw - 40px)', maxWidth: '350px', background: '#0f172a', borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#e2e8f0', display: 'flex', flexDirection: 'column'
            }}
          >
            {/* Header */}
            <div style={{ 
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', 
              padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' 
            }}>
              <div style={{ 
                width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)'
              }}>
                <Bot size={24} color="#fff" />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.02em', color: '#fff' }}>Nexo AI</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.8, color: '#fff' }}>Powered by Ovia Tech</div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', opacity: 0.7 }}>
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} style={{ padding: '1.5rem', height: '350px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#0a0a0a' }}>
              {messages.map((m, i) => (
                <div key={i} style={{ 
                  alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  display: 'flex', flexDirection: 'column',
                  alignItems: m.role === 'user' ? 'flex-end' : 'flex-start'
                }}>
                  <div style={{ 
                    padding: '0.8rem 1rem', borderRadius: m.role === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                    background: m.role === 'user' ? '#6366f1' : '#1e293b',
                    color: '#fff', fontSize: '0.88rem', lineHeight: 1.5,
                    border: m.role === 'user' ? 'none' : '1px solid rgba(255,255,255,0.05)'
                  }}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div style={{ alignSelf: 'flex-start', background: '#1e293b', padding: '0.8rem 1rem', borderRadius: '18px 18px 18px 2px', display: 'flex', gap: '4px' }}>
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%' }} />
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%' }} />
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%' }} />
                </div>
              )}
            </div>

            {/* Input Area */}
            <div style={{ padding: '1rem', background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  style={{
                    width: '100%', padding: '0.8rem 3rem 0.8rem 1rem', background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px', color: '#fff', fontSize: '0.85rem', outline: 'none'
                  }}
                />
                <button 
                  onClick={handleSend}
                  style={{ 
                    position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)',
                    background: '#6366f1', border: 'none', color: '#fff', width: '32px', height: '32px',
                    borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                  }}
                >
                  <Send size={16} />
                </button>
              </div>
              <div style={{ textAlign: 'center', marginTop: '0.6rem', fontSize: '0.6rem', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <Sparkles size={10} /> Powered by Nexo Intelligence
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px', height: '60px', borderRadius: '20px',
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          border: 'none', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', boxShadow: '0 10px 30px rgba(99,102,241,0.4)',
          position: 'relative'
        }}
      >
        <div style={{ position: 'absolute', inset: '2px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '18px' }} />
        {isOpen ? <X size={28} /> : <Bot size={28} />}
      </motion.button>
    </div>
  );
};

export default NexoAI;
