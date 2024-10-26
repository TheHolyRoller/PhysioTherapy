import React from 'react'

import p from '../Styles/Placement.module.css'; 
import DropDown from '../components/DropDown'; 



function Placement() {
  return (
    <div className={p.placer} style={{position: 'absolute', zIndex: '2000', }}  >

    <DropDown/> 


    </div>
  )
}

export default Placement