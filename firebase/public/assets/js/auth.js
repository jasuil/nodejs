<!--fire base 웹 시작하기 문서 -->  
<!-- Project Overview에서 앱(web) 추가 후 설정 으로 가서 확인 (Project Overview 옆에 톱니바퀴) -->
var firebaseConfig = {
    apiKey: "AIzaSyALxoiKHwUHKc8kfPZI1tdnjUFIsIo3V0Y",
    authDomain: "jasuil-node-basic.firebaseapp.com",
    databaseURL: "https://jasuil-node-basic.web.app",
    projectId: "jasuil-node-basic",
    storageBucket: "jasuil-node-basic.appspot.com",
    messagingSenderId: "477976962384",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login() {
    firebase.auth().signInWithEmailAndPassword($('#id').val(), $('#pw').val()).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

<!--firebase 인증 페이지 참조 -->
$(document).ready(function ($) {
    console.log(firebase);
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...

            console.log('logged in', user.displayName)
            location.href = ''
        } else {
            // User is signed out.
            // ...

            console.log(`not logged in `)
        }
    });
});
