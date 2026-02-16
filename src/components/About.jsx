import { FaCode, FaChartLine, FaLightbulb } from 'react-icons/fa'
import './About.css'

function About({ t }) {
  const features = [
    {
      icon: <FaCode />,
      title: t.card1Title,
      description: t.card1Description
    },
    {
      icon: <FaChartLine />,
      title: t.card2Title,
      description: t.card2Description
    },
    {
      icon: <FaLightbulb />,
      title: t.card3Title,
      description: t.card3Description
    }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              {t.description}
            </p>
          </div>

          <div className="about-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
