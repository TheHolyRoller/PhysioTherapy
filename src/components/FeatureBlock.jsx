
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
// import physio from '../../assets/physiotherapy.jpg'; 
// import physio from '../assets/physiotherapy.jpg';
import physio from '../assets/physio.jpg';
import fb from '../Styles/FeatureBlock.module.css'; 


import { useTranslations, useFormatter } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";




function FeatureBlock() {


  const t = useTranslations("Common");


  return (

    <div className={fb.mainContainer} >

    <section className={fb.featureBlock}>
    
    {/* Add in the image here  */}
    <Image src={physio} alt='physio' width={500} height={700} className={fb.image} ></Image>



    <div className={fb.textSection} >

    <h3 className={fb.header} >

    {/* DoctorName */}
    {t("DoctorName")}

    {/* Brian Coan, MD FACS */}

    </h3>

    <div className={fb.firstTextBlock} >

    {/* FeatureBlockHeader */}
    {t("FeatureBlockHeader")}
    {/* Award Winning, Nationally Recognized Double Board-Certified Plastic Surgeon */}


    </div>

    <div className={fb.secondTextBlock} >

    {/* FeatureBlockText */}
    {t("FeatureBlockText")}
    {/* Dr. Brian S. Coan is an award-winning, nationally renowned, double board-certified Plastic Surgeon and a member of the distinguished Fellow of the American College of Surgeons (FACS).  */}

    </div>

    {/* Add in a booking button here  */}
    <button className={fb.book} >

    {/* FeatureBook */}
    {t("FeatureBook")}
    {/* Book Now  */}

    </button>

    </div>
    
    </section>

    </div>

  );
}

export default FeatureBlock