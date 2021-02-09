
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD0RWGDEc1ap0Z7FnHRMtDzJw1orlmKf0g",
      authDomain: "kwitter-f7f03.firebaseapp.com",
      databaseURL: "https://kwitter-f7f03-default-rtdb.firebaseio.com",
      projectId: "kwitter-f7f03",
      storageBucket: "kwitter-f7f03.appspot.com",
      messagingSenderId: "66574336994",
      appId: "1:66574336994:web:2e6a463662a64720696fbb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
  user_name=localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  document.getElementById("user_name").innerHTML="Welcome "+ user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class ='room _name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";
}