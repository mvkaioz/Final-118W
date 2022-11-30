const firebaseConfig = {
  apiKey: "AIzaSyAaqbr_XDMvEm-D-9kP-gKcXfxGdrV-bd4",
  authDomain: "bus118-login.firebaseapp.com",
  databaseURL: "https://bus118-login-default-rtdb.firebaseio.com",
  projectId: "bus118-login",
  storageBucket: "bus118-login.appspot.com",
  messagingSenderId: "311448466758",
  appId: "1:311448466758:web:1858427903e75695ba6147"
};

const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child("userdetails");
detailsRef.on("child_added", function (snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

function submit() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  detailsRef.push().set({
    email: email,
    password: password,
  });
}
