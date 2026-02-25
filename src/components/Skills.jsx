import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data';
import './Skills.css';

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <motion.p className="section-label"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        >Skills</motion.p>
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >What I work with</motion.h2>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="skill-group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            >
              <p className="skill-category">{group.category}</p>
              <div className="skill-items">
                {group.items.map(item => (
                  <span key={item} className="skill-item">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
