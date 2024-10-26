// 'use client';
import InternationalShowcase from "@/components/InternationalShowcase";
import { useTranslations, useFormatter } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { useNavigate } from 'react-router-dom';

import Nav from '../../components/Nav'; 
import Hero from '../../components/Hero'; 
import TextElement from '../../components/TextElement'; 
// import Card from '../../components/Card'; 
import CTA from '../../components/CTA'; 
import Slider from '../../components/Slider'; 
import ImageText from '../../components/ImageText'; 
import Footer from '../../components/Footer'; 
import FeatureBlock from '../../components/FeatureBlock'; 
import DropDown from "@/components/DropDown";
import NewFooter from '../../components/NewFooter';
import Card from '../../components/CardTest'; 


import img from '../../assets/BankLogo.png'
// import { Hidden } from "@mui/material";

import CardTest from '../../components/CardTest'; 
import CardRender from '../../components/CardRender'; 
import Placement from '../../components/Placement'; 
// Import the 


// import { useState } from "react";




function RootLocalePage({ params: { locale } }: any) {
    // This method is suggested by the next intl docs
    unstable_setRequestLocale(locale);


    // Add in the state variable here 

    // const [isMobile, setIsMobile] = useState(false); 
    const t = useTranslations("Common");

   


    // Add in the styles here 
    const styles = {






    }

    



    return (
      
      // Workout how to abstract this into a Dropdown menu 
      <>
      {/* Add in the Footer Here */}

   



      {/* <CardTest/> */}

      <Hero/> 
      
      {/* style={{position: 'fixed', right: '1%', top: '0%', marginTop: '-0.7rem', zIndex: '2000'}} */}
      <div className="transContainer"  >

      <Placement/> 

      {/* <h1 className="text-xl font-bold" style={{color: 'white'}} >{t("title")}</h1> */}



      </div>
      <div style={{marginTop:'-6px', outline: '0px solid lime', zIndex: '12', overflow: 'hidden' }} >

      <TextElement/> 
      </div>
      <div className='sliderContainer' style={{position: 'relative', paddingTop: '56vmin', overflowX: 'scroll', maxWidth:'100vw'}} >
      <Slider/> 

      </div>

      <FeatureBlock/> 
      <div style={{marginBottom: '-2rem', overflow:'hidden', color: 'white'}} >

      <CTA/> 

      </div>


      <div style={{marginBottom: '-4rem'}} >

      <CardRender/> 

      </div>


      <div className="newFooter" style={{marginTop: '-13rem', outline: '0px solid lime', height: 'auto'}}  >
      <NewFooter/> 
        </div>      
   


      <InternationalShowcase />




    </>

);
}

export default RootLocalePage;
