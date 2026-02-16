import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

function Contact({ t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    
    window.location.href = `mailto:alexanderjosuesuclupepaucar@gmail.com?subject=${subject}&body=${body}`
    
    setStatus('Opening your email client...')
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setStatus('')
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: t.email,
      value: 'alexanderjosuesuclupepaucar@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=alexanderjosuesuclupepaucar@gmail.com'
    },
    {
      icon: <FaGithub />,
      title: t.github,
      value: '@Alexjosu',
      link: 'https://github.com/Alexjosu'
    },
    {
      icon: <FaLinkedin />,
      title: t.linkedin,
      value: 'Alexander Suclupe',
      link: 'https://www.linkedin.com/in/alexanderjosuesuclupepaucar/'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-outer">
        <div className="contact-inner">
          <div className="contact-left">
            <h2 className="section-title">{t.title}</h2>
            <p className="section-subtitle">{t.description}</p>
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="info-card"
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-details">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t.formName}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.formName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t.formEmail}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.formMessage}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t.formMessage}
                  rows={5}
                />
              </div>
              <button type="submit" className="btn-primary">
                <FaPaperPlane style={{ marginRight: '8px' }} /> {t.formSend}
              </button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
