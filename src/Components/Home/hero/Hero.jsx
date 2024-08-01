import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../Common/Heading/title/Title'
// import { Link } from 'react-router-dom'
// import PrimaryBtn from '../../Common/Buttons/PrimaryBtn'
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
              <Title subtitle='BIENVENIDOS A KIDS SCIENTIFIC PARKING' title='Educación de Calidad' />
            <p>Bienvenido a nuestra centro de tutorías, donde ofrecemos una educación integral y transformadora en un ambiente seguro y acogedor. Nuestros maestros altamente capacitados brindan una educación de calidad tanto en línea como presencialmente, centrada en valores morales y espirituales.</p>
            <div className='button'>
              <Link to="/contact" >
                <button className='primary-btn'>
                  CONTACTANOS <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </Link>

              <Link to="/courses" >
                <button>
                  SISTEMA DE ENSEÑANZA <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
