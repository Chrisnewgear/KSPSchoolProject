import React from "react";
import "./courses.css";

const Metdologia = () => {
  return (
    <section className="metodologia margin">
      {" "}
      <div className="container">
        {" "}
        <div className="metodologia-content">
          {" "}
          <div className="metodologia-image">
            {" "}
            <img
              src="/images/OptimizedPhotos/metodologia.jpg"
              alt="Metodología de enseñanza - Niños participando en clase interactiva"
              loading="lazy"
              decoding="async"
            />{" "}
          </div>{" "}
          <div className="metodologia-text">
            {" "}
            <header>
              {" "}
              <h1>Metodología de trabajo</h1>{" "}
            </header>{" "}
            <div className="content">
              {" "}
              <p>
                {" "}
                Diseñamos nuestras clases para atraer y cautivar la atención de
                los niños más que llenar libros y cumplir con un currículo
                obsoleto en el que se limita a los niños a aprender lo que se
                piensa que es de acuerdo a su edad, sin embargo, hemos
                comprobado que los niños desarrollan su curiosidad del mundo que
                les rodea, de forma creativa.{" "}
              </p>{" "}
              <p>
                {" "}
                Nuestra metodología de trabajo se basa en un enfoque centrado en
                el estudiante, donde fomentamos el aprendizaje activo y la
                participación en clase. Utilizamos una variedad de técnicas de
                enseñanza innovadoras, como el aprendizaje cooperativo, la
                resolución de problemas y la enseñanza basada en proyectos, para
                promover el pensamiento crítico y la creatividad.{" "}
              </p>{" "}
              <p>
                {" "}
                Además, nos enfocamos en la evaluación continua y el
                retroalimentación constante para asegurar que cada estudiante
                esté progresando y alcanzando su máximo potencial.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Metdologia;
