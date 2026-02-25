import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-inner"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <div className="about-left">
            <motion.p className="section-label" variants={fadeUp}>About me</motion.p>
            <motion.h2 className="section-title" variants={fadeUp}>
              Building for the<br />
              <span className="title-accent">web & mobile</span>
            </motion.h2>
            <motion.p className="about-text" variants={fadeUp}>
              I'm a final year BIT (Hons) student at Herald College Kathmandu, 
              affiliated with the University of Wolverhampton, UK.
            </motion.p>
            <motion.p className="about-text" variants={fadeUp}>
              I enjoy building things people actually use, from real-time web apps 
              to personalized digital experiences shared as gifts. My birthday and 
              Valentine's templates are live projects people have used to surprise the 
              people they love.
            </motion.p>
            <motion.p className="about-text" variants={fadeUp}>
              In 2025 I completed the Leapfrog #60DaysOfLearning challenge, 
              an intensive 60-day JavaScript and React program, and was awarded 
              a certificate of completion.
            </motion.p>
          </div>

          <div className="about-right">
            <motion.div className="about-stats" variants={fadeUp}>
              <div className="stat-card">
                <span className="stat-num">5+</span>
                <span className="stat-label">Projects deployed</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">60</span>
                <span className="stat-label">Days of learning</span>
              </div>
            </motion.div>

            <motion.div className="about-experience" variants={fadeUp}>
              <div className="exp-item">
                <div className="exp-dot" />
                <div>
                  <p className="exp-role">Frontend Developer</p>
                  <p className="exp-where">Hurifit Mobile App · 2024</p>
                  <p className="exp-desc">Built 6–7 screens in a 5-member team using Flutter & Dart</p>
                </div>
              </div>
              <div className="exp-item">
                <div className="exp-dot" />
                <div>
                  <p className="exp-role">#60DaysOfLearning2025</p>
                  <p className="exp-where">Leapfrog Student Partners · 2025</p>
                  <p className="exp-desc">Intensive JS & React challenge · Certificate of completion</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
