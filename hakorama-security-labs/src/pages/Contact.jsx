import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'hello@yourdomain.com' // Replace this with the company's real email address.

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">CONTACT</span><h1>Let's start a <span className="text-cyan">conversation.</span></h1><p>Have a question, an idea or a technology challenge? We would be glad to hear from you.</p></div></section>
    <section className="section container contact-layout">
      <div><span className="eyebrow">GET IN TOUCH</span><h2>Tell us what you're working on.</h2><p className="muted">The contact details below are placeholders. Update them before publishing this website.</p></div>
      <div className="contact-card"><span className="card-index">EMAIL / 001</span><h3>{email}</h3><button className="button button-primary" onClick={copyEmail}>{copied ? 'Copied' : 'Copy email'} <span>↗</span></button><p className="small muted">Replace the placeholder address in <code>src/pages/Contact.jsx</code>.</p></div>
    </section>
  </>
}
