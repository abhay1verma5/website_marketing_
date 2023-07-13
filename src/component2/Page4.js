import React from 'react'
 import "./page4.css"
//import {data}  from "./Data3";
import Card2 from './Card2';
const Page4 = () => {
  return (
    <div className='page4_border'>  <div className='head_border1'> <h2 className='heading9'>Who We Are</h2> </div>
    
    <div className='price_cards_page9'>     <Card2 img={"https://www.w3schools.com/w3images/team1.jpg"} name={'Jane Doe'} job={'CEO&Founder'} about={'Phasellus eget enimee eulectus faucibus vestibulum . Suspendisse sodales pellentesque elementum'}/>
    <Card2 img={"https://www.w3schools.com/w3images/team2.jpg"} name={'Mike Ross'} job={'Art Director'} about={'Phasellus eget  enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'}/>
    <Card2 img={"https://www.w3schools.com/w3images/team3.jpg"} name={'John Doe'} job={'Designer'} about={'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'}/>
    
               
  
    </div></div>
  )
}

export default Page4