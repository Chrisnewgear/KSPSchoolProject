import React from 'react'
import Title from '../Common/Heading/title/Title'
import Hero from './hero/Hero'

const Home = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
              <Title subtitle='BIENVENIDOS A KSP SCHOOL' title='La mejor educación' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi rerum, dolores dignissimos facere esse nihil doloribus quasi illum soluta. Animi eos numquam fugiat beatae sed magni dolor ipsam eum officiis?</p>
            <div className='button'>
              <button className='primary-btn'>
                CONTACTANOS <i className='fa fa-long-arrow-alt-right'></i>
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

export default Home
