import React from 'react'
import Back from '../../Components/Common/Back/Back'
import AboutCard from '../../Components/About/AboutCard'
import WspButton from '../WhatsappButton/WspButton'
import Nosotros from '../../Components/About/Nosotros'

const About = () => {
  return (
    <>
      <Back title = 'Nosotros'/>
      <Nosotros />
      <AboutCard />
      <WspButton />
    </>
  )
}

export default About
