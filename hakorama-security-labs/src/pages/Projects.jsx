import SectionHeading from '../components/SectionHeading'

export default function Projects() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">SELECTED WORK</span><h1>Learning by <span className="text-cyan">building.</span></h1><p>A home for experiments, software projects and documented learning. We will add verified work here as projects are completed.</p></div></section>
    <section className="section container"><SectionHeading eyebrow="PORTFOLIO" title="Projects will appear here." text="This section is intentionally prepared for real work rather than invented client case studies." /><div className="empty-state"><span className="empty-icon">⌘</span><h3>Portfolio in progress</h3><p>Check back as we publish project write-ups, technical notes and demonstrations.</p></div></section>
  </>
}
