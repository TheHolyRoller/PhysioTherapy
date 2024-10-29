
// 'use client';
import React from 'react'
import te from '../Styles/TextElement.module.css'; 
import Image from 'next/image';
import plasma from '../assets/plasma.jpg'; 

// import { useState, useEffect } from 'react';

import { useTranslations, useFormatter } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
// Import use Media query from material UI 
// import useMediaQuery from '@mui/material/useMediaQuery';

// import useMediaQuery from '../hooks/useMediaQuery'; 
// import { transform } from 'next/dist/build/swc';





function TextElement() {

  // const isMobile = useMediaQuery('(max-width: 768px)');

// Define styles conditionally based on isMobile
// const styles = {
//   container: {
//     position: 'relative',
//     zIndex: '20000',
//     marginTop: '2px',
//     backgroundColor: "#0b0d18"
//   },
//   image: {
//     width: isMobile ? '90vw' : '25%',
//     marginTop: isMobile ? '5%' : '14%',
//     borderRadius: '10px',
//     outline: '0px solid lime',
//     position: 'relative',
//     left: '50%',
//     transform: 'translate(-50%, -50%)'
//   },
//   header: {
//     color: 'white',
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     fontSize: isMobile ? '1.5rem' : '1.7rem'
//   },
//   textSection: {
//     color: 'white',
//     outline: '4px solid lime',
//     position: 'absolute',
//     left: '50%',
//     top: '70%',
//     transform: 'translate(-50%, -50%)',
//     width: isMobile ? '80vw' : '20vw'
//   }
// };


  const t = useTranslations("Common");

  return (


<section className={te.textElement} style={{position: 'relative', zIndex:'20000', marginTop: '2px', backgroundColor: "#0b0d18"}} >

    {/* Add in the image here  */}

    <div className={te.imageContainer}>


    <Image src={plasma} alt='shape' width={500} height={500} className={te.plasmaImage}  />

    </div>

    {/* Add in the text Section here  */}
    <div className={te.textSectionContainer}>
    {/* Add in the header here  */}


    {/* style={{color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize:'1.7rem'}} */}
    <h3 className={te.header}  >

    {/* TextHeader */}
    {t("TextHeader")}

    {/* The Ligō Device    */}

    </h3>





{/* style={{color: 'white', outline: '0px solid lime', position: 'absolute', left: '50%', top: '70%', transform: 'translate(-50%, -50%)', width: '20vw' }} */}
   
    <div className={te.textSection}  >


    {t("TextElemBlock")}


    {/* The Ligō device comprises a printhead mounted on a robotic arm, printing control systems and a printable biomaterial matrix. The Ligō prints tiny droplets containing the patient’s skin cells and biomaterial to create a new layer of skin where it has been damaged. */}

    </div>


    </div>
    
    </section>
  )
}

export default TextElement; 