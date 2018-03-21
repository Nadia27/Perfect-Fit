
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZ5ZrtgqHBA5U2PySfA77GgptWCoDnDC8",
    authDomain: "poisonproxies-c22ad.firebaseapp.com",
    databaseURL: "https://poisonproxies-c22ad.firebaseio.com",
    projectId: "poisonproxies-c22ad",
    storageBucket: "poisonproxies-c22ad.appspot.com",
    messagingSenderId: "293019946548"
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById('user_div').style.display = 'initial';
      document.getElementById('login_div').style.display = 'none';
      
      var user = firebase.auth().currentUser;
    }

    if(user != null){

        var email_id = user.email;
        var email_verified = user.emailVerified;

        if(email_verified){
          document.getElementById('sendVerfication').style.display = 'none';
        } else{
          document.getElementById('sendVerfication').style.display = 'initial';
        }

        document.getElementById('user_para').innerHTML = 'User : ' + email_id + '<br><br>Currently you email verification status is : ' + email_verified;
    } 

    else {
      // No user is signed in.
       document.getElementById('user_div').style.display = 'none';
      document.getElementById('login_div').style.display = 'initial';
    }
});

$('#login').on('click', function(){
    var userEmail = document.getElementById('inputEmail').value;
    var userPassword = document.getElementById('inputPassword').value;

   firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
      alert('Error : ' + errorMessage);
    });
});

$('#createAccount').on('click', function(){

    var userEmail = document.getElementById('inputEmail').value;
    var userPassword = document.getElementById('inputPassword').value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
      alert('Error : ' + errorMessage);
    });
});
