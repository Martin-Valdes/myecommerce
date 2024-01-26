import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./Carrusel.css"

const Carrousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        cssEase: "linear",
        className: "slider variable-width",
        variableWidth: true
      };



  return (

      <div className="slideContainer">
                <Slider {...settings}>
                <div className="imgCarrusel" style={{ width: 150 }}>
                    <img src="../img/soldador.webp" alt="" />
                </div>
                <div className="imgCarrusel">
                    <img src="../img/resistores.webp" alt="" />
                </div>
                <div className="imgCarrusel">
                    <img src="../img/generador-de-frecuencia.webp" alt="" />
                </div>
                <div className="imgCarrusel">
                    <Link to="/categoria/medicion" ><img src="../img/tester.webp" alt="" /></Link>
                </div>
                <div className="imgCarrusel">
                    <img src="../img/transistor.webp" alt="" />
                </div>
                <div className="imgCarrusel">
                    <img src="../img/osciloscopio-portatil.webp" alt="" />
                </div>
                <div className="imgCarrusel">
                    <img src="../img/fuente-de-poder.webp" alt="" />
                </div>
                <div className="imgCarrusel">
                    <img src="../img/generador-de-frecuencia.webp" alt="" />
                </div>
                <div className="imgCarrusel">
                    <img src="../img/switch.webp" alt="" />
                </div>
                <div className="imgCarrusel">
                    <img src="../img/generador-de-frecuencia.webp" alt="" />
                </div>
                <div className="imgCarrusel"> 
                    <img src="../img/soldador.webp" alt="" />
                </div>
                </Slider>
            </div>
  )
}

export default Carrousel
