import React from 'react'
import Footer from '../components/Footer'
import auth0 from '../lib/auth0'
import Aporte from '../components/Aporte'

export default function Aprende(){

  const [name] = useState([]);
  const getData = async () => {
     
      firebaseDB.ref('meditusData').once('value', (snapshot) => {
          const meditusArr = [];
          snapshot.forEach((childSnapshot) => {
            meditusArr.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
          })
          })
          // escuelasArr.reverse()
          console.log('getData',meditusArr);
          setEscuelas(meditusArr);
      })
  };
  useEffect(() => {
      getData();
  }, []);

    return (
        <div className="fondo">

        <div className="contpag">
                <div className="context"> 
                <h3  className="sub2">Aprendé</h3>
                <div className="contitu">
                <h1 className="titu">Recomendaciones de netflix</h1>
                <h2 className="sub1">Series para reflexionar, mirar mas allá, formar opiniones</h2>
                </div>
               
                <div className="contparra">
                <p className="parra">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                    galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                    quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
                    las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
                     el cual incluye versiones de Lorem Ipsum.</p>
        
                     <p className="parra">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                    galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                    quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
                    las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
                     el cual incluye versiones de Lorem Ipsum.</p>
        
                     <p className="parra">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                    galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                    quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
                    las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
                     el cual incluye versiones de Lorem Ipsum.</p>
        

                     <img className="imgpa" src="./assets/aprendeimg.jpg"></img>

                     <p className="parra">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                    galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                    quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
                    las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
                     el cual incluye versiones de Lorem Ipsum.</p>
        
                     <p className="parra">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                    galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                    quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
                    las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
                     el cual incluye versiones de Lorem Ipsum.</p>
                     
                     <p className="parra">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                    galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                    quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
                    las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
                     el cual incluye versiones de Lorem Ipsum.</p>
                     </div>
                     <Aporte/>
                </div>
                
                </div>
                  <Footer />
                </div>


    )

    }


    // Protection page
export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: "/api/login",
    });
    res.end();
    return {};
  }
  return { props: { user: session.user } };
}

