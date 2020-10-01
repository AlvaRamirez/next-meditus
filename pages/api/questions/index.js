//import auth0 from 'lib/auth0';
import { firebase } from 'lib';
const firebaseDB = firebase.database();

export default async (req, res) => {
    try {
        firebaseDB.ref('questions').once('value', (snapshot) => {
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