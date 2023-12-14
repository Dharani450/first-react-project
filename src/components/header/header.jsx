import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../asset/Dm1.png'
import HeaderSocials from './headersocials'
function header() {
  return (
    <header>
      <div className='container header__container'>
            <h5>Hi,I am</h5>
            <h1>Dharanidharan</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <CTA />
            <HeaderSocials />
            <div className='me'>
              <img src={ME}alt='me'/>
            </div>
            <a href='#contact'className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default header
