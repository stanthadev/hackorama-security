import SectionHeading from '../components/SectionHeading'

export default function Insights() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">RESEARCH & INSIGHTS</span><h1>Understand more.<br /><span className="text-cyan">Build better.</span></h1><p>Notes, explainers and learning resources on software engineering, cybersecurity and technology.</p></div></section>
    <section className="section container"><SectionHeading eyebrow="THE KNOWLEDGE BASE" title="Ideas worth sharing." text="We will publish original articles and learning notes as our research and experience grow." /><div className="empty-state"><span className="empty-icon">✳</span><h3>First articles are in development</h3><p>Future topics may include secure APIs, web security fundamentals, software architecture and digital safety.</p></div></section>
  </>
}
