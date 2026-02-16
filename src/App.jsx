import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { translations } from './translations'
import './App.css'

function App() {
  const [language, setLanguage] = useState('es') // Default Spanish
  const t = translations[language]

  return (
    <div className="app">
      <Navbar t={t.nav} language={language} setLanguage={setLanguage} />
      <Hero t={t.hero} />
      <About t={t.about} />
      <Skills t={t.skills} />
      <Projects t={t.projects} />
      <Contact t={t.contact} />
      <Footer t={t.footer} />
    </div>
  )
}

export default App
