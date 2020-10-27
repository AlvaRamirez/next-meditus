//import auth0 from '../../../lib/auth0';
import { firebase } from '../../../lib';
const firebaseDB = firebase.database();

export default async (req, res) => {
    try {

        //Add auth0
      //  const session = await auth0.getSession(req);
       // if (!session || !session.user) {
        //    res.writeHead(302, {
         //     Location: '/api/login'
         //   });
         //   res.end();
        //    return;
     //   }
    
     //   const { user } = session
      //  const { name:username } = user

        //Datos filtrados por username. Se tiene que usar orderByChild para elegir el campo y equalTo para comparalo
        firebaseDB.ref('questions').orderByChild('username').equalTo(username).once('value', (snapshot) => {
            const questionsArr = [];
            snapshot.forEach((childSnapshot) => {
                questionsArr.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            questionsArr.reverse()
            res.status(200).json(questionsArr);
        })

    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({
            code: error.code,
            error: error.message
        });
    }

};