import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-copy">Building technology. Securing possibilities.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/about">About us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/insights">Insights</Link>
        </div>
        <div>
          <h3>Our focus</h3>
          <Link to="/cybersecurity">Cybersecurity</Link>
          <Link to="/software-development">Software development</Link>
          <Link to="/technology-solutions">Technology solutions</Link>
        </div>
        <div>
          <h3>Get in touch</h3>
          <Link to="/contact">Contact the team</Link>
          <p className="muted small">Add your official email and social links before launch.</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Hackorama Security Labs.</span>
        <span>Built with curiosity and care.</span>
      </div>
    </footer>
  )
}
