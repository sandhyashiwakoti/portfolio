import { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['About', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">SS<span>.</span></a>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
            </li>
          ))}
          <li>
            <a
              href="/Sandhya_Shiwakoti_CV.pdf"
              className="nav-resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
        <button className="nav-burger" onClick={() => setMenuOpen(o => !o)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
