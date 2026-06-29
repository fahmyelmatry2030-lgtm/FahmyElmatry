import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Layout, Zap, Smartphone, Globe, Code } from 'lucide-react';

const services = [
  {
    icon: <Layout size={32} />,
    title: 'Custom Web Apps',
    desc: 'Building scalable, high-performance web applications using React and modern frontend architectures.',
  },
  {
    icon: <ShoppingCart size={32} />,
    title: 'E-Commerce Solutions',
    desc: 'Specialized in building seamless shopping experiences with high conversion rates and secure payment integrations.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Performance Optimization',
    desc: 'Speeding up slow applications, optimizing Core Web Vitals, and ensuring lightning-fast load times.',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Responsive UI/UX',
    desc: 'Designing and developing pixel-perfect, mobile-first interfaces that work beautifully on all devices.',
  },
  {
    icon: <Globe size={32} />,
    title: 'SEO & Accessibility',
    desc: 'Ensuring your site ranks high on search engines and is fully accessible to all users following WCAG standards.',
  },
  {
    icon: <Code size={32} />,
    title: 'API Integration',
    desc: 'Seamlessly connecting your frontend with complex backends, REST APIs, and third-party services.',
  },
];

const Services = () => {
  return (
    <section id="services" style={{ padding: '7rem 0' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>Services</div>
          <h2 className="section-title">What I <span>Offer</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Transforming your ideas into digital reality with cutting-edge technology.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card service-card"
              style={{ padding: '3rem 2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            >
              <div className="service-icon-wrap" style={{ 
                width: '80px', height: '80px', borderRadius: '24px', 
                background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#6366f1', margin: '0 auto 2rem', transition: 'all 0.3s'
              }}>
                {s.icon}
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.2rem' }}>{s.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.8 }}>{s.desc}</p>
              
              {/* Decorative gradient overlay on hover */}
              <div className="service-hover-bg" />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .service-card { cursor: default; }
        .service-card:hover .service-icon-wrap {
          transform: scale(1.1) rotate(10deg);
          background: #6366f1;
          color: #fff;
          box-shadow: 0 10px 25px rgba(99,102,241,0.4);
        }
        .service-hover-bg {
          position: absolute; inset: 0;
          background: radial-gradient(circle at top right, rgba(99,102,241,0.08), transparent 70%);
          opacity: 0; transition: opacity 0.4s; pointer-events: none;
        }
        .service-card:hover .service-hover-bg { opacity: 1; }
      `}</style>
    </section>
  );
};

export default Services;
