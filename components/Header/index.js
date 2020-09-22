import React from 'react'
import { Link } from 'react-scroll'
//import * as Scroll from 'react-scroll'
import { default as NextLink } from 'next/link'

const Header = () => {
  return (
    <header className="App-header">
      <NextLink id="meditu"  href="/">
       <a ><img className="hvr-grow" id="logo" src="./assets/logo.png"></img> </a>

      </NextLink>

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

      <div className="ml">  <a mp-mode="dftl" href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=449368404-a0ad8847-74f7-4c37-b974-ef685f8671a9" name="MP-payButton"> <img id="mercado" src="./assets/mercadopago.png"></img> </a> </div>

    </header>
  )
}

export default Header