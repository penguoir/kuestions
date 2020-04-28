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

const useQuestion = (roomid) => {
    const addQuestion = (data) => {
        if (!data.title || !roomid) {
            return
        }
        
        firebase.firestore()
            .collection('questions')
            .add({
                isAnswered: false,
                roomid: roomid,
                ...data
            })
    }

    const updateQuestion = (id, data) => {
        firebase.firestore()
            .doc('questions/' + id)
            .set(data, { merge: true })
    }

    const removeQuestion = (id) => {
        firebase.firestore()
            .doc('questions/' + id)
            .delete()
    }

    return {
        addQuestion,
        updateQuestion,
        removeQuestion
    }
}

export default useQuestion
