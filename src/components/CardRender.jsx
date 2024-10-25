import React from 'react'
import Card from '../components/CardTest'; 
import cr from '../Styles/CardRender.module.css'; 

function CardRender() {
  return (


    // Create the grid container here 
    <div className={cr.cardGrid}>


    <Card/> 
    <Card/> 
    <Card/> 
    <Card/> 



    </div>
  )
}

export default CardRender