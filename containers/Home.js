import React, { Component } from "react";
import Actividades from '../components/Actividades'
import Videos from '../components/Videos'
import Nosotros from '../components/Nosotros'
import Contacto from '../components/Contacto'
import Inicio from '../components/Inicio'
import Footer from '../components/Footer'
import Arriba from '../components/Arriba'


const Home = () => {
    
  
      
    return (
     
      
         <div className="fondo">
          <Inicio />
          <Arriba />
        <Actividades/>
        <Videos/>
    
        <Nosotros/>
        <Contacto/>
        <Footer />
        </div>
       
        
        

    
   
    )
}

export default Home

