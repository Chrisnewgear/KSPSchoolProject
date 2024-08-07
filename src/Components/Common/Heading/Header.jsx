import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () =>{
    const [click, setClick] = useState(false)
  return(
    <>
      <header>
      <Head/>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Nuestra Metodología</Link>
            </li>
            <li>
              <Link to="/about">Nosotros</Link>
            </li>
            <li>
              <Link to="/team">Docentes</Link>
            </li>
            <li>
              <Link to="/payment">Pagos</Link>
            </li>
            <li>
              <Link to="/blog">Actividades</Link>
            </li>
            <li>
              <Link to="/contact">Contactos</Link>
            </li>
          </ul>
          <Link to="/about" className="start">
            {/* <div > */}
              <div className="button">Descubre tu potencial</div>
            {/* </div> */}
          </Link>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header