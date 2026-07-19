import React from 'react'

const AboutMeComponent = () => {
  return (
    <div className="about-me">
      <h2 className="about-me-title">MATEO CASARETTO</h2>
      <p className="about-me-text">
        I'm a Junior Full-Stack Developer passionate about building web
        applications that are clean, intuitive, and reliable. Currently
        studying Information Technology at ORT University, I'm constantly
        learning and improving my skills in both frontend and backend
        development. I enjoy solving problems, exploring new technologies,
        and transforming ideas into real-world applications.
      </p>
      <div className="cta-buttons">
        <a className="download-cv-button" href="/cv.pdf" download>
          Download CV
        </a>
        <a className="see-projects-button" href="/cv.pdf">
          See Projects
        </a>
      </div>
    </div>
  )
}

export default AboutMeComponent
