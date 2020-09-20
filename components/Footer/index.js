import React from 'react'

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
             <li className="Li-footer"> <a href={'https://www.facebook.com'} target="_blank"><img src="./assets/facebook.png"></img></a></li>
           <li className="Li-footer">   <a href={'https://www.instagram.com'} target="_blank"> <img src="./assets/instagram.png"></img></a></li>
           <li className="Li-footer">  <a href={'https://www.youtube.com'}target="_blank"><img src="./assets/youtube.png"></img></a></li>
            </ul>

            </div>
        </footer>
    )
}
export default Footer
