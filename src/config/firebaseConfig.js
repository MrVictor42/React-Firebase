import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCxNkok0jPrZca-PQh6yeydUDF2H0oEs0k",
    authDomain: "net-ninja-victor.firebaseapp.com",
    databaseURL: "https://net-ninja-victor.firebaseio.com",
    projectId: "net-ninja-victor",
    storageBucket: "net-ninja-victor.appspot.com",
    messagingSenderId: "455003249300",
    appId: "1:455003249300:web:83d0262354bfeb52f43281",
    measurementId: "G-CYWS3Z8C9Y"
};
firebase.initializeApp(config);
firebase.firestore().settings({ });

export default firebase;