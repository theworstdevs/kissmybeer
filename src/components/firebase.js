import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyADzHKHZ-tiG1KSn3Rlj0DxZoyL2D3yJvI",
    authDomain: "kissmybeer-24ea3.firebaseapp.com",
    databaseURL: "https://kissmybeer-24ea3.firebaseio.com",
    projectId: "kissmybeer-24ea3",
    storageBucket: "kissmybeer-24ea3.appspot.com",
    messagingSenderId: "382200881371"
};

firebase.initializeApp(config);

const fire = firebase.firestore();
fire.settings({ timestampsInSnapshots: true });
export const db = fire;