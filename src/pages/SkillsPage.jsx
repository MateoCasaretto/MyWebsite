import React from 'react'
import SkillCard from '../features/components/SkillCard'

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const skills = [
  { name: 'JavaScript', icon: `${DEVICON_BASE}/javascript/javascript-original.svg` },
  { name: 'React', icon: `${DEVICON_BASE}/react/react-original.svg` },
  { name: 'Java', icon: `${DEVICON_BASE}/java/java-original.svg` },
  { name: 'Node.js', icon: `${DEVICON_BASE}/nodejs/nodejs-original.svg` },
  { name: 'HTML5', icon: `${DEVICON_BASE}/html5/html5-original.svg` },
  { name: 'CSS3', icon: `${DEVICON_BASE}/css3/css3-original.svg` },
  { name: 'C#', icon: `${DEVICON_BASE}/csharp/csharp-original.svg` },
  { name: 'Git', icon: `${DEVICON_BASE}/git/git-original.svg` },
  { name: 'SQL', icon: `${DEVICON_BASE}/mysql/mysql-original.svg` },
  { name: 'MongoDB', icon: `${DEVICON_BASE}/mongodb/mongodb-original.svg` },
]

const SkillsPage = () => {
  return (
    <div className="skills-page" id="skills">
      <h2 className="skills-title">WHAT I DO</h2>
      <p className="skills-description">
        Full-stack developer with a broad range of skills across frontend, backend, and everything in between.
      </p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default SkillsPage
