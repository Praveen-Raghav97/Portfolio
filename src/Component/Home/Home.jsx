import React from 'react'
import './Home.css'
import { Link } from 'react-scroll'
import  Typewriter from 'typewriter-effect';
import gmail from '../../assets/gmailneon.png.png'
import instagram from '../../assets/instagramneon.png.png'
import linkedin from '../../assets/linkedInneon.png.png'
import github from '../../assets/githubneon2.png.png'
import hand_icon from '../../assets/hand_icon.png'
import dp from '../../assets/dp.jpg'

import img2 from '../../assets/pic4.png'

const Home = () => {

  return (
    <div className='home '>
      <div className="home-left">
         <div className="text">
          <h3>Hi, I'Am <img src={hand_icon} alt="" className='hand-icon' /> </h3>
          <h2>Praveen Raghav</h2>
          <h4>  <Typewriter 
              options={{
                autoStart:true,
                loop:true,
                delay:80, 
               
                strings:[ "Frontend Developer.","Backend Developer.","Fullstack Developer."]

              
              }}>
            </Typewriter> 
            <span> 

           
              </span>
            </h4>
          <p> A <span>Full-Stack Developer</span> passionate about creating intaractive <br />
          application and experience on the web. </p>      
         </div>
         <div className="button">
         <a href="https://1drv.ms/w/c/1ed9373212ab47a7/EXwkUi4bFypOk7FGa53sOwsBgxHtk-BTceyIy1GYdacwhw?e=T8I9IY"><button className='btn dark-btn'>Resume</button></a>
          
          <Link to='portfolio' smooth ={true} offset ={-100} duration={500} ><button className='btn dark-btn'>My Work</button></Link>
          
         </div>
         <div className="links">
          <div className="link">
            <img src={instagram} alt="" />
          </div>
          <div className="link">
            <a href="https://mail.google.com/mail/u/0/?ogbl#inbox"> <img src={gmail} alt="" /></a>
          </div>
          <div className="link">
            <a href="https://github.com/Praveen-Raghav97"><img src={github} alt="" /></a>
            
          </div>
          <div className="link">
            <a href="https://www.linkedin.com/in/praveen-raghav-7921362a6/"><img src={linkedin} alt="" /></a>
            
          </div>
         </div>
         
      </div>
      <div className="home-right">
       <img src={img2} alt="" />
      </div>
    </div>
  )
}

export default Home
