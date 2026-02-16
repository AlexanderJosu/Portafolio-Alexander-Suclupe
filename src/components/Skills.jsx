import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaDatabase,
  FaCloud,
  FaTerminal,
  FaAngular,
  FaEye,
  FaJava,
  FaAws,
  FaLinux,
  FaCode
} from 'react-icons/fa'
import { 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiPostgresql,
  SiPandas,
  SiScikitlearn,
  SiJupyter,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiGitlab,
  SiFlask,
  SiAndroidstudio,
  SiPostman,
  SiSwagger,
  SiSpring,
  SiDotnet,
  SiVuedotjs
} from 'react-icons/si'
import { DiMsqlServer } from 'react-icons/di'
import './Skills.css'

function Skills({ t }) {
  const skillCategories = [
    {
      title: t.languages,
      subtitle: 'Core Languages',
      skills: [
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'Java', icon: <FaJava />, color: '#007396' },
        { name: 'C#', icon: <FaCode />, color: '#239120' },
        { name: '.NET', icon: <SiDotnet />, color: '#512BD4' }
      ]
    },
    {
      title: t.frontend,
      subtitle: 'Client Side',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
        { name: 'Angular', icon: <FaAngular />, color: '#DD0031' },
        { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' }
      ]
    },
    {
      title: t.backend,
      subtitle: 'Server Side & APIs',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
        { name: 'Flask', icon: <SiFlask />, color: '#000000' },
        { name: 'Spring Boot', icon: <SiSpring />, color: '#6DB33F' },
        { name: 'REST APIs', icon: <FaDatabase />, color: '#3B82F6' },
        { name: 'JWT Auth', icon: <FaDatabase />, color: '#FB015B' }
      ]
    },
    {
      title: t.database,
      subtitle: 'SQL & NoSQL',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'Microsoft SQL Server', icon: <DiMsqlServer />, color: '#CC2927' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' }
      ]
    },
    {
      title: t.dataML,
      subtitle: 'Data Science & Machine Learning',
      skills: [
        { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, color: '#F7931E' },
        { name: 'Jupyter', icon: <SiJupyter />, color: '#F37626' },
        { name: 'Tesseract OCR', icon: <FaEye />, color: '#4B8BBE' }
      ]
    },
    {
      title: t.tools,
      subtitle: 'Development Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
        { name: 'GitLab', icon: <SiGitlab />, color: '#FC6D26' },
        { name: 'Git Bash', icon: <FaTerminal />, color: '#4EAA25' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
        { name: 'Swagger', icon: <SiSwagger />, color: '#85EA2D' },
        { name: 'Linux', icon: <FaLinux />, color: '#FCC624' },
        { name: 'Azure', icon: <FaCloud />, color: '#0078D4' },
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
        { name: 'Android Studio', icon: <SiAndroidstudio />, color: '#3DDC84' }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <h3>{category.title}</h3>
                <p>{category.subtitle}</p>
              </div>
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
