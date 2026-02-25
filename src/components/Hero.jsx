import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-orb orb1" />
        <div className="hero-orb orb2" />
        <div className="hero-grid" />
      </div>
      <div className="hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Sandhya<br />
            <span>Shiwakoti</span>
          </motion.h1>

          <motion.div
            className="hero-role-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="hero-role">Frontend Developer</span>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <a href="#projects" className="btn-primary">View my work</a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-aside"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-photo-wrapper">
            <img src="/profile.png" alt="Sandhya Shiwakoti" className="hero-photo" />
            <div className="hero-photo-glow" />
          </div>
          <div className="hero-card">
            <div className="hero-card-dot" />
            <p className="hero-card-status">Available for internship</p>
            <div className="hero-card-divider" />
            <div className="hero-card-stack">
              {['React', 'JavaScript', 'Framer Motion', 'Flutter'].map(t => (
                <span key={t} className="hero-card-tag">{t}</span>
              ))}
            </div>
            <div className="hero-card-divider" />
            <p className="hero-card-location">📍 Kathmandu, Nepal</p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="scroll-line" />
        <span className="scroll-label">scroll</span>
      </motion.a>
    </section>
  );
}
