import React from 'react'
import './Portfolio.css'
import back_icon from '../../assets/back-icon.png'
import next_icon from '../../assets/next-icon.png'
import e_icon from '../../assets/8344.jpg'
import E_commerce from '../../assets/E-Commerce.png'
import Collage_web from '../../assets/Collage-Website.png'
import Food_web from '../../assets/Food-Website.png'
import Gemini from '../../assets/gemini.png'
import Netflix_Clone from '../../assets/NETFLIX-CLONE.png'
import { useRef } from 'react'
const Portfolio = () => {

  const slider =  useRef();
  let tx = 0;
  const slideForward = ()=>{
    if(tx < 0){
      tx+=20;

  }
      slider.current.style.transform =`translateX(${tx}%)`;

  }
  const slideBackward = () =>{
    if(tx > -75){
      tx-=20;

  }
      
      slider.current.style.transform =`translateX(${tx}%)`;

  }
  return (
    <div className='portfolio'>
      <img src={back_icon} alt="" className='back-btn'  onClick={slideForward}/>
      <img src={next_icon}alt=""  className='next-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}> 
        <li>
            <div className="slide">
              <img src={Netflix_Clone} alt="" />
              <div className='Project-info'>
                <h3>Netflix-Clone</h3>
                <span>--OTT-PLATEFORM--</span>
                <p>Building a Netflix clone using React.js and Firebase Authentication involves creating a dynamic, responsive web application that mimics the popular streaming service. </p>
                </div>
              <div className="button">
                <a href="https://netflix-clone-git-main-praveen-raghavs-projects.vercel.app/"><button className='btn dark-btn'> Live Preview</button></a>
               <a href="https://github.com/Praveen-Raghav97/Netflix-Clone"><button className=' btn dark-btn'> Source Code</button></a> 
             
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={E_commerce} alt="" />
              <div className='Project-info'>
                <h3>System Clothing</h3>
                <span>--E-Commerce--</span>
                <p>E-commerce websites built using React.js offer a dynamic and efficient platform for online shopping. Leveraging React.js's component-based architecture, developers can create modular and reusable UI elements. </p>
                </div>
              <div className="button">
                <button className='btn dark-btn'> Live Preview</button>
                <button className=' btn dark-btn'> Source Code</button>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={Collage_web} alt="" />
              <div className='Project-info'>
                <h3>Collage-Website</h3>
                <span>--Education--</span>
                <p>
Creating a collage web application using React.js involves structuring components to display images in a visually appealing arrangement. First, you'll need to set up your React environment and create components for the collage layout. You can use CSS Grid or Flexbox for the layout design.</p>
                </div>
              <div className="button">
                <a href="https://praveenraghavcollage.vercel.app/"><button className='btn dark-btn'> Live Preview</button></a>
                
                <a href="https://github.com/Praveen-Raghav97/Collage-Website.git"><button className=' btn dark-btn'> Source Code</button></a>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={Food_web} alt="" />
              <div className='Project-info'>
                <h3>Food-Website</h3>
                <span>---Food---</span>
                <p>
A food website built using React JS offers a dynamic and immersive experience for culinary enthusiasts. Leveraging React's component-based architecture, developers can create a seamless user interface with features like interactive recipe displays, search functionality</p>
                </div>
              <div className="button">
               
                <a href="https://food-website-one-bay.vercel.app/"><button className='btn dark-btn'> Live Preview</button> </a>
                <a href="https://github.com/Praveen-Raghav97/Food-Website"><button className='btn dark-btn'> Source Code</button> </a>
               
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={Gemini} alt="" />
              <div className='Project-info'>
                <h3>Gemini-Ai</h3>
                <span>Gemini-Clone</span>
                <p>
Gemini Clone by Rect is a sophisticated software solution tailored for cloning and replicating digital assets across multiple platforms with precision and efficiency. Engineered with meticulous attention to detai.</p>
                </div>
              <div className="button">
                <a href="https://gemini-ai-bypraveenraghav-vert.vercel.app/"><button className='btn dark-btn'> Live Preview</button></a>
                <a href="https://github.com/Praveen-Raghav97/gemini-ai"><button className='btn dark-btn'> Source Code</button></a>
                
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Portfolio
