import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon, FaGlobe, FaDownload, FaCode } from 'react-icons/fa'
import './Navbar.css'

function Navbar({ t, language, setLanguage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setScrollProgress(scrolled)

      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setDarkMode(false)
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      setDarkMode(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !darkMode
    setDarkMode(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light')
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#about', label: t.about },
    { href: '#skills', label: t.skills },
    { href: '#projects', label: t.projects },
    { href: '#contact', label: t.contact }
  ]

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <div className="nav-logo-section">
          <a href="#home" className="nav-logo">
            <div className="nav-logo-icon">
              <FaCode />
            </div>
            <h2 className="nav-logo-text">
              AS<span className="dot">.</span>
            </h2>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                onClick={handleLinkClick}
                className={activeSection === link.href.substring(1) ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <button 
            className="nav-icon-btn"
            onClick={toggleLanguage}
            aria-label="Switch language"
          >
            <FaGlobe />
          </button>
          
          <button 
            className="nav-icon-btn theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <a
            href={`${import.meta.env.BASE_URL}${language === 'es' ? 'Alexander_Josue_Suclupe_Paucar_CV_es_2.pdf' : 'Alexander_Josue_Suclupe_Paucar_CV_en.pdf'}`}
            download={language === 'es' ? 'Alexander_Josue_Suclupe_Paucar_CV_es_2.pdf' : 'Alexander_Josue_Suclupe_Paucar_CV_en.pdf'}
            className="btn-resume"
          >
            {t.resume}
          </a>

          <button 
            className="nav-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                onClick={handleLinkClick}
                className={activeSection === link.href.substring(1) ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
