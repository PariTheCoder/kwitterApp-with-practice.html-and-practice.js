
//ADD YOUR FIREBASE LINKS HERE
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

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key; Room_names = childKey; 
      //Start code
       console.log("Room Name - " + Room_names); row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#"; document.getElementById("output").innerHTML += row; 
       //End code
       });});} getData();


/*
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
*/
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firbase.database().ref("/").child(room_name).undate({
            purpose : "adding room name"
      });
      
            localStorage.setItem("rooma_name", room_name);

            window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}