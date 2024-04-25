import React from 'react'
import Back from '../Common/Back/Back'
import PriceCard from './PriceCard'
import Faq from './Faq'
import './price.css'

const Price = () => {
  return (
  <>
    <Back title='Formas de pago'/>
    <section className="price padding">
      <div className="container grid">
        <PriceCard />
      </div>
    </section>
    <Faq />
  </>
  )
}

export default Price
