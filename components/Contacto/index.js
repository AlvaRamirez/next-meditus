import React from 'react'

const Contacto = () => {

    return (
    
        <div id="contacto"> 
        <div className="cont">
        
    <div id="iz">
    <h1  className="seccion">Contacto</h1>
    <p className="texto">Hablemos:</p>

    <form>
       <div id="noap">
  <label>
    <input type="text" name="name" placeholder="nombre"/>
  </label>
  <label>
    <input type="text" name="name" placeholder="apellido"/>
  </label>
  </div>
  <label>
    <input id="mail" type="text" name="name" placeholder="correo electronico"/>
  </label>
  <textarea >
</textarea>
<button id="enviar"className="btn hvr-back-pulse">Enviar</button>
</form>

   </div>
   
  

   <div className="conder">
       <img id="contactoi" src="./assets/logocontactoimg.jpg"></img>
   </div>
     </div>
     </div>
   
    )
}


export default Contacto