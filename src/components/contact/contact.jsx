import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
            <article className='contact__option'>
              <MdEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>dharanidharan570@gmail.com</h5>
              <a href='mailto:dharanidharan570@gmail.com'>Send a message</a>
            </article>
            <article className='contact__option'>
              <BsMessenger className='contact__option-icon' />
              <h4>Messenger</h4>
              <h5>Dharani_dharan</h5>
              <a href=''>Send a message</a>
            </article>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>9790143051</h5>
              <a href='https://api.whatsapp.com/send?phone+9790143051'>Send a message</a>
            </article>
        </div>
        {/*End of Contact Option*/}
        <form action="">
          <input type='text' name='Name' placeholder='Your Full Name' required/>
          <input type='email' name='Email' placeholder='Your Email Address' required/>
          <textarea name='message'  rows='10' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact
