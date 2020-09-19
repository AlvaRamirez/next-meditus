import React from 'react'
import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import Youtube from '../img/youtube.png'

const Footer = () => {
    return (
        <footer>
            <div className="contfo">
            <ul className="Ul-footer">
               <li className="Li-footer"> <a>Términos y condiciones</a></li>
                <li className="Li-footer"><a>Políticas de privacidad</a> </li>
               <li id="copy" className="Li-footer">Copyright © 2020 Méditus S.R.L</li>
            </ul>
            <ul className="Ul-footer">
             <li className="Li-footer"> <a href={'https://www.facebook.com'} target="_blank"><img src={Facebook}></img></a></li>
           <li className="Li-footer">   <a href={'https://www.instagram.com'} target="_blank"> <img src={Instagram}></img></a></li>
           <li className="Li-footer">  <a href={'https://www.youtube.com'}target="_blank"><img src={Youtube}></img></a></li>
            </ul>

            </div>
        </footer>
    )
}
export default Footer
