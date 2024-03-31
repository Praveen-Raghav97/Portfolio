import React from 'react'
import './Services.css'
import mouse from '../../assets/mouse.png'
import cursor from '../../assets/Cursor1.png'
import File from '../../assets/File.png'
const Services = () => {
  return (
    <div className='services container'>
      
      <div className="cards">
       <img src={mouse} alt="" className='img-1' />
       <h2>WebSite Creation</h2>
       <p>I will build any kind of fully Responsive Website for your Business.
       </p>
      </div>
      
      
      <div className="cards">
      <img src={cursor} alt="" className='img-2' />
      <h2>Cusmtoization</h2>
      <p>I will do any customization
      for your prebuild HTML Website.</p>
      </div>
    
     
     <div className="cards">
        <img src={File} alt="" className='img-3' />
        <h2>File Conversion</h2>
        <p>I will convert PSD to HTML,
          Figma to HTML websites and
          vice versa.
          </p>
      </div>
     
     
    </div>
  )
}

export default Services
