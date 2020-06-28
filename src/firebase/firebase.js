import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDKxkaoH3Jc5eJX3LaaHktigoZK8_iDn4A",
    authDomain: "expensify-beb1b.firebaseapp.com",
    databaseURL: "https://expensify-beb1b.firebaseio.com",
    projectId: "expensify-beb1b",
    storageBucket: "expensify-beb1b.appspot.com",
    messagingSenderId: "1007870068395",
    appId: "1:1007870068395:web:9f3fff924783c24e19d9ee",
    measurementId: "G-T8FZLYGQEC"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const database=firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider

  export {firebase,googleAuthProvider, database as default};

  //database.ref().set({name:'sindhu'})