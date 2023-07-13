import React from 'react';
import { Fragment } from 'react';
import ScrollButton from './ScrollButton';
import { Content, Heading } from './Styles';
import './footer.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { SocialIcon } from 'react-social-icons';
import { Icon } from 'semantic-ui-react'
import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, WhatsApp } from '@mui/icons-material';
import { Snackbar } from '@mui/material';
const Footer = () => {
  return (
    <div className='footer'>
    <h4>Footer</h4>
   
   
    <button class="btn success">< ArrowUpwardIcon  className='arrowup' ></ArrowUpwardIcon> 
      
     <Fragment> </Fragment>
    
  
  To the top</button>


    <div className='socialmedia'><Facebook/><Instagram/>
    <Pinterest/>
    <WhatsApp/>
    <Twitter/>
    <LinkedIn/>
    
    </div>
    <p className='w3css'>Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3css</a ></p>
    
    </div>
    
  )
}

export default Footer