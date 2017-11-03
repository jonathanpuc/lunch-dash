import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyAXzMHCfUrYsc5JknVHzIa95cPDD_7Ac5k",
    authDomain: "lunch-dash.firebaseapp.com",
    databaseURL: "https://lunch-dash.firebaseio.com",
    projectId: "lunch-dash",
    storageBucket: "lunch-dash.appspot.com",
    messagingSenderId: "431117000667"
  };

  firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();