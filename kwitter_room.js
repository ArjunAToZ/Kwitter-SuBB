
const firebaseConfig = {
  apiKey: "AIzaSyDxXV3zilj-n6rzsCqknAxO009ztYKfs_M",
  authDomain: "kwitter-6b427.firebaseapp.com",
  databaseURL: "https://kwitter-6b427-default-rtdb.firebaseio.com",
  projectId: "kwitter-6b427",
  storageBucket: "kwitter-6b427.appspot.com",
  messagingSenderId: "579462128788",
  appId: "1:579462128788:web:74333cca20e275c7108081",
  measurementId: "G-136Q9MEL7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function addRoom()
{
    room_name = document.getElementById("room_name").Value
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function (childSnapshot)
{ childKey = childSnapshot.key;
Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

});
});
}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
    
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location.replace = "kwitter.html";
}