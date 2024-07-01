import React from 'react'
import Title from '../Common/Heading/title/Title'
import PriceCard from '../Pricing/PriceCard'

const Hprice = () => {
  return (
    <div>
      <section className="hprice padding">
        <Title subtitle='Nuestros Precios' title='Precios y promociones'/>
        <div className="price container grid">
          <PriceCard />
        </div>
      </section>
    </div>
  )
}

export default Hprice
