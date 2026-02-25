import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-inner">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let's work together</h2>
            <p className="contact-desc">
              I'm currently looking for frontend internship opportunities. 
              Whether you have a role, a project, or just want to say hi -
              my inbox is always open.
            </p>

            <div className="contact-links">
              <a href="mailto:sandhya.shiwakoti.dev@gmail.com" className="contact-link email-link">
                <span className="contact-link-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <div>
                  <p className="contact-link-label">Email</p>
                  <p className="contact-link-value">sandhya.shiwakoti.dev@gmail.com</p>
                </div>
                <span className="contact-arrow">→</span>
              </a>

              <a href="https://linkedin.com/in/sandhya-shiwakoti" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </span>
                <div>
                  <p className="contact-link-label">LinkedIn</p>
                  <p className="contact-link-value">linkedin.com/in/sandhya-shiwakoti</p>
                </div>
                <span className="contact-arrow">→</span>
              </a>

              <a href="https://github.com/sandhyashiwakoti" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </span>
                <div>
                  <p className="contact-link-label">GitHub</p>
                  <p className="contact-link-value">github.com/sandhyashiwakoti</p>
                </div>
                <span className="contact-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
