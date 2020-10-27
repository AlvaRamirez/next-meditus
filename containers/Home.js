import React, { Component } from "react";
import Actividades from '../components/Actividades'
import Videos from '../components/Videos'
import Nosotros from '../components/Nosotros'
import Contacto from '../components/Contacto'
import Inicio from '../components/Inicio'
import Footer from '../components/Footer'

const Home = () => {
    
    // function Homedata() {

    //     const getData async () => {
    
    //         try {
    //             firebaseDB.ref('meditus').once('value', (snapshot) => {
    //             const meditusArr = [];
    //             snapshot.forEach((childSnapshot) => {
    //                 meditusArr.push({
    //                 id: childSnapshot.key,
    //                 ...childSnapshot.val()
    //                 })
    //             })
    //             meditusArr.reverse()
    //                 res.status(200).json(meditusArr);
    //             })
    //         ​
    //             } catch (error) {
    //             console.error(error);
    //             res.status(error.status || 500).json({
    //                 code: error.code,
    //                 error: error.message
    //             });
    //         }};
    //     }
      
    return (
     
         <div className="fondo">
            <>
          <Inicio />
          
        <Actividades/>
        <Videos/>
    
        <Nosotros/>
        <Contacto/>
        <Footer />
        </>

        </div>
       
   
    )
}

export default Home

