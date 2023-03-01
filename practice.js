
var firebaseConfig = {
    apiKey: "AIzaSyAmJbHQCJJsQdrQbSb3j-QP6WMgv0U8Wsw",
    authDomain: "practice-12d3e.firebaseapp.com",
    databaseURL: "https://practice-12d3e-default-rtdb.firebaseio.com",
    projectId: "practice-12d3e",
    storageBucket: "practice-12d3e.appspot.com",
    messagingSenderId: "1076456638746",
    appId: "1:1076456638746:web:5cc16ff363fd62ffb084a3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}