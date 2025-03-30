import React from 'react'

function Resume() {
  return (
    <section style={{ padding: '1rem', textAlign: 'center' }}>
      <h2>Resume</h2>
      <p>
        {/* Link to your resume file. Place the resume.pdf in your public folder */}
        <a href="/resume.pdf" download>Download My Resume</a>
      </p>
      <h3>Proficiencies</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>HTML/CSS</li>
        <li>JavaScript/ES6+</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL/NoSQL</li>
      </ul>
    </section>
  )
}

export default Resume
