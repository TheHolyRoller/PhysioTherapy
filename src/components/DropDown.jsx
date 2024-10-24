
  'use client';
  import React, { use, useState } from 'react'
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




  function DropDown() {


    const [isRotated, setRotated] = useState(true); 

    const [flagCode, setCode] = useState('AL'); 
   
  const handleCaretClick = () => {


  setRotated(!isRotated); 


  }


  const handleFlagClick = (code) =>{




  }


  const navigateToPage = (code, page) => {
    
    setCode(code);
    setRotated(!isRotated);
    // router.push(page); 
    //  Programmatically navigates to the specified route
  };







    return (
      <>
    

      <label className='label' style={{opacity: '0'}} >
      Language 
      </label>
    
        <div className="dropDown" >

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



  {/* Make this dynamic */}
      <Flag code={flagCode} style={{ width: '30px', height: 'auto', outline:'0px solid lime' }}/>

      </div>


      {/* Add in the list here  */}
      <div className={`list ${isRotated ? 'noList' : ''}`}>

      <div className='listOption' >
      <Link href="/it" passHref>
      {/* onClick={() => navigateToPage('AL')} */}
          <Flag code="AL" className='al'   style={{ width: '30px', height: 'auto' }}/>
        </Link>
        </div>
        
        
        <div className='listOption' >
        {/* <Link href={'/fr'} >

        </Link> */}
          <Flag code="IT" className='it' onClick={() => navigateToPage('IT','/en')}  style={{ width: '30px', height: 'auto' }}/>
        </div>

        <div className='listOption'>
        {/* Add in the Links here */}
  {/* onClick={() => handleFlagClick('GR')} */}
        <Link href="/en"  >
        
              </Link>

          <Flag code="GR" className='fr'  style={{ width: '30px', height: 'auto', outline: '0px solid lime' }}  />

        </div>


        

      </div>
          

      </div>
      </>

    )
  }

  export default DropDown