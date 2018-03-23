
// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyAZ5ZrtgqHBA5U2PySfA77GgptWCoDnDC8",
//   authDomain: "poisonproxies-c22ad.firebaseapp.com",
//   databaseURL: "https://poisonproxies-c22ad.firebaseio.com",
//   projectId: "poisonproxies-c22ad",
//   storageBucket: "poisonproxies-c22ad.appspot.com",
//   messagingSenderId: "293019946548"
// };
// firebase.initializeApp(config);

// // Get elements
// var inputEmail = document.getElementById('inputEmail');
// var inputPassword = document.getElementById('inputPassword');
// var btnSignup = document.getElementById('createAccount');
// var btnLogin = document.getElementById('login');
// var bitnSignOut=document.getElementById('logout');

// // Logout button
// bitnSignOut.addEventListener('click', e =>{
//   e.preventDefault();
//   firebase.auth().signOut();
//   window.location = "../../authentication.html"
// });

// // Add login event
// btnLogin.addEventListener('click', e => {
//   e.preventDefault();  
//   var email = inputEmail.value;
//   var pass = inputPassword.value;
//   var auth = firebase.auth();
//   // Sign in
//   var promise = auth.signInWithEmailAndPassword(email, pass);
//   promise.catch(e => console.log(e.message));
// });

// // signup event
// btnSignup.addEventListener('click', e =>{
//   e.preventDefault();
//   var email = inputEmail.value;
//   var pass = inputPassword.value;
//   var auth = firebase.auth();

//   // Sign Up
//   var promise = auth.createUserWithEmailAndPassword(email, pass);

//   promise.catch(e => console.log(e.message));

// });

// firebase.auth().onAuthStateChanged(firebaseUser => {
//   if(firebaseUser) {
//   //  e.preventDefault();
//    window.location = "recommend.html"
//     console.log( firebaseUser );
//   }else {
//     console.log('not logged in');
//   }
// })


//When the user clicks submit btn
$("#submit").on("click", function(event){
    event.preventDefault();

    //TODO:FIXME: price level should be display 0 (meaning free service) through 5 (highest) 
    //TODO:FIXME: changing number to dollar sign
    //TODO:FIXME: axe price and insurance fields ?? let company do own research
    //TODO:FIXME: Pop up alerting user recomm was received
    
    
    //Create a new resource object
    var newRes = {
        Name: $("#recoName").val().trim(),
        Address:$("#inputAddress").val().trim(),
        Phone_Number: $("#recoPhoneNumber").val().trim(), 
        Price: $("#recoPrice").val(),
        Insurance_Accepted: $("#recoInsurance").val(),
        Category: $("#recoCategory").val()
    };

    $.post("/api/suggested", newRes)
        .then(() => console.log('Finished'))
        .catch(e => console.error(e));

    //console.log(newRes);
    
    // Empty each input box by replacing the value with an empty string
    $("#recoName").val("");
    $("#inputAddress").val("");
    $("#recoPhoneNumber").val("");
    $("#recoPrice").val("");
    $("#recoInsurance").val("");
    $("#recoCategory").val("");


});

