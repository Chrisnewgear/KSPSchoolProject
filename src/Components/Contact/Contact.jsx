import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
// import Back from '../Common/Back/Back';
import BackContactos from "../Common/Back/BackContactos";
import "./contact.css";
import WspButton from "../WhatsappButton/WspButton";

const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("ENVIAR");

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("ENVIANDO...");

    emailjs
      .sendForm(
        "service_5yu7el5",
        "template_xgxgphf",
        form.current,
        "ke_ZMz2wvG2nkoc6A"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Mensaje enviado con éxito",
            text: "Nos pondremos en contacto con usted a la brevedad posible.",
          });
          form.current.reset();
          setButtonText("ENVIAR");
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Hubo un error al enviar el mensaje",
            text: "Por favor, inténtelo de nuevo más tarde.",
          });
          setButtonText("ENVIAR");
        }
      );
  };

  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249.18928242847153!2d-79.89888916150979!3d-2.1427575308845417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sec!4v1714111405516!5m2!1ses-419!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  return (
    <>
      <BackContactos title="Contactos" />
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map} title="location"></iframe>
          </div>
          <div className="right row">
            <h1>Contáctanos</h1>
            <p>
              ¿Tienes preguntas sobre nuestros programas educativos o necesitas
              más información sobre nuestras actividades escolares? ¡Estamos
              aquí para ayudarte! Completa el formulario de contacto a
              continuación y nos pondremos en contacto con usted a la brevedad
              posible.
            </p>
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
                <p>+593 96 741 7783</p>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="flexSB">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Nombre"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />
              </div>
              <input type="text" name="subject" placeholder="Asunto" required />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Escriba aqui su mensaje"
                required
              ></textarea>
              <button type="submit" className="primary-btn">
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </section>
      <WspButton />
    </>
  );
};

export default Contact;
