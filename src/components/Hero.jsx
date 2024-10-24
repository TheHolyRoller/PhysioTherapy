
'use client';
import React from 'react'; 
import leaf from '../assets/45si9hbh.bmp'; 
import style from '../Styles/Hero.module.css'; 
import Image from 'next/image';
import SVG from '../assets/WebScroll.svg'; 


function Hero() {
  return (
    <section className={style.hero} >

    {/* Add in the image here  */}
    

    <div className={style.heroContainer} >
    
    

    <Image
        src={leaf}
        alt="Description of image" 
        width={500} 
        height={300} 
        className={style.image}
    >
    

    
    </Image>

    {/* Add in the logo here  */}
    <h1 className={style.logo}>

    Inventia 

    <span className={style.logoText} >
        Skin
    </span>

    </h1>


    <h2 className={style.strapLine} >
    Transforming skin regeneration
    </h2>

    <button className={style.cta} >
    Book an Appointment 
    </button>

    {/* Add in the SVG here  */}
    <div className={style.svgContainer} >

    <Image
        src={SVG}
        alt="Description of image" 
        width={500} 
        height={300} 
        className={style.svg}
    >
    </Image>

    </div>


    </div>

    </section>
  )
}

export default Hero