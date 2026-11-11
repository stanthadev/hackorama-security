import SectionHeading from '../components/SectionHeading'

export default function TechnologySolutions() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">TECHNOLOGY SOLUTIONS</span><h1>Practical support for<br /><span className="text-cyan">everyday technology.</span></h1><p>Helping people make informed technology decisions and get more from the tools they use.</p></div></section>
    <section className="section container"><SectionHeading eyebrow="OUR INTERESTS" title="Technology that works for people." text="This division brings together practical IT knowledge, digital guidance and technology support." /><div className="topic-grid"><article className="topic-card"><span className="card-index">01 / GUIDANCE</span><h3>Technology advice</h3><p>Helping individuals and businesses understand technology options and make considered decisions.</p></article><article className="topic-card"><span className="card-index">02 / SUPPORT</span><h3>IT support</h3><p>General technology troubleshooting, setup guidance and digital productivity support.</p></article><article className="topic-card"><span className="card-index">03 / EDUCATION</span><h3>Digital education</h3><p>Sharing accessible explanations that help people use technology with confidence.</p></article></div></section>
  </>
}
