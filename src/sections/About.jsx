import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Palette, CheckCircle, MapPin, Mail, Phone, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '20+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Industries Served' },
  ];

  const qualities = [
    { icon: <Code2 size={20} />, title: 'Clean Code', desc: 'Writing maintainable, scalable code following best practices.' },
    { icon: <Rocket size={20} />, title: 'Fast Delivery', desc: 'Meeting deadlines without compromising on quality.' },
    { icon: <Palette size={20} />, title: 'Modern Design', desc: 'Creating beautiful, intuitive interfaces users love.' },
    { icon: <CheckCircle size={20} />, title: 'Reliable', desc: 'Committed to delivering exactly what clients need.' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">

          {/* ── Left: Image + Stats ── */}
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-image-wrap">
              {/* Decorative corner borders */}
              <div className="corner-border corner-tl" />
              <div className="corner-border corner-br" />

              <div className="about-image">
                <img src="/IMG-20250629-WA0030.jpg" alt="Fahmy Salama" />
                <div className="about-image-shimmer" />
              </div>

              {/* Experience badge */}
              <div className="about-exp-badge">
                <span className="about-exp-num">2+</span>
                <span className="about-exp-label">Years of<br />Experience</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="about-stats">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="about-stat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <span className="about-stat-num">{s.number}</span>
                  <span className="about-stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-badge">About Me</div>
            <h2 className="section-title" style={{ marginBottom: '1.2rem' }}>
              Who Am <span>I?</span>
            </h2>

            <p className="about-bio">
              I'm <strong>Fahmy Salama El-Matary</strong>, a passionate{' '}
              <strong className="about-highlight">Frontend Developer</strong> based in{' '}
              <strong className="about-highlight">Cairo, Egypt</strong>. I specialize in
              building high-quality, responsive web applications that combine clean code
              with great user experience.
            </p>
            <p className="about-bio" style={{ marginBottom: '2rem' }}>
              With a solid foundation in <strong>React, TypeScript, and Tailwind CSS</strong>,
              I've delivered projects across legal, tourism, education, food, and corporate
              sectors — always committed to continuous learning and clean code standards.
            </p>

            {/* Personal Info */}
            <div className="about-info-grid">
              {[
                { icon: <MapPin size={16} />, label: 'Location', val: 'Cairo, Egypt' },
                { icon: <Mail size={16} />, label: 'Email', val: 'fahmyelmatry2030@gmail.com' },
                { icon: <Phone size={16} />, label: 'Phone', val: '+20 102 610 7134' },
                { icon: <Calendar size={16} />, label: 'Birthday', val: '16 Feb 2003' },
              ].map((item, i) => (
                <div key={i} className="about-info-item">
                  <span className="about-info-icon">{item.icon}</span>
                  <div>
                    <span className="about-info-label">{item.label}</span>
                    <span className="about-info-val">{item.val}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Qualities */}
            <div className="about-qualities">
              {qualities.map((q, i) => (
                <motion.div
                  key={i}
                  className="about-quality"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <div className="about-quality-icon">{q.icon}</div>
                  <div>
                    <div className="about-quality-title">{q.title}</div>
                    <div className="about-quality-desc">{q.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="about-ctas">
              <a href="#contact" className="btn-primary">Hire Me</a>
              <a href="/assets/cv_screenshot.png" target="_blank" className="btn-outline">View CV</a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-section { padding: 7rem 0; }

        .about-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 5rem;
          align-items: start;
        }

        /* ── Left ── */
        .about-left { display: flex; flex-direction: column; gap: 2rem; }

        .about-image-wrap {
          position: relative;
          border-radius: 24px;
          padding: 12px;
          background: linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.04));
          border: 1px solid rgba(99,102,241,0.15);
        }
        .corner-border {
          position: absolute; width: 40px; height: 40px;
          border-color: #6366f1; border-style: solid;
        }
        .corner-tl {
          top: -2px; left: -2px;
          border-width: 3px 0 0 3px;
          border-radius: 4px 0 0 0;
        }
        .corner-br {
          bottom: -2px; right: -2px;
          border-width: 0 3px 3px 0;
          border-radius: 0 0 4px 0;
        }

        .about-image {
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4/5;
          position: relative;
        }
        .about-image img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top;
          transition: transform 0.6s ease;
          display: block;
        }
        .about-image:hover img { transform: scale(1.04); }
        .about-image-shimmer {
          position: absolute; inset: 0;
          background: linear-gradient(160deg, rgba(99,102,241,0.08) 0%, transparent 60%, rgba(139,92,246,0.06) 100%);
          pointer-events: none;
        }

        .about-exp-badge {
          position: absolute;
          bottom: -16px; right: -16px;
          background: #6366f1;
          border-radius: 16px;
          padding: 1rem 1.4rem;
          display: flex; align-items: center; gap: 0.75rem;
          box-shadow: 0 12px 40px rgba(99,102,241,0.4);
          border: 3px solid #0a0a0a;
        }
        .about-exp-num {
          font-size: 1.8rem; font-weight: 800; color: #fff; line-height: 1;
        }
        .about-exp-label {
          font-size: 0.7rem; color: rgba(255,255,255,0.8);
          font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;
          line-height: 1.4;
        }

        /* Stats */
        .about-stats {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1rem; margin-top: 1.5rem;
        }
        .about-stat {
          background: #111827;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; padding: 1.2rem;
          text-align: center;
          transition: all 0.3s;
        }
        .about-stat:hover {
          border-color: rgba(99,102,241,0.3);
          transform: translateY(-3px);
        }
        .about-stat-num {
          display: block;
          font-size: 1.6rem; font-weight: 800; color: #6366f1;
        }
        .about-stat-label {
          display: block;
          font-size: 0.72rem; color: #6b7280;
          font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;
          margin-top: 4px;
        }

        /* ── Right ── */
        .about-right { padding-top: 0.5rem; }

        .about-bio {
          color: #9ca3af;
          line-height: 1.9; font-size: 0.94rem;
          margin-bottom: 1rem;
        }
        .about-highlight { color: #6366f1; font-style: normal; }

        .about-info-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1rem; margin-bottom: 2rem;
          padding: 1.5rem;
          background: #111827;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
        }
        .about-info-item {
          display: flex; align-items: flex-start; gap: 0.6rem;
        }
        .about-info-icon {
          color: #6366f1; margin-top: 2px; flex-shrink: 0;
        }
        .about-info-label {
          display: block;
          font-size: 0.68rem; font-weight: 700;
          color: #4b5563; text-transform: uppercase; letter-spacing: 0.08em;
          margin-bottom: 2px;
        }
        .about-info-val {
          display: block;
          font-size: 0.82rem; color: #d1d5db; font-weight: 500;
          word-break: break-all;
        }

        .about-qualities {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1rem; margin-bottom: 2rem;
        }
        .about-quality {
          display: flex; align-items: flex-start; gap: 0.75rem;
          padding: 1rem;
          background: #111827;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          transition: all 0.3s;
        }
        .about-quality:hover {
          border-color: rgba(99,102,241,0.3);
          transform: translateY(-2px);
        }
        .about-quality-icon {
          width: 36px; height: 36px; flex-shrink: 0;
          border-radius: 8px;
          background: rgba(99,102,241,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #6366f1;
        }
        .about-quality-title {
          font-size: 0.85rem; font-weight: 700; color: #fff; margin-bottom: 3px;
        }
        .about-quality-desc {
          font-size: 0.75rem; color: #6b7280; line-height: 1.5;
        }

        .about-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
