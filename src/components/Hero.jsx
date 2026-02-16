import { useState, useEffect } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import './Hero.css'

function Hero({ t }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = t.subtitle

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 80)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  // Calculate real stats dynamically
  const calculateYearsExperience = () => {
    const startDate = new Date('2024-03-01') // Marzo 2024
    const today = new Date()
    const diffMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + 
                       (today.getMonth() - startDate.getMonth())
    return Math.floor(diffMonths / 12) || 1 // At least 1 year to show
  }

  const realStats = {
    experience: calculateYearsExperience(),
    projects: 3, // NutriScan, Diabetes Prediction, América tvGO (actualiza este número manualmente cuando agregues proyectos)
    technologies: 37 // Total de skills en tu portfolio (JavaScript, Python, Java, C#, .NET, HTML, CSS, React, Angular, Node.js, Express, Flask, Spring Boot, MySQL, PostgreSQL, SQL Server, MongoDB, Pandas, Scikit-learn, Jupyter, Git, Docker, Postman, Swagger, Linux, Azure, AWS, Android Studio, etc.)
  }

  const [stats, setStats] = useState({
    experience: 0,
    projects: 0,
    technologies: 0
  })

  useEffect(() => {
    const targets = realStats
    const duration = 2000
    const steps = 60
    const increment = {
      experience: targets.experience / steps,
      projects: targets.projects / steps,
      technologies: targets.technologies / steps
    }

    let currentStep = 0
    const interval = setInterval(() => {
      if (currentStep < steps) {
        setStats({
          experience: Math.min(Math.ceil(increment.experience * currentStep), targets.experience),
          projects: Math.min(Math.ceil(increment.projects * currentStep), targets.projects),
          technologies: Math.min(Math.ceil(increment.technologies * currentStep), targets.technologies)
        })
        currentStep++
      } else {
        clearInterval(interval)
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-greeting">{t.greeting}</h1>
          <h2 className="hero-title">
            <span className="hero-title-dark">{t.title1}</span>
            <br />
            <span className="hero-title-gradient">{t.title2}</span>
          </h2>
          <p className="hero-subtitle">
            {displayText}
          </p>
          <p className="hero-description">
            {t.description}
          </p>
          <div className="hero-tech">
            <span>REACT</span>
            <span>NODE.JS</span>
            <span>PYTHON</span>
            <span>MACHINE LEARNING</span>
            <span>AZURE</span>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">{stats.experience}+</div>
              <div className="stat-label">{t.stats.experience}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.projects}+</div>
              <div className="stat-label">{t.stats.projects}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.technologies}+</div>
              <div className="stat-label">{t.stats.technologies}</div>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              {t.viewProjects}
            </a>
            <a href="#contact" className="btn-secondary">
              {t.letsTalk}
            </a>
          </div>
        </div>
      </div>
      <a href="#about" className="hero-scroll" aria-label="Scroll down">
        <FaArrowDown />
      </a>
    </section>
  )
}

export default Hero
