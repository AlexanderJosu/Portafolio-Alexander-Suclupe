import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import './Footer.css'

function Footer({ t }) {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaGithub />, 
      href: 'https://github.com/AlexanderJosu',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />, 
      href: 'https://www.linkedin.com/in/alexanderjosuesuclupepaucar/',
      label: 'LinkedIn'
    },
    {
      icon: <FaEnvelope />, 
      href: 'mailto:alexanderjosuesuclupepaucar@gmail.com',
      label: 'Email'
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>AS.</h3>
            <p>{t.tagline}</p>
          </div>
          <div className="footer-social">
            <h4>Conecta</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} Alexander Josue Suclupe Paucar.</p>
          <p className="footer-credit">
            {t.builtWith} <FaHeart className="heart" /> React & Vite
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
