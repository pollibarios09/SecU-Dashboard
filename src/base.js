import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD_iyUEC9ocPYQCKLzRhjbOlGYTortjKes",
    authDomain: "secu-dashboard.firebaseapp.com",
    databaseURL: "https://secu-dashboard.firebaseio.com",
    projectId: "secu-dashboard",
    storageBucket: "secu-dashboard.appspot.com",
    messagingSenderId: "65939835383",
    appId: "1:65939835383:web:d67aaf854867551b8e86f2",
    measurementId: "G-RBJL3GXB2T"
};

const app = firebase.initializeApp(config)
const fbase = Rebase.createClass(app.database())
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { app, fbase, facebookProvider }