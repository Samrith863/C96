var firebaseConfig = {
    apiKey: "AIzaSyDjkangScYFOtcFzcva5S2R3tkhNNx6QcE",
    authDomain: "kwitter-18846.firebaseapp.com",
    databaseURL: "https://kwitter-18846-default-rtdb.firebaseio.com",
    projectId: "kwitter-18846",
    storageBucket: "kwitter-18846.appspot.com",
    messagingSenderId: "926770083684",
    appId: "1:926770083684:web:60677dfff700b03dda6c71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");
   function send(){
  msg=document.getElementById("msg").value;
  console.log(msg);
  firebase.database().ref(room_name).push({
      name:user_name,
      like:0,
      message:msg
  });
  document.getElementById("msg").value="";
   }


  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter_login.html";
  }