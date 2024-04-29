import React from 'react'
import './footer.css'
import { blog } from '../../../dummydata'
import { Link } from 'react-router-dom'

// Footer component

const Footer = () => {
  return (
    <>
      <section className="newsletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Subscribete para recibir noticias</h1>
            <span>¿Desseas recibir noticias y notificaciones sobre las actividades de la escuela?, Suscribete!!! </span>
          </div>
          <div className="right now">
            <input type="text" placeholder='Ingrese un email'/>
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>KIDS SCIENTIFIC PARKING</h1>
            <span>Educación online y presencial</span>
            <p>Bienvenido a nuestra escuela, donde ofrecemos una educación integral y transformadora en un ambiente seguro y acogedor. Nuestros maestros altamente capacitados brindan una educación de calidad tanto en línea como presencialmente, centrada en valores morales y espirituales.</p>
          </div>
          <div className="box link">
            <h3>Explorar</h3>
            <ul>
              {/* <li>Nosotros</li>
              <li>Nosotros</li>
              <li>Nosotros</li>
              <li>Nosotros</li>
              <li>Nosotros</li> */}
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
                <Link to="/team">Equipo</Link>
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
          </div>
          {/* <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Nosotros</li>
              <li>Nosotros</li>
              <li>Nosotros</li>
              <li>Nosotros</li>
              <li>Nosotros</li>
            </ul>
          </div> */}
          <div className="box">
            <h3>Últimos Posts</h3>
            {blog.slice(0, 3).map((val) => {
              return (
                <div className="items flexSB">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    {/* <span>
                      <i className='fa fa-user'></i>
                      <label htmlFor=''>{val.type}</label>
                    </span> */}
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    <h4>{val.title}</h4>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="box last">
            <h3>¿Tiene alguna pregunta?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Alborada 3era etapa
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                0967417783
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                <a href="mailto:yurgiles.ksparking@mcon.edu.ec" className='mail'>yurgiles.ksparking@mcon.edu.ec</a>
                {/* yurgiles.ksparking@mcon.edu.ec */}
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright 2024 Todos los Derechos Reservados | Made with <i className='fa fa-heart'></i> by MonkeyCity Studios</p>
      </div>
    </>
  )
}

export default Footer
