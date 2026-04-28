import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5 / CSS3', level: 97 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 82 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 88 },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', level: 72 },
      { name: 'REST APIs', level: 80 },
      { name: 'Git & GitHub', level: 92 },
      { name: 'Sass & SCSS', level: 85 },
      { name: 'Responsive Design', level: 95 },
      { name: 'UI/UX Principles', level: 80 },
    ],
  },
];

const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(level); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} style={{ marginBottom: '1.2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span style={{ color: '#d1d5db', fontWeight: 600, fontSize: '0.9rem' }}>{name}</span>
        <span style={{ color: '#6366f1', fontWeight: 700, fontSize: '0.85rem' }}>{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
};

const Skills = () => {
  const techBadges = ['React.js', 'Angular', 'Node.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'Sass', 'Git', 'GitHub', 'REST APIs', 'OOP', 'Figma'];

  return (
    <section id="skills" style={{ padding: '7rem 0', background: 'rgba(255,255,255,0.015)' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>Technical Skills</div>
          <h2 className="section-title">My <span>Expertise</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}
          className="skills-grid">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="card"
              style={{ padding: '2.5rem' }}
            >
              <h3 style={{ color: '#6366f1', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2rem' }}>
                {group.title}
              </h3>
              {group.skills.map((s, j) => <SkillBar key={j} {...s} />)}
            </motion.div>
          ))}
        </div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}
        >
          {techBadges.map((badge, i) => (
            <span key={i} style={{
              padding: '0.5rem 1.2rem',
              background: '#111827',
              border: '1px solid rgba(99,102,241,0.25)',
              borderRadius: '50px',
              color: '#d1d5db',
              fontSize: '0.82rem',
              fontWeight: 600,
              transition: 'all 0.3s',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.color = '#6366f1'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)'; e.currentTarget.style.color = '#d1d5db'; e.currentTarget.style.background = '#111827'; }}
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
