import React from 'react'
// import Back from '../Common/Back/Back'
import BackPagos from '../Common/Back/BackPagos'
import PriceCard from './PriceCard'
import Faq from './Faq'
import WspButton from '../WhatsappButton/WspButton'
import DownloadPDFButton from '../Common/Buttons/DownloadButton'
import './price.css'


const Price = () => {

  const pdfURL = './Pdfs/Precios.pdf';

  return (
  <>
    <BackPagos title='Formas de pago'/>
    <section className="price padding">
      <div className="container grid">
        <PriceCard />
      </div>
      <section className='precios'>
        <div className="container flexSB">
          <div className="left row">
            <div className='promos'>
              <h2>Más Promos</h2>
              <p className='paraghraph'>Por matriculas de más de 3 niños en adelante <span>$200.00</span>. Matrícula diferida <span>$30.00</span> agregados a la mensualidad normal</p>
            </div>
            <div className='promos'>
              <h2>Recargos</h2>
              <p className='paraghraph'>Todas las mensualidades suben el <span>10%</span> a partir del mes adeudado y no tendrán acceso a la plataforma. <span>A partir del cuarto mes adeudado pierde la matrícula para el siguiente año lectivo.</span></p>
            </div>
            <div className='downloadButtonContainer '>
              <DownloadPDFButton url={pdfURL} />
            </div>
          </div>
          <div className="right row">
            <img src="/images/OptimizedPhotos/pricesimg.jpg" alt="" />
          </div>
        </div>
      </section>
    </section>
    <Faq />
    <WspButton />
  </>
  )
}

export default Price


