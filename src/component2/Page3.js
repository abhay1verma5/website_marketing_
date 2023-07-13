import React from 'react'
import './Page3.css'
import {data}  from "./Data3"
import Card from './Card'
const Page3 = () => {
  return (
    <div className='card'><div className='price_heading'> <h1 className='heading7'>Pricing Plans</h1><p >Choose a pricing plan that
     fits your needs.</p></div  >

      <div className='price_cards_page5'>   {data.map((key)=> ( <Card   data={key} />
              
     ) )}
     </div>


    
     </div>
  )
}

export default Page3