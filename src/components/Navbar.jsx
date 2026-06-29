import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        padding: scrolled ? '14px 0' : '22px 0',
      }}
    >
      <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }} className="group">
          <div style={{
            width: '45px', height: '45px', background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', 
            borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
            color: '#fff', boxShadow: '0 8px 16px rgba(99,102,241,0.2)', transition: 'all 0.4s'
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Fahmy
            </span>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#6366f1', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '2px' }}>
              Salama
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.name} href={l.href} className="nav-link">{l.name}</a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Hire Me</a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}
          >
            <div className="section-container" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {links.map(l => (
                <a key={l.name} href={l.href} onClick={() => setIsOpen(false)}
                  style={{ color: '#9ca3af', fontWeight: 500, textDecoration: 'none', fontSize: '1rem' }}>
                  {l.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
