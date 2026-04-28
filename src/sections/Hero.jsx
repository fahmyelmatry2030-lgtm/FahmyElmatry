import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

const roles = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Freelancer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let t;
    if (!deleting && text.length < current.length) {
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="hero-section">
      {/* Animated background particles */}
      <div className="hero-bg">
        <div className="hero-gradient-1" />
        <div className="hero-gradient-2" />
        <div className="hero-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }} />
          ))}
        </div>
      </div>

      <div className="section-container hero-content">
        <div className="hero-grid">
          {/* Text Column */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="hero-badge-dot" />
              Available for new projects
            </motion.div>

            <h1 className="hero-heading">
              Hi, I'm<br />
              <span className="hero-name">Fahmy Salama</span>
            </h1>

            <div className="hero-role">
              <span className="hero-role-text">{text}</span>
              <span className="hero-cursor">|</span>
            </div>

            <p className="hero-desc">
              Detail-oriented Frontend Developer with hands-on experience building 
              responsive web applications and user-centric interfaces using React, 
              TypeScript, and modern web technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                <span>View My Work</span>
              </a>
              <a href="#contact" className="btn-outline">
                <span>Get In Touch</span>
              </a>
              <a href="/assets/cv_screenshot.png" target="_blank" className="btn-outline">
                <Download size={18} />
                <span>Resume</span>
              </a>
            </div>

            <div className="hero-socials">
              {[
                { icon: <Github size={20} />, href: '#', label: 'GitHub' },
                { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
                { icon: <Mail size={20} />, href: 'mailto:fahmyelmatry2030@gmail.com', label: 'Email' },
                { icon: <Phone size={20} />, href: 'tel:+201026107134', label: 'Phone' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="hero-social-link"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                </motion.a>
              ))}
              <div className="hero-social-line" />
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="hero-image-wrap"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-image-container">
              {/* Decorative ring */}
              <div className="hero-ring" />
              <div className="hero-ring hero-ring-2" />

              {/* Photo */}
              <div className="hero-photo">
                <img src="/IMG-20250629-WA0030.jpg" alt="Fahmy Salama" />
                <div className="hero-photo-overlay" />
              </div>

              {/* Floating badges */}
              <motion.div
                className="hero-float-badge hero-float-left"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="float-badge-number">20+</div>
                <div className="float-badge-label">Projects</div>
              </motion.div>

              <motion.div
                className="hero-float-badge hero-float-right"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="float-badge-number">100%</div>
                <div className="float-badge-label">Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hero-scroll"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <span>Scroll Down</span>
          <ArrowDown size={16} />
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 5rem;
        }
        .hero-bg {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
        }
        .hero-gradient-1 {
          position: absolute; top: -20%; left: -15%; width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%);
          filter: blur(40px);
        }
        .hero-gradient-2 {
          position: absolute; bottom: -10%; right: -10%; width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%);
          filter: blur(40px);
        }
        .hero-particles { position: absolute; inset: 0; }
        .particle {
          position: absolute; width: 3px; height: 3px; border-radius: 50%;
          background: rgba(99,102,241,0.4);
          animation: float-particle linear infinite;
        }
        @keyframes float-particle {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
        .hero-content { position: relative; z-index: 1; width: 100%; }
        .hero-grid {
          display: grid; grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem; align-items: center;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.6rem;
          padding: 0.5rem 1.2rem; border-radius: 50px;
          background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.2);
          color: #6366f1; font-size: 0.8rem; font-weight: 600;
          letter-spacing: 0.05em; margin-bottom: 2rem; width: fit-content;
        }
        .hero-badge-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #22c55e;
          box-shadow: 0 0 8px rgba(34,197,94,0.6);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot { 0%,100% { opacity:1; } 50% { opacity:0.4; } }

        .hero-heading {
          font-size: clamp(2.8rem, 5.5vw, 4.2rem); font-weight: 800;
          line-height: 1.1; color: #fff; margin-bottom: 0.8rem;
        }
        .hero-name {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-role {
          font-size: clamp(1.1rem, 2vw, 1.5rem); color: #d1d5db;
          margin-bottom: 1.5rem; min-height: 2.2rem; font-weight: 500;
        }
        .hero-cursor {
          color: #6366f1; font-weight: 300;
          animation: blink 0.7s step-end infinite;
        }
        .hero-desc {
          color: #6b7280; line-height: 1.9; font-size: 0.95rem;
          max-width: 520px; margin-bottom: 2.5rem;
        }
        .hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
        .hero-socials { display: flex; align-items: center; gap: 0.8rem; }
        .hero-social-link {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #6b7280; text-decoration: none; transition: all 0.3s;
        }
        .hero-social-link:hover {
          border-color: #6366f1; color: #6366f1;
          background: rgba(99,102,241,0.08);
          box-shadow: 0 0 20px rgba(99,102,241,0.15);
        }
        .hero-social-line {
          width: 60px; height: 1px;
          background: linear-gradient(to right, rgba(99,102,241,0.4), transparent);
          margin-left: 0.5rem;
        }

        /* Image area */
        .hero-image-wrap { display: flex; justify-content: center; }
        .hero-image-container {
          position: relative; width: 380px; height: 460px;
        }
        .hero-ring {
          position: absolute; inset: -15px;
          border: 2px solid rgba(99,102,241,0.2);
          border-radius: 62% 38% 42% 58% / 48% 52% 48% 52%;
          animation: morph 8s ease-in-out infinite;
        }
        .hero-ring-2 {
          inset: -25px;
          border-color: rgba(139,92,246,0.12);
          animation-delay: -4s;
          animation-direction: reverse;
        }
        @keyframes morph {
          0% { border-radius: 62% 38% 42% 58% / 48% 52% 48% 52%; }
          25% { border-radius: 42% 58% 52% 48% / 38% 62% 38% 62%; }
          50% { border-radius: 52% 48% 62% 38% / 58% 42% 58% 42%; }
          75% { border-radius: 38% 62% 48% 52% / 42% 58% 62% 38%; }
          100% { border-radius: 62% 38% 42% 58% / 48% 52% 48% 52%; }
        }
        .hero-photo {
          width: 100%; height: 100%; overflow: hidden;
          border-radius: 62% 38% 42% 58% / 48% 52% 48% 52%;
          animation: morph 8s ease-in-out infinite;
          border: 3px solid rgba(99,102,241,0.35);
          box-shadow: 0 25px 80px rgba(99,102,241,0.2), 0 0 0 1px rgba(99,102,241,0.1);
          position: relative;
        }
        .hero-photo img {
          width: 100%; height: 100%; object-fit: cover; object-position: top;
          transition: transform 0.6s ease;
        }
        .hero-photo:hover img { transform: scale(1.05); }
        .hero-photo-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.5) 100%);
        }

        /* Float badges */
        .hero-float-badge {
          position: absolute; z-index: 10;
          background: rgba(17,24,39,0.95); backdrop-filter: blur(16px);
          border: 1px solid rgba(99,102,241,0.25);
          border-radius: 16px; padding: 14px 22px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          text-align: center;
        }
        .hero-float-left { bottom: 30px; left: -30px; }
        .hero-float-right { top: 40px; right: -30px; }
        .float-badge-number {
          font-size: 1.5rem; font-weight: 800; color: #6366f1;
          line-height: 1;
        }
        .float-badge-label {
          font-size: 0.65rem; color: #6b7280; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px;
        }

        .hero-scroll {
          display: flex; flex-direction: column; align-items: center;
          gap: 0.4rem; margin-top: 4rem; color: #374151;
        }
        .hero-scroll span {
          font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-badge { margin: 0 auto 2rem; }
          .hero-desc { margin: 0 auto 2.5rem; }
          .hero-buttons { justify-content: center; }
          .hero-socials { justify-content: center; }
          .hero-image-container { width: 280px !important; height: 340px !important; }
          .hero-float-left { left: -10px !important; }
          .hero-float-right { right: -10px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
