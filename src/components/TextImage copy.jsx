
'use client'; 
import React from 'react'
import Image from 'next/image';
import moon from '../assets/moon.png'; 
import leaf from '../assets/45si9hbh.bmp'; 

import text from '../Styles/TextImage.module.css'; 

function TextImage() {
  return (
    <section className={text.textImage} >

      <div className={text.iconContainer} >

      {/* Icon  */}

      </div>

      <h4 className={text.header} >
    Prevent Risk of Injuries   
     </h4>


      <div className={text.mainText} >
    Life moves fast and your body should slow you down. Our treatment plan includes regular tune-ups so you can maintain your body and protect it from breaking down. 

    </div>
    
    
    
    <Image
        src={moon}
        alt="Description of image" 
        width={500} 
        height={300} 
        className={text.image}
        priority 
    >
    </Image>
    </section>
  ); 
}

export default TextImage