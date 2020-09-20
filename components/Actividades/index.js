import React from 'react'
import { defautl as NextLink } from 'next/link'



function Actividades()  {

    return (

               
                    <div id="actividades">
                 <div className="contact">
                <h1 className="seccion">Actividades</h1>

                    <div id="contnoo">
                    <div id="izq">
                        <NextLink >
                    
                            <a href="/experimenta"><img className="hvr-float" id="imgder" src="./assets/Grupo 104.png"></img></a>
                           
                        </NextLink>
                        </div>
                        <div id="der">
                        <NextLink >
                        
                          <a href="/aprende"><img className="hvr-float"  id="imgiz" src="./assets/Grupo 103.png"></img></a>  
                            
                        </NextLink>
                        </div>

                    </div>
                   
                    </div>
        </div >
               


    )
}

export default Actividades