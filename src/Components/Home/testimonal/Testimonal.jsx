import React from 'react'
import Title from '../../Common/Heading/title/Title'
import {testimonal} from '../../../dummydata'
import './testimonal.css'

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className="container">
          <Title subtitle='testimonios' title='Lo que dicen nuestros estudiantes'/>
            <div className="content grid2">
              {testimonal.map((val) => (
                <div className="items shadow">
                  <div className="box flex">
                    <div className="img">
                      <img src={val.cover} alt="" />
                      <i className="fa fa-quote-left icon"></i>
                    </div>
                    <div className="name">
                      <h2>{val.name}</h2>
                      <span>{val.post}</span>
                    </div>
                  </div>
                  <p>{val.desc}</p>
                </div>
              ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
