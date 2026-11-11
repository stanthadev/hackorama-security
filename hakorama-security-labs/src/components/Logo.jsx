import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link className="brand" to="/" aria-label="Hackorama Security Labs home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <path d="M8 7h12v13h10V7h10v34H29V29H18v12H8z" />
          <path className="orbit" d="M3 31C12 9 34 2 45 13" />
          <circle cx="37" cy="10" r="2" />
        </svg>
      </span>
      <span className="brand-type">
        <strong>HACKORAMA</strong>
        <small>SECURITY LABS</small>
      </span>
    </Link>
  )
}
