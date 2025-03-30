import React from 'react'
import githubLogo from '../assets/GitHubDark.png'
import linkedinLogo from '../assets/linkedin-logo.png'
import stackOverflowLogo from '../assets/Stack_Overflow.png'

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem' }}>
      <p>© 2025 David Vardanyan</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '1rem' }}>
        <a href="https://github.com/dvard777" target="_blank" rel="noreferrer">
          <img src={githubLogo} alt="GitHub" style={{ width: '40px', height: '40px' }} />
        </a>
        <a href="https://www.linkedin.com/in/david-vardanyan-70a869359/" target="_blank" rel="noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" style={{ width: '40px', height: '40px' }} />
        </a>
        <a href="https://stackoverflow.com/users/30114319/david-vardanyan" target="_blank" rel="noreferrer">
          <img src={stackOverflowLogo} alt="Stack Overflow" style={{ width: '40px', height: '40px' }} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
