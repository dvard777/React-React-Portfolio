import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="nav-container">
      <NavLink 
        to="/about" 
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        About Me
      </NavLink>
      <NavLink 
        to="/portfolio" 
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Portfolio
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Contact
      </NavLink>
      <NavLink 
        to="/resume" 
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Resume
      </NavLink>
    </nav>
  )
}

export default Navigation
