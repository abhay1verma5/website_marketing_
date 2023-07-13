import React from 'react'

import './Contactus.css'
const Contactus = () => {
  return (
    <div><div className='head_border21'> <h2 className='heading10'>Contact Us</h2></div>
    
    
            
      
       <form >
  

        <div class="container2">
          <label for="name"><b>Name</b></label>
          <  input type="text"  name="name" required/>
           <label for="emil"><b>Email</b></label>
          <input type="text"  name="email" required/>
           <label for="uname"><b>Subject</b></label>
          <input type="text" name="uname" required/>
          
      
          <label for="message"><b>Message</b></label>
          <input type="text"  name="message" required/>
              
          <button className ="buttonsend" type="submit">Send</button>
          
        </div>
       
        
      </form>
    
      </div>
  )
  
}

export default Contactus