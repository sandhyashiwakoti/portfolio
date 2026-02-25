import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '../data';
import './Projects.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Work
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Things I've built
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A mix of practical apps, real websites, and creative personal projects.
        </motion.p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              className="project-card"
              key={p.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <div className="project-card-top">
                <span className="project-tag">{p.tag}</span>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="project-icon-link" aria-label="GitHub">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="project-icon-link" aria-label="Live site">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
