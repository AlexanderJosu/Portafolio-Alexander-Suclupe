import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

function Projects({ t }) {
  const projects = [
    {
      title: t.project1.title,
      description: t.project1.description,
      technologies: t.project1.tags,
      github: null,
      demo: 'https://nutriscanu-frontend-v2-f6cghrgghtfgdqah.brazilsouth-01.azurewebsites.net/',
      featured: true
    },
    {
      title: t.project2.title,
      description: t.project2.description,
      technologies: t.project2.tags,
      github: null,
      demo: null,
      featured: true
    },
    {
      title: t.project3.title,
      description: t.project3.description,
      technologies: t.project3.tags,
      github: 'https://github.com/alexjosue2004/america-tvgo-landing',
      demo: 'https://alexjosue2004.github.io/america-tvgo-landing/',
      featured: true
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View on GitHub"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FaGithub /> {t.viewCode}
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FaExternalLinkAlt /> {t.viewDemo}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/*
        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a 
            href="https://github.com/Alexjosu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Visit my GitHub
          </a>
        </div>
        */}
      </div>
    </section>
  )
}

export default Projects
