import React from 'react'
import Title from '../Common/Heading/title/Title'
import { homeAbout } from "../../dummydata"
// import AWrapper from './AWrapper'
import './about.css'

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className="container flexSB">
          <div className="left row">
            <img src="/images/OptimizedPhotos/about2.jpg" alt="" />
          </div>
          <div className='right row'>
            <Title subtitle='APRENDE MEJOR' title='Ventajas de estudiar con nosotros'/>
            <div className="items">
              {homeAbout.map((val) => {
                return (
                <div className='item flexSB'>
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              )
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <AWrapper /> */}
    </>
  )
}

export default AboutCard
