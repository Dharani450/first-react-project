import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {BiUserPin} from 'react-icons/bi'
import {AiFillBook} from 'react-icons/ai'
import {AiFillCustomerService} from 'react-icons/ai'
import {MdOutlineContactPhone} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active':''}><ImHome /></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><BiUserPin /></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}><AiFillBook /></a>
      <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active':''}><AiFillCustomerService /></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><MdOutlineContactPhone /></a>
    </nav>
  )
}

export default Nav
