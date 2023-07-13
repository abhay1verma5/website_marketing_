import React from 'react'
import './card2.css'
const Card2 = ({img,name,job,about}) => {
  return (
    <div class='pricebox5'> 
        <img src={img} className='image'></img>
       < h2 className='heading3'>{name}</h2> 
    <p className='para1'>{job}</p>
    <p className='para2'>{about}</p>

    <p className='para3'>Contact</p>
    </div>
  )
}

export default Card2