import React from 'react'
import Back from '../../Components/Common/Back/Back'
import AboutCard from '../../Components/About/AboutCard'
import WspButton from '../WhatsappButton/WspButton'

const About = () => {
  return (
    <>
      <Back title = 'Nosotros'/>
      <AboutCard />
      <WspButton />
    </>
  )
}

export default About
