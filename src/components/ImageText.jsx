
'use client'; 
import React from 'react'
// import text from '../Styles/textImage.module.css'; 
import text from '../Styles/ImageText.module.css';
import Image from 'next/image';
import moon from '../assets/moon.png'; 
// import textImg from '../Styles/textImage.module.css'; 

function ImageText() {
  return (
    <section className={text.textImage} >

      <div className={text.iconContainer} >
      </div>

      <Image
        src={moon}
        alt="Description of image" 
        width={500} 
        height={300} 
        className={text.image}
    >
    </Image>



      <div className={text.mainText} >
      We specialize in minimizing joint, muscle, and nerve pain longer. Our expert therapists are here to solve whatever issue you may be facing while decreasing tension in your muscles.
    </div>

    {/* Add in the header here  */}
    <h4 className={text.header} >
    Reduce Pain 
    </h4>

    {/* Add in the main text here  */}
    

    
  
    </section>
  ); 
}

export default ImageText; 