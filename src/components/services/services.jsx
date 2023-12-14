import React from 'react'
import './services.css'
import {FaAward} from 'react-icons/fa'

const services = () => {
  return (
    <section id = 'services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
      <div className="service__content">
          <div className="service__cards">
            <article className='service__card'>
              <FaAward className='service__icon'/>
              <h5>Experience</h5>
              <small>UI Design</small>
            </article>
            <article className='service__card'>
              <FaAward className='service__icon'/>
              <h5>Experience</h5>
              <small>Web Development</small>
            </article>
            <article className='service__card'>
              <FaAward className='service__icon'/>
              <h5>Proficient</h5>
              <small>SpringBoot Framework</small>
            </article>
            
           </div>
        </div>
      </div>
    </section>
  )
}

export default services
