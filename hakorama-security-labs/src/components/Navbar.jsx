import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Cybersecurity', '/cybersecurity'],
  ['Software', '/software-development'],
  ['Technology', '/technology-solutions'],
  ['Projects', '/projects'],
  ['Insights', '/insights'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={close} end={path === '/'}>
              {label}
            </NavLink>
          ))}
          <NavLink className="nav-contact" to="/contact" onClick={close}>Let's talk <span>↗</span></NavLink>
        </nav>
      </div>
    </header>
  )
}
