
  'use client';
  import React, { useEffect, useRef, useState } from 'react'
  // Import the SVG flags here 
  import AL from '../assets/al.svg'; 
  import FR from '../assets/fr.svg'; 
  import GR from '../assets/gr.svg'; 
  import IT from '../assets/it.svg'; 
  import ESP from '../assets/es.svg'; 
  import Germany from '../assets/de.svg'; 

  import Caret from '../assets/Caret.svg'; 
  import { ChevronDown } from 'lucide-react';
  import Link from 'next/link';
  import { useRouter } from 'next/router';  // Use Next.js useRouter
  import Image from 'next/image';
  import Flag from 'react-world-flags';
  import '../Styles/DropDown.css'; 


  import { useTranslations, useFormatter } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";


  function DropDown() {


    const [isRotated, setRotated] = useState(true); 

    const [flagCode, setCode] = useState('AL'); 

    const menuRef = useRef(null);

    useEffect(() => {
      const handleClick = (event) => {
        // Check if click is outside of the menu
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          console.log('Clicked outside, closing menu');
          setRotated(true);
        }
      };
    
      // Add event listener on component mount
      document.addEventListener('mousedown', handleClick);
    
      // Clean up the event listener on unmount
      return () => {
        document.removeEventListener('mousedown', handleClick);
      };
    }, [isRotated]); // Empty dependency array ensures this runs only once
    

   
  const handleCaretClick = () => {


  setRotated(!isRotated); 

  console.log('this is the value of rotated \n' + isRotated); 
  


  }


  const handleFlagClick = (code) =>{




  }


  const navigateToPage = (code, page) => {
    
    setCode(code);
    setRotated(!isRotated);



  };



  const t = useTranslations("Common");




    return (
      <>
    

      <label className='label' style={{opacity: '0'}} >
      Language 
      </label>
    
        <div className="dropDown" ref={menuRef} >


        {/* Add in the text to be translated here */}
        {/* <div style={{outline: '30px solid lime', position: 'absolute', top: '0', left: '50%', zIndex: '200000'}} >

        <h1>
        <p>{t("cardText")}</p>
        </h1>



        </div> */}



      {/* Add in the dynamic class here  */}
      <div className={`caret-container ${isRotated ? 'rotate' : ''}`} // Rotate container
        onClick={handleCaretClick} >
        
      <ChevronDown 
        className='caret'
        // Use base class
        onClick={handleCaretClick} 

        /> 
      </div>

      {/* Add in the flag and text here */}

      <div className='defaultOption' >

      <Flag code={flagCode} style={{ width: '30px', height: 'auto', outline:'0px solid lime' }}/>


      </div>


      {/* Add in the list here  */}
      <div className={`list ${isRotated ? 'noList' : ''}`}>

      <div className='listOption' >
      <Link href="/es" passHref>
      {/* onClick={() => navigateToPage('AL')} */}
          <Flag code="AL" className='al' onClick={() => navigateToPage('AL', '/en')}   style={{ width: '30px', height: 'auto' }}/>
        </Link>
        </div>


        
        <div className='listOption' >
        {/* <Link href={'/fr'} >

        </Link> */}
          <Flag code="IT" className='it' onClick={() => navigateToPage('IT','/en')}  style={{ width: '30px', height: 'auto' }}/>
        </div>

        <div className='listOption'>



        <Link href="/es"  >
          <Flag code="GR" className='fr'  onClick={() => navigateToPage('GR','/en')}  style={{ width: '30px', height: 'auto', outline: '0px solid lime' }}/>
              </Link>

        </div>


        

      </div>
          

      </div>
      </>

    )
  }

  export default DropDown