import React, { Component } from "react";
import img1 from "../../resources/img/foto1.jpg";
import img2 from "../../resources/img/foto2.png";

class QuienesSomos extends Component {
  render() {
    return (
      <div class="container">
        <br />
        <h1 class="text-center estilo-fuente">UNIVERSIDAD POLITÉCNICA SALESIANA
        </h1>
        <br />

        <h2 className="estilo-fuente">Introducción Proyecto Final</h2>
        <p class="lh-lg">
          El desarollo de este proyecto para saber las mediciones solares que existen en nuestro pais
          <br></br>


          La radiación solar es la energía emitida por el Sol, que se propaga en todas las direcciones a través del espacio mediante ondas electromagnéticas. Esa energía es el motor que determina la dinámica de los procesos atmosféricos y el clima. La energía procedente del Sol es radiación electromagnética proporcionada por las reacciones del hidrogeno en el núcleo del Sol por fusión nuclear y emitida por la superficie solar.
        </p>

        <img src={img2} alt="foto2.png" width="900" height="600" className="rounded mx-auto d-block" />
        <br />

        <h2 className="estilo-fuente">Visión</h2>
        <p class="lh-lg">
          Tenemos como finalidad producir datos confiables         </p>

        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">
            Quienes Somos
          </li>
          <li class="list-group-item"> Estudiantes de la Universidad Politécnica Salseiana
            carrera</li>
          <li class="list-group-item">Ingeniería en Ciencias de la Computación</li>
          <li class="list-group-item active" aria-current="true">
            INTEGRANTES
          </li>
          <li class="list-group-item">VEGA CRUZ ANTHONY JHOSSUA
          </li>
          <li class="list-group-item">Guaraca Fernanda</li>


        </ul>
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">
            Versión
          </li>
          <li class="list-group-item">Versión estable más reciente 1.1</li>
          <li class="list-group-item"></li>
          <li class="list-group-item"></li>
          <li class="list-group-item"></li>
        </ul>
        <ul class="list-group">

        </ul>
        <br />
      </div>
    );
  }
}

export default QuienesSomos;
