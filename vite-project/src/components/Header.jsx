import React from 'react'
import Navigation from './Navigation'
import './Header.css'  // Create this CSS file for Header-specific styles

function Header() {
  return (
    <header className="header">
      <h1>David Vardanyan - Full Stack Developer</h1>
      <Navigation />
    </header>
  )
}

export default Header
