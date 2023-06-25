
let poll=document.getElementById("poll")
let body=document.getElementById("body")
let close=document.getElementById("close")
let register=document.getElementById("register")
let register1=document.getElementById("register1")
let subbtn=document.getElementById("subbtn")
let slidingWindow=document.getElementById("slidingWindow")
document.getElementById("profileicon").addEventListener("click", function() {
    document.getElementById("slidingWindow").classList.add("open");
  });
 
  
  
  var closeIcon=document.getElementById("closeIcon")
  
  
  
  closeIcon.addEventListener("click", function() {
    
    document.getElementById("slidingWindow").classList.remove("open")
    
  },true);
  
 register.addEventListener("click",function(){ window.location.href = "loginpage.html";
})

register1.addEventListener("click",function(){ window.location.href = "loginpage.html";
})
 
 var firebaseConfig = {
    apiKey: "AIzaSyAxalg_Fj70Numz5gg-nsVYjX1mmdPBYrg",
authDomain: "munnew-844b8.firebaseapp.com",
databaseURL: "https://munnew-844b8-default-rtdb.firebaseio.com",
projectId: "munnew-844b8",
storageBucket: "munnew-844b8.appspot.com",
messagingSenderId: "1070876815204",
appId: "1:1070876815204:web:c61b400bf4a1f9d9825471",
measurementId: "G-DCBJED3G3Z"
};


firebase.initializeApp(firebaseConfig);


document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
var username=document.getElementById("Username").value
document.getElementById("slidingWindow").innerHTML=`<h1>Hello ${username}!</h1>
<h2>You are now part of IIT BHU MUN'23</h2>
`

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password).then(function() {
      
      alert("Registration successful!");
      document.getElementById("slidingWindow").innerHTML=`<h1>Hello ${username}!</h1>`
      window.location.href = "index.html";
    })
    .catch(function(error) {
      
      alert("Registration failed: " + error.message);
    });
    window.location.href = "index.html"});
   
    document.getElementById("googleSignInButton").addEventListener("click", function() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      
      var user = result.user;
      alert("Google sign-in successful! User: " + user.displayName);
      document.getElementById("slidingWindow").innerHTML=`<h1>Hello ${username}!</h1>`
    })
    .catch(function(error) {
      
      alert("Google sign-in failed: " + error.message);
    });
});
