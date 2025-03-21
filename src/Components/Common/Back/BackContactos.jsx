import React from 'react'
import {useLocation} from "react-router-dom"

const Back = ({title}) => {
  const location = useLocation()
  return (
    <div>
      <section className='backContactos'>
        <h2>Inicio / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className="margin"></div>
    </div>
  )
}

export default Back
