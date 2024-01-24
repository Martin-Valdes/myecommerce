import React from 'react'
import Slider from "react-slick";


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carrousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        className: "slider variable-width",
        variableWidth: true
      };



  return (

      <div className="slideContainer">
                <Slider {...settings}>
                <div style={{ width: 150 }}>
                    <img src="../img/soldador.webp" alt="" />
                </div>
                <div>
                    <img src="../img/resistores.webp" alt="" />
                </div>
                <div>
                    <img src="../img/generador-de-frecuencia.webp" alt="" />
                </div>
                <div>
                    <img src="../img/tester.webp" alt="" />
                </div>
                <div>
                    <img src="../img/transistor.webp" alt="" />
                </div>
                <div>
                    <img src="../img/osciloscopio-portatil.webp" alt="" />
                </div>
                <div>
                    <img src="../img/fuente-de-poder.webp" alt="" />
                </div>
                <div>
                    <img src="../img/generador-de-frecuencia.webp" alt="" />
                </div>
                <div>
                    <img src="../img/switch.webp" alt="" />
                </div>
                <div>
                    <img src="../img/generador-de-frecuencia.webp" alt="" />
                </div>
                <div>
                    <img src="../img/soldador.webp" alt="" />
                </div>
                </Slider>
            </div>
  )
}

export default Carrousel
