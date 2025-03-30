import React from 'react'

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noreferrer">
        <img src={image} alt={`${title} screenshot`} style={{ width: '200px' }} />
      </a>
      <p>
        <a href={deployedLink} target="_blank" rel="noreferrer">
          Deployed App
        </a>{' '}
        |{' '}
        <a href={repoLink} target="_blank" rel="noreferrer">
          GitHub Repo
        </a>
      </p>
    </div>
  )
}

export default Project
