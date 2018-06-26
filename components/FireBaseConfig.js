import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAmW4pd6-OK39bW_o42S8IVBzKySFYQtG8",
    authDomain: "fir-chat-3cf4d.firebaseapp.com",
    databaseURL: "https://fir-chat-3cf4d.firebaseio.com",
    projectId: "fir-chat-3cf4d",
    storageBucket: "fir-chat-3cf4d.appspot.com",
    messagingSenderId: "487493844098"
  };
const firebaseApp = firebase.initializeApp(config);
export default firebaseApp;