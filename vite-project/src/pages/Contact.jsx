import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    if (!value.trim()) {
      setErrors(prev => ({ ...prev, [name]: 'This field is required' }))
    } else {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    if (name === 'email' && value.trim()) {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      if (!isValidEmail) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }))
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted! (No backend implemented yet)')
  }

  return (
    <section style={{ padding: '1rem' }}>
      <h2>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}

        <button type="submit" style={{ marginTop: '1rem' }}>Send</button>
      </form>
    </section>
  )
}

export default Contact
