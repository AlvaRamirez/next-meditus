import React, { useState, useEffect } from "react";
import { firebase } from 'lib';
import { Question as QuestionItem, QuestionForm } from 'components'
const firebaseDB = firebase.database();


export default function Question({ user, id }) {
    const [question, setQuestion] = useState({});
    useEffect(() => {
        // firebaseDB.ref(`questions/${id}`).once('value')
        //     .then((snapshot) => {
        //         setQuestion(snapshot.val())
        //     })


        firebaseDB.ref(`questions/${id}`).on('value', (snapshot) => {
            setQuestion(snapshot.val())
        })

        return () => {
            firebaseDB.ref('questions').off('value')
        }
    }, []);

    const handleEdit = async (data) => {
        setEditForm(true)
        setEditFormData(data)
    }

    const handleEditEnd = () => {
        setEditForm(false);
        setEditFormData({})
    }

    return (
        <>
            <h1>{question.question}</h1>
            <h2>{question.name}</h2>
            <p>{question.username}</p>
        </>
    );
}
