import { useState, useEffect } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDfw7XEA0g48CvcPkNexep4gtZ1k6ks5RU",
        authDomain: "kuestions-9726f.firebaseapp.com",
        databaseURL: "https://kuestions-9726f.firebaseio.com",
        projectId: "kuestions-9726f",
        storageBucket: "kuestions-9726f.appspot.com",
        messagingSenderId: "599779254371",
        appId: "1:599779254371:web:ea36289600decc11d65856",
        measurementId: "G-6TE1C09VQ9"
    })
}

const useQuestions = (roomid) => {
    const [questions, setQuestions] = useState(null)
    const [error, setError] = useState(null)

    function handleSnapshot (snapshot) {
        setQuestions(snapshot.docs)
    }

    if (roomid) {   
        firebase.firestore()
            .collection(`questions`)
            .where('roomid', '==', roomid)
            .onSnapshot(
                snapshot => handleSnapshot(snapshot),
                err => setError(err)
            )
    }

    return { questions, error }
}

export default useQuestions
