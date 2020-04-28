import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { useState } from 'react'

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
  const [loading, setLoading] = useState(false)

  const addQuestion = (data) => {
    setLoading(true)
    
    if (!data.title || !roomid) {
      return
    }
    
    firebase.firestore()
      .collection('questions')
      .add({
        isAnswered: false,
        roomid: roomid,
        timestamp: new Date(),
        ...data
      }).then(() => setLoading(false))
  }

  const updateQuestion = (id, data) => {
    setLoading(true)
    firebase.firestore()
      .doc('questions/' + id)
      .set(data, { merge: true })
      .then(() => setLoading(false))
  }

  const removeQuestion = (id) => {
    setLoading(true)
    firebase.firestore()
      .doc('questions/' + id)
      .delete()
      .then(() => setLoading(false))
  }

  return {
    loading,
    addQuestion,
    updateQuestion,
    removeQuestion
  }
}

export default useQuestion
