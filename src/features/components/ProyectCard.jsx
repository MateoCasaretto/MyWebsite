import React from 'react'

const ProyectCard = ({ proyect }) => {
  return (
    <div className="proyect-card">
      <div className="proyect-card-body">
        <h3 className="proyect-card-title">{proyect.name}</h3>
        <p className="proyect-card-description">
          {proyect.description || 'No description provided.'}
        </p>

        <div className="proyect-card-footer">
          {proyect.language && <span className="proyect-card-language">{proyect.language}</span>}
          {proyect.stargazers_count > 0 && (
            <span className="proyect-card-stars">★ {proyect.stargazers_count}</span>
          )}
        </div>

        <a
          className="proyect-card-link"
          href={proyect.html_url}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </div>
  )
}

export default ProyectCard
