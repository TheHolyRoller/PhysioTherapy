// 'use client';
import InternationalShowcase from "@/components/InternationalShowcase";
import { useTranslations } from "next-intl";
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
import Card from '../../component/blocks/cards-demo-2'; 
import Footer from '../../components/Footer'; 
import FeatureBlock from '../../components/FeatureBlock'; 
import DropDown from "@/components/DropDown";
import NewFooter from '../../components/NewFooter';

// import Carousel from '../../components/Carousel'; 

// Import the static assets here 
import img from '../../assets/BankLogo.png'
import { Hidden } from "@mui/material";
// import '../../Styles/Slider.css'; 



function RootLocalePage({ params: { locale } }: any) {
    // This method is suggested by the next intl docs
    unstable_setRequestLocale(locale);

    



    return (
      
      // Workout how to abstract this into a Dropdown menu 
      <>
      {/* Add in the Footer Here */}

      <div style={{marginLeft: '-0px', marginBottom: '-1rem', overflowX:'hidden' }} >


      {/* <Nav  />  */}

      <Hero/> 
      
      <div className="transContainer" style={{position: 'fixed', right: '1%', top: '0%', marginTop: '-0.7rem', zIndex: '2000'}} >
      <DropDown/> 
      </div>

      {/* <Hero/> */}
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


      <div className="newFooter" style={{marginTop: '-13rem', outline: '4px solid lime', height: 'auto'}}  >
      <NewFooter/> 
        </div>      
   
      </div>
      {/* <InternationalShowcase /> */}

    </>

);
}

export default RootLocalePage;
