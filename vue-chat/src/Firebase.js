import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCH76t03oen1i55dl1wRGZ8ic0ekFpvLzI",
    authDomain: "vue-chat-app-5d067.firebaseapp.com",
    databaseURL: "https://vue-chat-app-5d067.firebaseio.com",
    projectId: "vue-chat-app-5d067",
    storageBucket: "vue-chat-app-5d067.appspot.com",
    messagingSenderId: "189394036409",
    appId: "1:189394036409:web:5e6ae57cab6afb3a049d68"
};

firebase.initializeApp(config);
export default firebase;

