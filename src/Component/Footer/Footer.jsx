import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
import gmail from '../../assets/gmailneon.png.png'
import instagram from '../../assets/instagramneon.png.png'
import linkedin from '../../assets/linkedInneon.png.png'
import github from '../../assets/githubneon2.png.png'
const Footer = () => {
  return (
    <div className='footer'>
      <ul  className='social-icon'>
        <li>
        <a href="https://mail.google.com/mail/u/0/?ogbl#inbox"> <img src={gmail} alt="" /></a>
        </li>
        <li>
        <a href="https://github.com/Praveen-Raghav97"><img src={github} alt="" /></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/praveen-raghav-7921362a6/"><img src={linkedin} alt="" /></a>
        </li>
        <li>
            <img src={instagram} alt="" />
        </li>
      </ul>
      <ul className="menu">
      <li><Link to='home' smooth ={true} offset ={-100} duration={800} >Home</Link></li>
      <li><Link to='services' smooth ={true} offset ={-330} duration={500} >Services</Link></li>
      <li><Link to='about' smooth ={true} offset ={-300} duration={800} >About</Link></li>
      <li><Link to='skills' smooth ={true} offset ={-170} duration={500}  >Skills </Link></li>
      <li><Link to='portfolio' smooth ={true} offset ={-200} duration={500} >Portfolio</Link></li>
      
      
      
    </ul>

    <p>Copyright © 2024 Praveen Raghav. All rights reserved.</p>

    </div>
  )
}

export default Footer
