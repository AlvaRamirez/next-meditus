import React from 'react'
import { Link } from 'react-scroll'
//import * as Scroll from 'react-scroll'
import { default as NextLink } from 'next/link'
import { useFetchUser } from '../../lib/user'

const Header = () => {

  const { user, loading } = useFetchUser();

  return (
    <header className="App-header">
     
       <div className="ml">
      <NextLink 
      
      id="meditu"   href="/">
        
       <a ><img className="hvr-grow" id="logo" src="./assets/logo.png"></img> </a>

      </NextLink>
      </div>

      {/* <Link spy={true}
       smooth={true}
       offset={0}
       duration={1100}
       
       >
       
       </Link> */}

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

      <div className="ml"> 
      
      {!loading && user ? (
          <a href="/api/logout" className="profileLink">
            Logout
          </a>
        ) : (
          <a href="/api/login" className="profileLink">
            Login
          </a>
          
        )}
        </div>
    </header>
  )
}

export default Header