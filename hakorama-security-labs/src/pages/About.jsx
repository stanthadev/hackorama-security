import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <PageIntro eyebrow="ABOUT HACKORAMA" title={<>Curiosity is our starting point.<br /><span className="text-cyan">Responsibility is our standard.</span></>} intro="Hackorama Security Labs is an emerging technology initiative focused on software development, cybersecurity learning and practical digital solutions." >
      <section className="section container">
        <div className="about-grid">
          <article className="info-panel"><span className="eyebrow">OUR MISSION</span><h2>Make technology more useful and more secure.</h2><p>To develop practical technology solutions, grow cybersecurity knowledge and encourage responsible digital practices for individuals and organizations.</p></article>
          <article className="info-panel"><span className="eyebrow">OUR VISION</span><h2>Contribute to a safer digital future.</h2><p>To grow into a trusted technology company known for thoughtful software, security-minded development and continuous learning across Africa and beyond.</p></article>
        </div>
        <SectionHeading eyebrow="OUR PRINCIPLES" title="The standards behind the work." />
        <div className="values-grid">
          {['Integrity','Continuous learning','Confidentiality','Responsible practice','Innovation','Quality'].map((value, i) => <div className="value-item" key={value}><span>0{i+1}</span><h3>{value}</h3></div>)}
        </div>
      </section>
    </PageIntro>
  )
}

function PageIntro({ eyebrow, title, intro, children }) {
  return <><section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div></section>{children}</>
}
