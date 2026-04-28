import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '3rem 0',
      background: '#0a0a0a',
    }}>
      <div className="section-container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>

          {/* Logo */}
          <a href="#home" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', textDecoration: 'none' }}>
            Fahmy<span style={{ color: '#6366f1' }}>.</span>
          </a>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[
              { icon: <Github size={18} />, href: '#' },
              { icon: <Linkedin size={18} />, href: '#' },
              { icon: <Mail size={18} />, href: 'mailto:fahmyelmatry2030@gmail.com' },
            ].map((s, i) => (
              <a key={i} href={s.href} style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#6b7280', transition: 'all 0.3s', textDecoration: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.color = '#6366f1'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#6b7280'; }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p style={{ color: '#4b5563', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            © {year} Fahmy Salama. Built with <Heart size={14} color="#ef4444" fill="#ef4444" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
