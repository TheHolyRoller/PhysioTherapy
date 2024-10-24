'use client';
import {useState} from 'react'; 
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/BankLogo.png'; 
import n from '../Styles/NewFooter.module.css'; 
// Import the icons here 
// import {  FaInstagram, FaFacebook } from 'react-icons/fa';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';

import Tooltip from '@mui/material/Tooltip';
// import { error } from 'console';

function NewFooter() {



  // Add in the copy to clipboard function here 

  const [tooltipOpen, setTooltipOpen] = useState(false); 




  const clipboard = (details) => {


    // Take the object that is passed in as an argument and extract it's value
    navigator.clipboard.writeText(details).then(() => {


      // Set the tool is open state variable to false here 
      setTooltipOpen(true); // Show the tooltip
      setTimeout(() => {
        setTooltipOpen(false); // Hide the tooltip after 2 seconds
      }, 1000);


      // alert('Copied to clipboard!'); 
      console.log('text copied to clipboard'); 



    }).catch((err) => {

      console.error('failed to copy to clipboard! \n' + err); 



    })


  }



  return (

    <footer className={n.footer} >
    
    {/* Add in my personal Branding here    */}

    <div className={n.socialHandle} >
        
    <span className={n.atSpan} >
    ©
    </span>

    <span className={n.dateSpan} >
    2024  
    </span>
    BlackRock
    </div>


    {/* Add in the Logo here  */}
    <div className={n.logoContainer} >  

    {/* make these dimensions responsive */}
    <Image src={Logo} alt='LOGO' width={190} height={180} className={n.logo} /> 

    </div>


    
    

    {/* Add in the Icon List here  */}
    <ul className={n.iconList} >

    <li className={n.tikTok} >
    {/* Add in the tik tok Icon here  */}
    {/* <FaTikTok/>  */}

    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30">
    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z" fill='white'></path>
    </svg>


    </li>
    <li className={n.instagram} >
    {/* Add in the instagram icon here  */}
    <InstagramIcon style={{fontSize: '2.2rem'}} /> 

    </li>
    <li className={n.facebook} >
    {/* Add in the facebook icon here */}
    <FacebookIcon style={{fontSize: '2.2rem'}} /> 

    </li>
    <li  className={n.phoneNumber} >
    {/* Add in the phone Number Icon here  */}
    {/* Add in the call functionality and the clipboard jacking here  */}

    {/* Add an onclick function call here to copy the number to the clipboard */}
    {/* onClose={() => setTooltipOpen(false)} */}
    <Tooltip className={n.phoneNumToolTip}  title={tooltipOpen ? 'Copied!' : '+355689299077'} arrow open={tooltipOpen}  >
    <Tooltip title='+355689299077' >


    {/*  */}
    <a className={n.phoneNumLink} href="tel:+355689299077"   onClick={() => clipboard('+355689299077')} >

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="30" height="30">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</svg>
    </a>
    </Tooltip>

    </Tooltip>


    </li>
    <li className={n.email}>
    {/* Add in the email icon here  */}
    {/* Add in the email functionality here and the clipboard jacking functionality here */}

    

    <MailIcon style={{fontSize: '2.4rem'}} />

    </li>

    </ul>
    
    </footer>
  )
}

export default NewFooter; 
