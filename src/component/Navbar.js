import React from 'react'
import { NavLink } from 'react-router-dom'
 import './Navbar.css'
const Navbar = () => {
  return (
    <div  className='navbar'>

   
    
   <NavLink className="navlink"  to='/'><p className='para4'>Home</p ></NavLink>
  <NavLink className="navlink" to='/Plans'><p className='para4'>Plans</p></NavLink>
  <NavLink  className="navlink" to='/About'><p className='para4'>About</p></NavLink>
  <NavLink className="navlink" to='/Contact'><p className='para4'>Contact</p></NavLink>
    
   

    </div>
  
    
     
   
  )
}

export default Navbar