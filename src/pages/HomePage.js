import React from 'react'
import Homenavbar from '../components/Homenavbar'
import HomeGrid from '../components/HomeGrid'

function HomePage() {
  return (
    <div className='HomePage'>
        <section>
        <Homenavbar location="Home"/>
        <HomeGrid/>
        </section>
    </div>
  )
}

export default HomePage