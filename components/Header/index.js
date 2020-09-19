import React from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-scroll'
import NavLink from 'netx/link'
//import {withRouter} from 'react-router'
import Mercado from '../img/mercadopago.png'

const Header = () => {

    return (
        <header className="App-header">
             <NavLink  id="meditu" to= "/"
                    
                    >
                       <img className="hvr-grow" id="logo" src={Logo}></img> </NavLink>
           
            <ul className="Ul-header">
                <li className="Li-header">
                    <Link
                        activeClass="active"
                        to="actividades"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1100}
                    >
                      Actividades</Link>

                   </li>

                    <li className="Li-header">
                    <Link
                        activeClass="active"
                        to="videos"
                        spy={true}
                        smooth={true}
                        offset={-250}
                        duration={1100}
                    >
                      Videos</Link>
                    </li>

                    <li className="Li-header">
                    <Link
                        activeClass="active"
                        to="nosotros"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={1100}
                    >
                      Nosotros</Link>
                    </li>

                    <li className="Li-header">
                    <Link
                        activeClass="active"
                        to="contacto"
                        spy={true}
                        smooth={true}
                        offset={225}
                        duration={1100}
                    >
                      Contacto</Link>
                    </li>

                </ul>
               
              <div className="ml">  <a  mp-mode="dftl" href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=449368404-a0ad8847-74f7-4c37-b974-ef685f8671a9" name="MP-payButton"> <img id="mercado" src={Mercado}></img> </a> </div>

        </header>
    )
}
//export default  withRouter (Header)
export default Header