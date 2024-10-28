
import React from 'react'
import c from '../Styles/CTA.module.css'; 
import bg from '../assets/therapy.bmp'; 
import ph from '../assets/backrub.jpg';
import r from '../assets/physioright.jpg';
import ts from '../assets/tesst.jpg'; 
import Image from 'next/image';
import Footer from './Footer';



import { useTranslations, useFormatter } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";



function CTA() {
  
  const t = useTranslations("Common");
  
  
  
  return (
    <section className={c.CTA} >

<Image
        src={bg}
        alt="Description of image" 
        width={500} 
        height={300} 
        className={c.image}
    >
    </Image>

    <h4 className={c.header} >

    {/* CTAText */}
    {t("CTAText")}

    {/* Book your next Therapy Session  */}

    </h4>

    {/* Add in the button here  */}
    
    <button className={c.button} >

    {/* CTABook */}
    {t("CTABook")}
    {/* BOOK NOW     */}

    </button>


    </section>
  )
}

export default CTA