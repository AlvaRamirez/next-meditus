import React from 'react'
import { default as NextLink } from 'next/link'

export default function Actividades()  {

    return (

               
                    <div id="actividades">
                 <div className="contact">
                <h1 className="seccion">Actividades</h1>

                    <div id="contnoo"> 
                    <div id="izq">
                        <NextLink href="/Aprende">
                    
                            <a ><img className="hvr-float" id="imgder" src="./assets/Grupo 104.png"></img></a>
                           
                        </NextLink>  
                        </div>
                        <div id="der">
                        <NextLink href="/Experimenta" >
                        
                                <a ><img className="hvr-float"  id="imgiz" src="./assets/Grupo 103.png"></img></a>  
                            
                        </NextLink>
                        </div>

                    </div>
                   
                    </div>
        </div >
               


    )
 

}


