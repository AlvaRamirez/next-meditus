import React from 'react'
import NosotrosImg from '../img/nosotros.png'

const Nosotros = () => {

    return (
        <div id="nosotros">
        <div className="cont">
            <div  className="iz">
     <h1  className="seccion">Nosotros</h1>

     <p className="texto">Nuestro objetivo es generar un entorno en común para todas aquellas personas interesadas 
        en la práctica de la meditación, seccionándola en distintas dinámicas y abarcando variables de: 
        respiración, elongación y de diálogo. Ofreciendo vías comunicativas a distancia, y mucha 
        información almacenada en diversos cursos, los cuales tratan de conceptos puntuales sobre este 
        mundo y se actualizan constantemente. 
        </p>
        <p className="texto">
        El proyecto pretende brindar una simbología de pertenencia a las comunidades activas en estas 
        prácticas, además de forjar grupos solidarios y participativos.
        </p>

        <p className="texto"> <strong>Calma, presencia, <span>Méditus.</span></strong></p>
        </div>

        <div className="der">
            <img id="nosotrosi" src={NosotrosImg}></img>
        </div>
     </div>
     </div>

        

    
   
    )
}

export default Nosotros