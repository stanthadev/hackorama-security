import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const topics = [
  ['Security awareness','Clear, practical guidance that helps people recognize common digital risks.'],
  ['Application security','Learning and applying secure design principles for web applications and APIs.'],
  ['Defensive security','Understanding monitoring, safer configurations and basic security operations.'],
  ['Authorized assessments','A future service area focused on scoped, permission-based security reviews.'],
]

export default function Cybersecurity() {
  return <>
    <PageHero eyebrow="CYBERSECURITY" title={<>A safer digital world<br /><span className="text-cyan">starts with good practice.</span></>} text="We focus on security knowledge, responsible research and practical ways to improve digital resilience." />
    <section className="section container">
      <SectionHeading eyebrow="AREAS OF FOCUS" title="Security is a process, not a product." text="Our cybersecurity practice is developing alongside formal study, hands-on labs and continuous research." />
      <div className="topic-grid">{topics.map(([title, text], i) => <article className="topic-card" key={title}><span className="card-index">0{i+1} / FOCUS</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="notice"><strong>Responsible security:</strong> Any testing or assessment must have clear written authorization, a defined scope and agreed safeguards. We do not test systems without permission.</div>
      <Link className="text-link" to="/contact">Discuss a security learning or awareness project <span>→</span></Link>
    </section>
  </>
}

function PageHero({ eyebrow, title, text }) { return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section> }
