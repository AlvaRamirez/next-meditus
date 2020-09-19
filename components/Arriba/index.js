import React from 'react'
import Flecha from '../img/flecha.png'
import { Link } from 'react-scroll'


const Arriba = () => {
    return (
        <Link
        activeClass="active"
        to="meditus"
        spy={true}
        smooth={true}
        offset={0}
        duration={1100}
    >
        <div id="contarri"><img id="arriba" src={Flecha} ></img></div></Link>


    )
    
}

export default Arriba