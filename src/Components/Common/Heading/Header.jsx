// import React, { useState } from "react"
// import Head from "./Head"
// import "./header.css"
// import { Link } from 'react-router-dom'

// const Header = () =>{
//     const [click, setClick] = useState(false)
//   return(
//     <>
//       <header>
//       <Head/>
//         <nav className="flexSB">
//           <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/courses">Nuestra Metodología</Link>
//             </li>
//             <li>
//               <Link to="/about">Nosotros</Link>
//             </li>
//             <li>
//               <Link to="/team">Docentes</Link>
//             </li>
//             <li>
//               <Link to="/payment">Pagos</Link>
//             </li>
//             <li>
//               <Link to="/blog">Actividades</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contactos</Link>
//             </li>
//           </ul>
//           <Link to="/about" className="start">
//             {/* <div > */}
//               <div className="button">Descubre tu potencial</div>
//             {/* </div> */}
//           </Link>
//           <button className="toggle" onClick={() => setClick(!click)}>
//             {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
//           </button>
//         </nav>
//       </header>
//     </>
//   )
// }

// export default Header

import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const [click, setClick] = useState(false)
    const location = useLocation();
    
    // Función para determinar si el enlace está activo
    const isActive = (path) => {
        return location.pathname === path;
    }
    
    return (
        <>
            <header>
                <Head/>
                <nav className="flexSB">
                    <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
                        <li>
                            <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                        </li>
                        <li>
                            <Link to="/courses" className={isActive('/courses') ? 'active' : ''}>Nuestra Metodología</Link>
                        </li>
                        <li>
                            <Link to="/about" className={isActive('/about') ? 'active' : ''}>Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/team" className={isActive('/team') ? 'active' : ''}>Docentes</Link>
                        </li>
                        <li>
                            <Link to="/payment" className={isActive('/payment') ? 'active' : ''}>Pagos</Link>
                        </li>
                        <li>
                            <Link to="/blog" className={isActive('/blog') ? 'active' : ''}>Actividades</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contactos</Link>
                        </li>
                    </ul>
                    <Link to="/about" className="start">
                        <div className="button">Descubre tu potencial</div>
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