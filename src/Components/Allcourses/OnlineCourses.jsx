import React from 'react'
import Title from '../Common/Heading/title/Title'
import { online } from '../../dummydata'

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className="container">
          <Title subtitle="Asignaturas Impartidas" title="Todas las asignaturas"/>

          <div className="content grid3">
            {online.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt="" />
                  <img src={val.hoverCover} alt="" className='show'/>
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.courseName}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
