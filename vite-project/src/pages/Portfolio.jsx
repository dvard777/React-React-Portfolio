import React from 'react'
import Project from '../components/Project'
import projectImage1 from '../assets/project1.png'
import projectImage2 from '../assets/project2.png'

function Portfolio() {
  const projects = [
    {
      title: 'Project One',
      image: projectImage1,
      deployedLink: 'https://example.com/project-one',
      repoLink: 'https://github.com/yourusername/project-one'
    },
    {
      title: 'Project Two',
      image: projectImage2,
      deployedLink: 'https://example.com/project-two',
      repoLink: 'https://github.com/yourusername/project-two'
    },
    // Add additional projects as needed.
  ]

  return (
    <section style={{ padding: '1rem' }}>
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((proj) => (
          <Project
            key={proj.title}
            title={proj.title}
            image={proj.image}
            deployedLink={proj.deployedLink}
            repoLink={proj.repoLink}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
