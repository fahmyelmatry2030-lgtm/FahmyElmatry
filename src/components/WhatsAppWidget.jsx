import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '201026107134'; // User's phone number from Contact.jsx

  return (
    <div className="whatsapp-widget" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="whatsapp-card"
            style={{
              position: 'absolute', bottom: '80px', right: 0,
              width: 'calc(100vw - 40px)', maxWidth: '320px', background: '#fff', borderRadius: '20px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)', overflow: 'hidden',
              color: '#333'
            }}
          >
            {/* Header */}
            <div style={{ background: '#075e54', padding: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#fff', overflow: 'hidden' }}>
                <img src="/IMG-20250629-WA0030.jpg" alt="Fahmy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>Fahmy Salama</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>Online | Usually replies in 1h</div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: '1.5rem', background: '#e5ddd5', minHeight: '120px', position: 'relative' }}>
              <div style={{
                background: '#fff', padding: '0.8rem 1rem', borderRadius: '0 12px 12px 12px',
                fontSize: '0.9rem', maxWidth: '85%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                position: 'relative'
              }}>
                <div style={{ position: 'absolute', left: '-8px', top: 0, width: 0, height: 0, borderTop: '8px solid #fff', borderLeft: '8px solid transparent' }} />
                Hi there! 👋 How can I help you today?
              </div>
            </div>

            {/* Footer */}
            <div style={{ padding: '1rem', background: '#fff' }}>
              <a
                href={`https://wa.me/${phoneNumber}?text=Hi Fahmy, I'm interested in working with you!`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                  background: '#25d366', color: '#fff', padding: '0.8rem', borderRadius: '12px',
                  textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem',
                  transition: 'background 0.3s'
                }}
                onMouseOver={e => e.currentTarget.style.background = '#128c7e'}
                onMouseOut={e => e.currentTarget.style.background = '#25d366'}
              >
                <Send size={18} /> Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px', height: '60px', borderRadius: '50%',
          background: '#25d366', border: 'none', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', boxShadow: '0 10px 25px rgba(37,211,102,0.4)',
          position: 'relative'
        }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span style={{
            position: 'absolute', top: '-5px', right: '-5px',
            width: '15px', height: '15px', background: '#ef4444',
            borderRadius: '50%', border: '2px solid #fff'
          }} />
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;
