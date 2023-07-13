import React from 'react'
import "./Body.css"
import Slideshow from '../component2/Slideshow'
import Page3 from '../component2/Page3';
import Page4 from '../component2/Page4';

import Contactus from '../component2/Contactus';
import Footer from '../component2/Footer';

const Body = () => {
  return (
    <div className='bod_y'> 
           
            <Slideshow ></Slideshow>
       <div className='head_border'> <h2 className='heading2'>What We Offer</h2> </div>

       <div className='dbfc'>
       
       <div className='box box1'><h2>Design</h2><p>Phasellus eget enim eu lectus faucibus ves
       tibulum. Suspendisse sodales pellentesque elementum.</p></div>
       <div className='box box2'><h2>Branding</h2><p>Phasellus eget enim eu lectus faucibus vest
       ibulum. Suspendisse sodales pellentesque elementum.</p></div>
       <div className='box box3'><h2>Consulation</h2><p>Consultation
       Phasellus eget enim eu lectus faucibus vest
       ibulum. Suspendisse sodales pellentesque elementum.</p></div>
       <div className='box box4'> <h2>Promises</h2><p>Phasellus eget enim eu lect
       us faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p></div>
         
       </div><Page3></Page3>
       <Page4></Page4>
      
       <Contactus></Contactus>
            <Footer></Footer>

       </div>
  )

}

export default Body