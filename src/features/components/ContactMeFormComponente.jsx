import React, { useRef, useState } from 'react'
import axios from 'axios'

const ContactMeFormComponente = () => {
  const form = useRef()
  
  const [status, setStatus] = useState('idle')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      template_params: {
        user_name: form.current.user_name.value,
        user_email: form.current.user_email.value,
        message: form.current.message.value,
      },
    })
    .then((response) => {
      console.log('SUCCESS!', response.status, response.data)
      setStatus('success')
      form.current.reset()
    })
    .catch((error) => {
      console.log('FAILED...', error)
      setStatus('error')
    })
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h2 className="contact-form-title">CONTACT ME</h2>

      <div className="form-field">
        <label htmlFor="user_name">Name</label>
        <input id="user_name" type="text" name="user_name" required />
      </div>

      <div className="form-field">
        <label htmlFor="user_email">Email</label>
        <input id="user_email" type="email" name="user_email" required />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required />
      </div>

      <button type="submit" className="contact-submit-button" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>

      {status === 'success' && (
        <p className="form-status form-status-success">Message sent successfully.</p>
      )}
      {status === 'error' && (
        <p className="form-status form-status-error">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}

export default ContactMeFormComponente
