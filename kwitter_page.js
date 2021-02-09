//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:_user_name,
      message:msg,
      like:0    
      });
      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";
}