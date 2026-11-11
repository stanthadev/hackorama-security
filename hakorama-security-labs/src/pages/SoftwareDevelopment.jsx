import SectionHeading from '../components/SectionHeading'

const items = [
  ['Web applications','Responsive interfaces and practical browser-based tools.'],
  ['Backend APIs','Structured application services and API development.'],
  ['Secure coding','Applying sound development practices and security principles from the start.'],
  ['Application maintenance','Improving, documenting and maintaining existing software.'],
]

export default function SoftwareDevelopment() {
  return <>
    <PageHero eyebrow="SOFTWARE DEVELOPMENT" title={<>Ideas into useful<br /><span className="text-cyan">digital products.</span></>} text="We are interested in building clean, maintainable software that solves real problems and is designed with security in mind." />
    <section className="section container"><SectionHeading eyebrow="DEVELOPMENT CAPABILITIES" title="From interface to application logic." text="Our development direction includes modern frontend engineering and backend application development." /><div className="topic-grid">{items.map(([title, text], i) => <article className="topic-card" key={title}><span className="card-index">0{i+1} / CAPABILITY</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="tech-strip"><span>REACT</span><span>JAVASCRIPT</span><span>ASP.NET CORE</span><span>SQL</span><span>GIT</span></div></section>
  </>
}
function PageHero({ eyebrow, title, text }) { return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section> }
