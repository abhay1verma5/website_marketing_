import React from 'react'
    import './Card.css'

const Card = (props) => {
    let  data=props.data; 
  return ( 
    <div class='pricebox1'> <div><p className='heading3card'> {data.heading}</p></div>
    <p className='storage'>{data.storage}</p>
    <p className='storage'>{data.email}</p>
    <p className='storage'>{data.domain}</p>
    <p className='storage'>{data.support}</p>
    <p className='rupee '>{data.rupee}<br></br><span className='span1'>per month</span></p>
    <div className='signup_border'><button className='signup' >Sign up</button></div>   
       
    
    </div>
    
   )
}


export default Card