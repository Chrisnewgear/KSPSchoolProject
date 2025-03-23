import React from 'react'
import Hero from './hero/Hero'
// import Hero2 from './hero2/Hero2'
import AboutCard from '../About/AboutCard'
// import HAbout from './HAbout'
import Testimonal from './testimonal/Testimonal'
import HBlog from './Hblog'
// import Hprice from './Hprice'
import WspButton from '../WhatsappButton/WspButton'
import { blog } from '../../dummydata';

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Hero2 /> */}
      <AboutCard />
      {/* <HAbout /> */}
      <Testimonal />
      {/* <Hblog /> */}

      <HBlog blogs={blog} />
      {/* <Hprice /> */}
      <WspButton />
    </>
  )
}

export default Home
