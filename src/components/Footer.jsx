import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-name">Sandhya Shiwakoti</p>
        <p className="footer-copy">Built with React & Framer Motion · {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
