

const firebaseConfig = {
  apiKey: "AIzaSyAqmvd3Amn6p3F5v_ZdNpNWukzryAEStvI",
  authDomain: "kwitter-90edd.firebaseapp.com",
  projectId: "kwitter-90edd",
  storageBucket: "kwitter-90edd.appspot.com",
  messagingSenderId: "956168498353",
  appId: "1:956168498353:web:ab004c2dbb27644c694690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
