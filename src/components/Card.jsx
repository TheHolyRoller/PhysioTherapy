
// 'use client';
import React from 'react'; 
import card from '../Styles/Card.module.css'; 
import Image from 'next/image';
import image from '../assets/moon.png';

function Card() {
  return (
    <section className={card.mainCard} >

    {/* Add in the image here */}

    <Image
        src={image}
        alt="Description of image" 
        width={500} 
        height={300} 
        className={card.image}>
        
    </Image>

    <div className={card.textSection}>

    <h5 className={card.cardHeader}>
    Groups

    </h5>

    <p className={card.cardText}>

    Renewal has a rich history spanning over 50 years and today is home to many people from across the Midlands. We are a dynamic, family church 
    </p>
        
    </div>

    </section>

  )
}

export default Card