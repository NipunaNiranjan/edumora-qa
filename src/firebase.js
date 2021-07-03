// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCjxm37ktt6zcRD4rxz7FIIpCwa_43jfJ4",
    authDomain: "edumora-qa.firebaseapp.com",
    projectId: "edumora-qa",
    storageBucket: "edumora-qa.appspot.com",
    messagingSenderId: "1020165971633",
    appId: "1:1020165971633:web:b8c7d6f3afb3042e89cc90",
    measurementId: "G-X1B2YNMZTS"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const providerfb = new firebase.auth.FacebookAuthProvider()
const db = firebaseApp.firestore()
export { auth, provider, providerfb }
export default db;