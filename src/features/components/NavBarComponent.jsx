import React from 'react'
import ThemeToggleComponent from './ThemeToggleComponent'

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a className="navbar-link" href="#home">Home</a>
        <a className="navbar-link" href="#skills">Skills</a>
        <a className="navbar-link" href="#projects">Projects</a>
        <a className="navbar-link" href="#contact">Contact</a>
      </div>
      <ThemeToggleComponent />
    </nav>
  )
}

export default NavbarComponent