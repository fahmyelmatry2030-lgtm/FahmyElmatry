import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Lawyer Mahmoud Al-Zeini',
    desc: 'Professional law firm website with a clean, authoritative design showcasing legal services and attorney profiles.',
    image: '/assets/projects/lawyer-alzeini.png',
    tags: ['React', 'Legal'],
    category: 'Legal',
    live: 'https://lawyer-mahmoud-al-zeini.vercel.app/',
  },
  {
    title: 'Lawyer Abdullah Al-Masry',
    desc: 'Elegant legal services platform for a law firm, featuring case studies and professional consultation booking.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Legal'],
    category: 'Legal',
    live: 'https://lawyer-abdullah-al-masry.vercel.app/',
  },
  {
    title: 'Ovia Global',
    desc: 'Modern educational platform with course listings, learning paths, and a rich UI for students and instructors.',
    image: '/assets/projects/ovia-global.png',
    tags: ['React', 'Education'],
    category: 'Education',
    live: 'https://ovia-global.vercel.app/',
  },
  {
    title: 'Teacher Platform',
    desc: 'Interactive portfolio and scheduling interface for a professional educator to manage sessions and courses.',
    image: '/assets/projects/teacher-platform.png',
    tags: ['React', 'Education'],
    category: 'Education',
    live: 'https://teacher-three-wheat.vercel.app/',
  },
  {
    title: 'Shop System',
    desc: 'Full-featured e-commerce store with product browsing, cart management, and a seamless checkout experience.',
    image: '/assets/projects/shop-system.png',
    tags: ['React', 'E-commerce'],
    category: 'E-commerce',
    live: 'https://system-shop-nine.vercel.app/',
  },
  {
    title: 'Books Website',
    desc: 'Online bookstore platform with a rich catalog, search functionality and reading recommendations.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'E-commerce'],
    category: 'E-commerce',
    live: 'https://website-books.vercel.app/',
  },
  {
    title: 'Gym System',
    desc: 'Fitness center management platform with membership plans, class schedules, and trainer profiles.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Fitness'],
    category: 'Business',
    live: 'https://gym-system-plum.vercel.app/',
  },
  {
    title: 'Mazar Finishing',
    desc: 'Construction and interior finishing company website showcasing portfolio, services and project gallery.',
    image: '/assets/projects/mazar-finishing.png',
    tags: ['React', 'Construction'],
    category: 'Business',
    live: 'https://mazar-finishing.vercel.app/',
  },
  {
    title: 'Mazar Platform',
    desc: 'Business platform for a construction & real estate company with project showcases and contact management.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Real Estate'],
    category: 'Business',
    live: 'https://mazar-nine.vercel.app/',
  },
  {
    title: 'Ahmed Abo Ali',
    desc: 'Personal portfolio and professional profile website with a modern layout and smooth animations.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Portfolio'],
    category: 'Portfolio',
    live: 'https://ahmed-abo-ali-swart.vercel.app/',
  },
  {
    title: 'Arvo Platform',
    desc: 'Modern web platform with clean UI, dynamic content sections and responsive layout.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Platform'],
    category: 'Portfolio',
    live: 'https://arvo-seven.vercel.app/',
  },
  {
    title: 'My Project',
    desc: 'A web application developed with React featuring a sleek, modern interface and smooth user experience.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Web App'],
    category: 'Portfolio',
    live: 'https://my-project-six-murex.vercel.app/',
  },
];

const categories = ['All', 'Legal', 'Education', 'E-commerce', 'Business', 'Portfolio'];

const Projects = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>Portfolio</div>
          <h2 className="section-title">My Real <span>Projects</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {projects.length} live projects delivered across multiple industries — click to visit any of them.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '0.55rem 1.4rem', borderRadius: '50px',
                fontWeight: 600, fontSize: '0.82rem',
                cursor: 'pointer', transition: 'all 0.3s',
                border: active === cat ? 'none' : '1px solid rgba(255,255,255,0.08)',
                background: active === cat ? '#6366f1' : 'transparent',
                color: active === cat ? '#fff' : '#9ca3af',
                fontFamily: 'inherit',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.8rem',
          }}
        >
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="project-card"
              >
                {/* Image */}
                <div className="project-img-wrap">
                  <img src={p.image} alt={p.title} className="project-img" />
                  <div className="project-overlay">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-visit-btn"
                    >
                      <ExternalLink size={18} />
                      Visit Live Site
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="project-content">
                  <div className="project-tags">
                    {p.tags.map(t => (
                      <span key={t} className="project-tag">{t}</span>
                    ))}
                  </div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .projects-section { padding: 7rem 0; }

        .project-card {
          background: #111827;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .project-card:hover {
          border-color: rgba(99,102,241,0.35);
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(99,102,241,0.12);
        }

        .project-img-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
        }
        .project-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          display: block;
        }
        .project-card:hover .project-img { transform: scale(1.08); }

        .project-overlay {
          position: absolute; inset: 0;
          background: rgba(10,10,10,0.75);
          backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.4s ease;
        }
        .project-card:hover .project-overlay { opacity: 1; }

        .project-visit-btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.75rem 1.8rem;
          background: #6366f1; color: #fff;
          border-radius: 50px; font-weight: 700;
          font-size: 0.88rem; text-decoration: none;
          transition: all 0.3s;
          font-family: inherit;
          transform: translateY(10px);
          transition: transform 0.3s ease, background 0.3s;
        }
        .project-card:hover .project-visit-btn { transform: translateY(0); }
        .project-visit-btn:hover { background: #4f46e5; }

        .project-content { padding: 1.5rem; }

        .project-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.75rem; }
        .project-tag {
          padding: 0.2rem 0.75rem;
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 50px;
          color: #6366f1;
          font-size: 0.68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.06em;
        }

        .project-title {
          font-size: 1.1rem; font-weight: 700;
          color: #fff; margin-bottom: 0.5rem;
          transition: color 0.3s;
        }
        .project-card:hover .project-title { color: #6366f1; }

        .project-desc {
          font-size: 0.82rem; color: #6b7280;
          line-height: 1.7; margin-bottom: 1.2rem;
        }

        .project-link {
          display: inline-flex; align-items: center; gap: 0.4rem;
          color: #6366f1; font-size: 0.82rem; font-weight: 700;
          text-decoration: none; transition: gap 0.3s;
        }
        .project-link:hover { gap: 0.7rem; }
      `}</style>
    </section>
  );
};

export default Projects;
