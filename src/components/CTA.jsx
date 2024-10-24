
import React from 'react'
import c from '../Styles/CTA.module.css'; 
import bg from '../assets/therapy.bmp'; 
import ph from '../assets/backrub.jpg';
import r from '../assets/physioright.jpg';
import ts from '../assets/tesst.jpg'; 
import Image from 'next/image';
import Footer from './Footer';



function CTA() {
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


    Book your next
    Therapy Session 

    </h4>

    {/* Add in the button here  */}
    
    <button className={c.button} >

    BOOK NOW    

    </button>

    <div className='' style={{marginBottom: '-0px'}} >


    {/* <Footer/>  */}
    </div>
    

    </section>
  )
}

export default CTA