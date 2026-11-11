import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Cybersecurity from './pages/Cybersecurity'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import TechnologySolutions from './pages/TechnologySolutions'
import Projects from './pages/Projects'
import Insights from './pages/Insights'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/technology-solutions" element={<TechnologySolutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function NotFound() {
  return (
    <section className="section container not-found">
      <span className="eyebrow">404 — PAGE NOT FOUND</span>
      <h1>This page isn't in our system.</h1>
      <p>It may have moved, or the address may be incorrect.</p>
      <a className="button button-primary" href="/">Return home</a>
    </section>
  )
}
