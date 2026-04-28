import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const timeline = [
  {
    type: 'work',
    title: 'Frontend Developer (Freelance)',
    org: 'WorkUp & Private Clients',
    period: 'Sept 2024 – Present',
    desc: 'Delivering high-quality web solutions for clients across IT consulting, legal services, tourism, and education sectors using React and Tailwind CSS.',
  },
  {
    type: 'edu',
    title: 'Full Stack Diploma – MERN Stack',
    org: 'Amit Learning',
    period: 'Feb 2023 – Oct 2023',
    desc: 'Comprehensive training in MongoDB, Express.js, React, and Node.js. Built multiple full-stack applications during the program.',
  },
  {
    type: 'edu',
    title: "Bachelor's – Management Information Systems",
    org: 'Eg-Academy in Tanta – Higher Institute',
    period: 'Oct 2021 – June 2025',
    desc: 'Core studies in information systems, database management, and software engineering. Grade: Very Good.',
  },
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '7rem 0', background: 'rgba(255,255,255,0.015)' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>Resume</div>
          <h2 className="section-title">Experience & <span>Education</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            My professional journey and academic background.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '22px', top: 0, bottom: 0,
            width: '2px', background: 'linear-gradient(to bottom, #6366f1, rgba(99,102,241,0.1))',
          }} />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', position: 'relative' }}
            >
              {/* Icon dot */}
              <div style={{
                minWidth: '44px', height: '44px', borderRadius: '50%',
                background: '#111827', border: '2px solid #6366f1',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', zIndex: 1,
                boxShadow: '0 0 20px rgba(99,102,241,0.3)',
              }}>
                {item.type === 'work'
                  ? <Briefcase size={18} color="#6366f1" />
                  : <GraduationCap size={18} color="#6366f1" />
                }
              </div>

              {/* Content card */}
              <div className="card" style={{ padding: '1.8rem', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Calendar size={14} color="#6366f1" />
                  <span style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 600 }}>{item.period}</span>
                </div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem' }}>{item.title}</h3>
                <p style={{ color: '#8b5cf6', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>{item.org}</p>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
