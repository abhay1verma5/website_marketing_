 import React, { useState } from 'react';
 //import { Slide } from 'react-slideshow-image';
 import 'react-slideshow-image/dist/styles.css';
 import './slide.css'
 import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
 import ArrowBackIcon from '@mui/icons-material/ArrowBack';
 const Slideshow = () => {
    const images = ["https://www.w3schools.com/w3images/coffee.jpg",
    "https://www.w3schools.com/w3images/workbench.jpg",
        "https://www.w3schools.com/w3images/sound.jpg"]
       const [image,setimage]=useState(images[0])
     
       const [button1,setbutton1]=useState("button1before active")
       const [button2,setbutton2]=useState("button2before")
       const [button3,setbutton3]=useState("button3before")
const onclickhandelerfor=()=>{
          
         
         if(images[0]===image)
         {
                setimage(images[1]);
                


                setbutton2("button2before active");
                setbutton1("button1before");
                setbutton3("button3before");
         }

         else if(images[1]===image)
              {
                setimage(images[2]);

                setbutton3("button3before active");
                setbutton1("button1before");
                setbutton2("button2before ");
            
           }

         else
         {   
          
            setimage(images[0]);  
            setbutton1("button1before active");
                setbutton2("button2before ");
                setbutton3("button3before") 
         }


      
          

}
 const onclickhandelerback=()=>{
          
         
    if(images[0]===image)
    {
           setimage(images[2]);
           setbutton3("button3before active");
                setbutton1("button1before");
                setbutton2("button2before ");
    }

     else if(images[1]===image)
         {
           setimage(images[0]);
           setbutton1("button1before active");
           setbutton2("button2before ");
           setbutton3("button3before") 
      }

     else
     {
       setimage(images[1]);   
       setbutton2("button2before active");
       setbutton1("button1before");
       setbutton3("button3before");
     }


 
     

 }
     return (
        <div className="main">  
      {/*  <div className="aa ">
           <img src={image[0]} ></img>
        
        </div>
        <div className="  ">
           <img src={image[1]}></img>
        
        </div>
        <div className="  ">
        <img src={image[2]}></img>
       
    </div>*/}

    <div className='market_image_slider'>  <h1 className="heading1"><b>MARKETING</b> </h1><p className='p1'>Templates by w3.css</p></div>
    <div className="">
           <img src={image}  ></img>
           <p className='image_name'>lorem ipsem</p>
        
        </div>
    
<div className='butto_n'>
   
 <ArrowBackIcon className='arrowback '   onClick={onclickhandelerback}></ArrowBackIcon>
<ArrowForwardIcon  className='arrowforward'  onClick={onclickhandelerfor}></ArrowForwardIcon>
<div  className='Button'>
    
    
    
    
<button  className={button1} onClick={()=>{
    setimage(images[0]);
    setbutton2("button2before ");
    setbutton3("button3before")

}} > </button>
<button className={button2}  onClick={()=>{
    setimage(images[1]);
    setbutton2("button2before active");
    setbutton1("button1before");
    setbutton3("button3before");
}}> </button > <button  className={button3}  onClick={()=>{
    setimage(images[2]);
    setbutton3("button3before active");
    setbutton1("button1before");
    setbutton2("button2before ");

}} > </button>



  </div></div>
      </div>
       
    );
};



  export default Slideshow;