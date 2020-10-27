//import auth0 from '../../../lib/auth0';
import { firebase } from '../../../lib';
const firebaseDB = firebase.database();
export default async (req, res) => {
    try {
    firebaseDB.ref('meditusData').once('value', (snapshot) => {
    const meditusArr = [];
    snapshot.forEach((childSnapshot) => {
        meditusArr.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
        })
    })   
    
    meditusArr.reverse()
        res.status(200).json(meditusArr);
    })

    } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
        code: error.code,
        error: error.message
    });
}};