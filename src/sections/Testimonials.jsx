import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechFlow',
    content: "Working with Fahmy was a game-changer for our platform. His attention to detail and ability to solve complex frontend challenges is truly impressive.",
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    rating: 5,
  },
  {
    name: 'Ahmed Hassan',
    role: 'Founder of Mazar Finishing',
    content: "Fahmy delivered our corporate website ahead of schedule. The design is stunning and the performance is top-notch. Highly recommended!",
    avatar: 'https://i.pravatar.cc/150?u=ahmed',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Product Manager',
    content: "One of the best developers I've worked with. He doesn't just write code; he understands the business goals and delivers solutions that matter.",
    avatar: 'https://i.pravatar.cc/150?u=elena',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '7rem 0', background: 'rgba(255,255,255,0.01)' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>Testimonials</div>
          <h2 className="section-title">Client <span>Feedback</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            What people say about working with me.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card"
              style={{ padding: '2.5rem', position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: '2rem', right: '2rem', color: 'rgba(99,102,241,0.2)' }}>
                <Quote size={48} />
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>

              <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '2rem' }}>
                "{t.content}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={t.avatar} alt={t.name} style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #6366f1' }} />
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>{t.name}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600 }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
