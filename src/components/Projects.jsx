import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

function Projects({ t }) {
  const [visibleProjects, setVisibleProjects] = useState(3)
  const projects = [
    {
      title: t.project1.title,
      description: t.project1.description,
      technologies: t.project1.tags,
      githubRepos: [
        { name: 'Backend', url: 'https://github.com/NutriScanU/nutriscanu-backend' },
        { name: 'ML Service', url: 'https://github.com/NutriScanU/nutriscanu-ml-service' },
        { name: 'Frontend', url: 'https://github.com/NutriScanU/nutriscanu-frontend' }
      ],
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
    },
    {
      title: t.project4.title,
      description: t.project4.description,
      technologies: t.project4.tags,
      github: 'https://github.com/AlexanderJosu/Tarea',
      demo: null,
      featured: true
    }
  ]

  const handleViewMore = () => {
    setVisibleProjects(prev => prev + 3)
    setTimeout(() => {
      window.scrollBy({
        top: 400,
        behavior: 'smooth'
      })
    }, 100)
  }

  const handleViewLess = () => {
    setVisibleProjects(3)
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 100)
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="projects-grid">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.githubRepos ? (
                    project.githubRepos.map((repo, idx) => (
                      <a 
                        key={idx}
                        href={repo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View ${repo.name} on GitHub`}
                        className="project-link"
                        title={repo.name}
                      >
                        <FaGithub />
                      </a>
                    ))
                  ) : project.github ? (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View on GitHub"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                  ) : null}
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
                {project.githubRepos ? (
                  project.githubRepos.map((repo, idx) => (
                    <a 
                      key={idx}
                      href={repo.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <FaGithub /> {repo.name}
                    </a>
                  ))
                ) : project.github ? (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FaGithub /> {t.viewCode}
                  </a>
                ) : null}
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
        
        <div className="projects-view-more">
          {visibleProjects < projects.length && (
            <button onClick={handleViewMore} className="btn-view-more">
              {t.viewMore}
            </button>
          )}
          {visibleProjects > 3 && (
            <button onClick={handleViewLess} className="btn-view-less">
              {t.viewLess}
            </button>
          )}
        </div>
        {/*
        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a 
            href="https://github.com/AlexanderJosu" 
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
