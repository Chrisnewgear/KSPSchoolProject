import React from 'react'
import Back from '../Common/Back/Back'
import './contact.css'

const Contact = () => {
  const map ='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249.18928242847153!2d-79.89888916150979!3d-2.1427575308845417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sec!4v1714111405516!5m2!1ses-419!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  return (
    <>
      <Back title='Contactos'/>
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contáctanos</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sunt suscipit, voluptas eveniet tempore atque eius ipsum ad natus, repellendus necessitatibus? Dolores mollitia molestiae perferendis laboriosam consectetur, consequuntur sequi exercitationem!</p>
            <div className="items grid2">
              <div className="box">
                <h4>Direccion:</h4>
                <p>Alborada</p>
              </div>
              <div className="box">
                <h4>Email:</h4>
                <p>ksp@gmail.com</p>
              </div>
              <div className="box">
                <h4>Teléfono:</h4>
                <p>+593 1234 567 890</p>
              </div>
            </div>
            <form action="">
              <div className="flexSB">
                <input type="text" placeholder='Nombre' />
                <input type="email" placeholder='Email' />
              </div>
              <input type="email" placeholder='Asunto'/>
              <textarea name="" id="" cols="30" rows="10">
                Escriba aqui su mensaje
              </textarea>
              <button className="primary-btn">ENVIAR</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
