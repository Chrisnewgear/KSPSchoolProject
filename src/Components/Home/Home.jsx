import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../About/AboutCard'
// import HAbout from './HAbout'
import Testimonal from './testimonal/Testimonal'
import Hblog from './Hblog'
// import Hprice from './Hprice'
import WspButton from '../WhatsappButton/WspButton'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      {/* <HAbout /> */}
      <Testimonal />
      <Hblog />
      {/* <Hprice /> */}
      <WspButton />
    </>
  )
}

export default Home
