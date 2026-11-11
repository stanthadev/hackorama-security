import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const services = [
  { icon: '⌘', title: 'Cybersecurity', text: 'Building security knowledge and helping improve the security posture of digital systems.', link: '/cybersecurity' },
  { icon: '</>', title: 'Software development', text: 'Designing useful, maintainable web applications and software solutions.', link: '/software-development' },
  { icon: '⌁', title: 'Technology solutions', text: 'Practical technology guidance, support and digital problem-solving.', link: '/technology-solutions' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow"><i className="status-dot" /> TECHNOLOGY · SECURITY · INNOVATION</span>
            <h1>Building technology.<br /><span>Securing possibilities.</span></h1>
            <p>We explore the intersection of software development and cybersecurity to help create a more capable and secure digital world.</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/about">Discover Hackorama <span>↗</span></Link>
              <Link className="button button-ghost" to="/projects">Explore our work</Link>
            </div>
            <div className="hero-note"><span className="note-line" /> A learning-led technology company with security at its core.</div>
          </div>
          <div className="hero-visual" aria-label="Abstract shield and network illustration">
            <div className="visual-ring ring-one" />
            <div className="visual-ring ring-two" />
            <div className="shield">
              <svg viewBox="0 0 180 200" aria-hidden="true">
                <path d="M90 8 158 34v52c0 48-28 82-68 106C50 168 22 134 22 86V34z" />
                <path d="M59 61h24v29h25V61h24v80h-24v-29H83v29H59z" />
              </svg>
              <span className="shield-glow" />
            </div>
            <div className="orbit-dot dot-a" /><div className="orbit-dot dot-b" /><div className="orbit-dot dot-c" />
            <div className="visual-caption"><span>HSL / 001</span><span>SECURE BY DESIGN</span></div>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>01 / SOFTWARE</span><span>02 / SECURITY</span><span>03 / TECHNOLOGY</span>
        </div>
      </section>

      <section className="section container">
        <SectionHeading eyebrow="WHAT WE DO" title="Technology with purpose." text="Our work is shaped by curiosity, responsible practice and a commitment to building useful digital solutions." />
        <div className="service-grid">
          {services.map((item, index) => (
            <article className="service-card" key={item.title}>
              <div className="card-top"><span className="service-icon">{item.icon}</span><span className="card-index">0{index + 1}</span></div>
              <h3>{item.title}</h3><p>{item.text}</p>
              <Link className="text-link" to={item.link}>Explore division <span>→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split-section">
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2>Build thoughtfully.<br /><span className="text-cyan">Secure responsibly.</span></h2>
          </div>
          <div className="split-copy">
            <p>Strong technology is more than a polished interface or a working feature. It also needs sound foundations, careful decisions and respect for the people who use it.</p>
            <Link className="text-link" to="/about">Learn about our principles <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="cta-panel">
          <div><span className="eyebrow">START A CONVERSATION</span><h2>Have a digital challenge<br />to work through?</h2><p>Tell us what you're building or what you'd like to understand better.</p></div>
          <Link className="button button-primary" to="/contact">Contact us <span>↗</span></Link>
          <div className="cta-decoration">HSL<span>.</span></div>
        </div>
      </section>
    </>
  )
}
