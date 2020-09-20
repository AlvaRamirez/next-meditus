import React from 'react'
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
        <div id="contarri"><img id="arriba" src="./assets/flecha.png" ></img></div></Link>


    )
    
}

export default Arriba