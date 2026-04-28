import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactInfo = [
  { icon: <MapPin size={20} />, label: 'Location', value: 'Cairo, Egypt' },
  { icon: <Phone size={20} />, label: 'Phone', value: '+20 102 610 7134', href: 'tel:+201026107134' },
  { icon: <Mail size={20} />, label: 'Email', value: 'fahmyelmatry2030@gmail.com', href: 'mailto:fahmyelmatry2030@gmail.com' },
];

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '7rem 0' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>Contact</div>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a project in mind, or just want to connect? Let's talk.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem' }} className="contact-grid">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', marginBottom: '1rem' }}>
              Let's build something great together.
            </h3>
            <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '0.92rem' }}>
              Feel free to reach out for collaborations, project inquiries, or just a friendly chat. I'm always open to discussing new opportunities.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contactInfo.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1',
                    flexShrink: 0,
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} style={{ color: '#d1d5db', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>{c.value}</a>
                    ) : (
                      <span style={{ color: '#d1d5db', fontWeight: 600, fontSize: '0.95rem' }}>{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="card" style={{ padding: '2.5rem' }} onSubmit={(e) => {
              e.preventDefault();
              const btn = e.target.querySelector('button');
              const originalText = btn.innerHTML;
              btn.innerHTML = 'Sending...';
              btn.disabled = true;
              btn.style.opacity = '0.7';
              setTimeout(() => {
                btn.innerHTML = 'Message Sent! ✓';
                btn.style.background = '#22c55e';
                btn.style.borderColor = '#22c55e';
                setTimeout(() => {
                  btn.innerHTML = originalText;
                  btn.disabled = false;
                  btn.style.opacity = '1';
                  btn.style.background = '';
                  btn.style.borderColor = '';
                  e.target.reset();
                }, 3000);
              }, 1500);
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Your Name</label>
                  <input type="text" placeholder="John Doe" required style={{
                    width: '100%', padding: '0.9rem 1rem', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px', color: '#fff', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.3s',
                  }}
                  onFocus={e => e.target.style.borderColor = '#6366f1'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Your Email</label>
                  <input type="email" placeholder="john@example.com" required style={{
                    width: '100%', padding: '0.9rem 1rem', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px', color: '#fff', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.3s',
                  }}
                  onFocus={e => e.target.style.borderColor = '#6366f1'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Subject</label>
                <input type="text" placeholder="Project Inquiry" required style={{
                  width: '100%', padding: '0.9rem 1rem', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px', color: '#fff', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.3s',
                }}
                onFocus={e => e.target.style.borderColor = '#6366f1'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Message</label>
                <textarea rows="5" placeholder="Tell me about your project..." required style={{
                  width: '100%', padding: '0.9rem 1rem', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px', color: '#fff', fontSize: '0.9rem', outline: 'none', resize: 'none',
                  fontFamily: 'inherit', transition: 'border-color 0.3s',
                }}
                onFocus={e => e.target.style.borderColor = '#6366f1'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
