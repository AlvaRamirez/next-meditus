import React from 'react'
//import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
//import {withRouter} from 'react-router'
import Link from 'netx/link'
import Experimentaimg from '../img/Grupo 103.png'
import Aprendeimg from '../img/Grupo 104.png'



function Actividades()  {

    return (

               
                    <div id="actividades">
                 <div className="contact">
                <h1 className="seccion">Actividades</h1>

                    <div id="contnoo">
                    <div id="izq">
                        <Link href="/experimenta">
                    
                            <img className="hvr-float" id="imgder" src={Experimentaimg}></img>
                           
                        </Link>
                        </div>
                        <div id="der">
                        <Link href="/aprende">
                        
                            <img className="hvr-float"  id="imgiz" src={Aprendeimg}></img>
                            
                        </Link>
                        </div>

                    </div>
                   
                    </div>
        </div >
               


    )
}

//export default withRouter (Actividades)

export default Actividades