import React, { useState, useEffect } from "react";
import { firebase } from 'lib';
import { Question, QuestionForm } from 'components'
const firebaseDB = firebase.database();


export default function Questions({ user }) {
    const [questions, setQuestions] = useState([]);
    const [editForm, setEditForm] = useState(false);
    const [editFormData, setEditFormData] = useState({});
    const { name:username } = user
    useEffect(() => {
        firebaseDB.ref('questions').orderByChild('username').equalTo(username).on('value', (snapshot) => {
            const questionsArr = [];
            snapshot.forEach((childSnapshot) => {
                questionsArr.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            questionsArr.reverse()
            setQuestions(questionsArr)
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
            <div>{`user dashboard: ${user.name}`}</div>
            <div><QuestionForm editForm={editForm} editFormData={editFormData} handleEditEnd={handleEditEnd} /></div>
            { questions.map(question => <Question key={question.id} handleEdit={handleEdit} enableEdit={true} data={question} />)}
        </>
    );
}
