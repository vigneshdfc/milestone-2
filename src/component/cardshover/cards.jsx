import { useState } from 'react'
import './Cards.css'
import React from 'react'

import bestService from './imgs/best_service.jpg'
import comfortable from './imgs/com_fortable.jpg'
import ontime from'./imgs/on_time.jpg'
import secured from'./imgs/secured_data.jpg' 
import time from'./imgs/time_saving.jpg'
import validprice from'./imgs/value_price.jpg'

const Images=()=>{
  const benefits=[{image:bestService,title:"Best Service",
  text:"Good customers want Good quality service.Great customers want it even more."},
  {image:comfortable,title:"Comfortable Offline Service",
  text:"Sometimes you just need to go offline and get your life right."},
  {image:ontime,title:"Ontime Processing",
  text:"Trust the process your time is coming.Just do the work and the results will handle thems elves. "},
  {image:secured,title:"Secured data",
  text:"Personal info is like money value it.Protect it."},
  {image:time,title:"Time Saving",
  text:"Time is not the main thing.It's the only thing."},
  {image:validprice,title:"valid Price",
  text:"Price is what you pay value is what you get."}]

   
const renderImages=benefits.map((benefit)=>{
  
  
  return(
    <div className='benefit_card' style={{background:`url(${benefit.image })`, backgroundSize: 'cover',backgroundImage:'Transparent',}}>
 

 <div className="appp">
      
 <h2>{benefit.title}</h2>
 <p>{benefit.text}</p>
</div>


</div>
  )

}
)
 return (
    <React.Fragment>
      
      <div className='benefit_section'>
        {renderImages}
      </div>
      
    </React.Fragment>
    
  )
 }

export default Images;