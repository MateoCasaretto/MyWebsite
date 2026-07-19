import React from 'react'

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <img className="skill-card-icon" src={skill.icon} alt={skill.name} />
      <p className="skill-card-name">{skill.name}</p>
    </div>
  )
}

export default SkillCard
