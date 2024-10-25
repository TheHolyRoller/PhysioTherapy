
import React from 'react'
import c from '../Styles/CardTest.module.css'; 
import Image from 'next/image';
import plasma from '../assets/backrub.jpg'; 

import ct from '../Styles/CardTest.module.css'; 

function CardTest() {





  return (
    <div class={c.card}>

    {/* Add in the image here  */}
    <Image className={ct.cardImage}  src={plasma} alt='alt' width={320} height={382}/>

    



    {/* Add in the text section here  */}
    <div className={ct.textSection} >

      {/* Add in the header here  */}
    <h5 className={ct.textHeader} >

    Background Overlays



    </h5>



    <div className={ct.textBlock} >

    This card is for some special elements, like displaying background gifs on hover only

    </div>



    </div>
    

    
    
    
    </div>
  )
}

export default CardTest; 