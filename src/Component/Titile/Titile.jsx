import React from 'react'
import './Titile.css'
const Titile = ({subTitle,title}) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
      

    </div>
  )
}

export default Titile
