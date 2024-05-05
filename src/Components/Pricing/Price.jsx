import React from 'react'
import Back from '../Common/Back/Back'
import PriceCard from './PriceCard'
import Faq from './Faq'
import WspButton from '../WhatsappButton/WspButton'
import './price.css'

const Price = () => {
  return (
  <>
    <Back title='Formas de pago'/>
    <section className="price padding">
      <div className="container grid">
        <PriceCard />
      </div>
      <div className='promos'>
        <h2>Más Promos</h2>
        <p className='paraghraph'>Por matriculas de más de 3 niños en adelante <span>$200.00</span>. Matrícula diferida <span>$30.00</span> agregados a la mensualidad normal</p>
      </div>
      <div className='promos'>
        <h2>RECARGOS</h2>
        <p className='paraghraph'>Todas las mensualidades suben el <span>10%</span> a partir del mes adeudado y no tendrán acceso a la plataforma. <span>A partir del cuarto mes adeudado pierde la matrícula para el siguiente año lectivo.</span></p>
      </div>
    </section>
    <Faq />
    <WspButton />
  </>
  )
}

export default Price
