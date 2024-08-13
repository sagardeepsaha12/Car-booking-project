import React from 'react'
import Banners from '@/_components/Banners'
const Ourfleet = () => {
  return (
    <div> 
        <Banners 
        img="our-fleet-banner.jpg"
        title="Our fleet"
        text="Whether you’re after pure luxury or a high capacity transporter, we have a vehicle for any occasion. What will you choose?"/>
    <div className='relative'>
        <Insights isform={false}/>
    </div>
    </div>
  )
}

export default Ourfleet