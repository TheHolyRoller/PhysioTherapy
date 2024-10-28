
import React from 'react'
import c from '../Styles/CardTest.module.css'; 
import Image from 'next/image';
import plasma from '../assets/backrub.jpg'; 

import ct from '../Styles/CardTest.module.css'; 

import { useTranslations, useFormatter } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";




function CardTest() {


  const t = useTranslations("Common");



  return (
    <div class={c.card}>

    {/* Add in the image here  */}
    <Image className={ct.cardImage}  src={plasma} alt='alt' width={320} height={382}/>


    <div className={ct.textSection} >

      {/* Add in the header here  */}
    <h5 className={ct.textHeader} >


    {/* CardHeader */}
    {t("CardHeader")}
    {/* Background Overlays */}

    </h5>



    <div className={ct.textBlock}>

    {/* CardText */}
    {t("CardText")}
    {/* This card is for some special elements, like displaying background gifs on hover only */}

    </div>



    </div>
    

    
    
    
    </div>
  )
}

export default CardTest; 