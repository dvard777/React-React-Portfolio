import React from 'react'
import developerImg from '../assets/developer.jpg'

function AboutMe() {
  return (
    <section style={{ padding: '1rem' }}>
      <h2>About Me</h2>
      <div className="profile-box">
        <img src={developerImg} alt="Developer" />
      </div>
      <p>
        Hello! I'm David Vardanyan, a passionate Full Stack Developer with a keen interest in creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I'm always eager to learn new technologies and improve my skills.
      </p>
    </section>
  )
}

export default AboutMe
