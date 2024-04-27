import React from 'react'
import Title from '../../Common/Heading/title/Title'
import { Link } from 'react-router-dom'

import "./hero.css"
const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
              <Title subtitle='BIENVENIDOS A KSP SCHOOL' title='Educación de Calidad' />
            <p>Bienvenido a nuestra escuela, donde ofrecemos una educación integral y transformadora en un ambiente seguro y acogedor. Nuestros maestros altamente capacitados brindan una educación de calidad tanto en línea como presencialmente, centrada en valores morales y espirituales.</p>
            <div className='button'>
              <button className='primary-btn'>
              <Link to="/contact">CONTACTANOS</Link> <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                SISTEMA DE ENSEÑANZA <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
