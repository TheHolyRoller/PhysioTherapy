
import React from 'react'
// import ft from '../Styles/Footer.module.css'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import f from '../Styles/Footer.module.css'; 

function Footer() {
  return (

    <div className="relative bottom-0 w-full text-center mt-auto" >

    <footer className={f.footer} >


    {/* Add in the phone number and email address here  */}
    <ul className={f.contactList} >

    <li className={f.phoneItem} >
    {/* Add in the phone icon here  */}
    <LocalPhoneIcon/> 
    <span className={f.phoneText} >

    {/* +355689299077 */}
    </span>


    </li>
    <li className={f.emailItem} >

    {/* Add in the email icon here */}
    <MailIcon/> 

    <span className={f.emailText} >

    {/* danielwakeley7@gmail.com */}
    </span>


    </li>




    </ul>
  


    {/* Add in the list  */}
    <ul className={f.iconList}> 
    <li className={`${f.tik} ${f.tik}`}>


    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 30 30">
    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z" fill='white'></path>
    </svg>


    </li>

    <li className={`${f.insta} ${f.insta}`} >
    
        <InstagramIcon style={{color: 'white'}} />

    </li>


    <li className={`${f.fb} ${f.fb}`}  >

    <FacebookIcon style={{color: 'white'}} /> 



    </li>
    </ul>

    {/* Add in the line here  */}
    <div className={f.line} ></div>


    </footer>
    </div>

  )
}

export default Footer