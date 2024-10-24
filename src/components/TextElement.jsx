
'use client';
import React from 'react'
import t from '../Styles/TextElement.module.css'; 
import Image from 'next/image';
import plasma from '../assets/plasma.jpg'; 

function TextElement() {
  return (



    <section className={t.textElement}>

    {/* Add in the image here  */}
    <Image src={plasma} alt='shape' width={1500} height={500} className={t.plasmaImage}  />

    {/* Add in the text Section here  */}
    <div className={t.textSectionContainer}>
    {/* Add in the header here  */}
    <h3 className={t.header}>
    The Ligō Device   

    </h3>

    {/* Add in the main text here  */}
    <div className={t.textSection}>
    The Ligō device comprises a printhead mounted on a robotic arm, printing control systems and a printable biomaterial matrix. The Ligō prints tiny droplets containing the patient’s skin cells and biomaterial to create a new layer of skin where it has been damaged.

    </div>


    </div>
    
    </section>
  )
}

export default TextElement; 