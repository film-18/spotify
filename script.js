// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyAIlXUZEeQ9jwTaIGr5C9uEUQYOd8KEWpA',
    projectId: 'spotify-8da9e'
});

var db = firebase.firestore();
function register() {



    let email = document.getElementById('email').value;
    // let confirmEmail = document.getElementById('confirmemail').value;
    let password = document.getElementById('password').value;
    let namehelp = document.getElementById('name').value;
    let day = document.getElementById('date').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('numyear').value;
    let birth = day + "/" + month + "/" + year;
    let gender = document.getElementById('choose');

    console.log(email);
    console.log(gender);

    db.collection("users").doc(email).set({
        Email: email,
        // ConfirmEmail: confirmEmail
        Password: password,
        Name: namehelp,
        Birthday: birth,
        Gender: gender
    })


    // return aString;)

    // location.href = "login.html";

    if (document.account.email.value == "") {
        alert("Enter some value!");
        return;
    }
    document.cookie = "now=" + escape(document.account.email.value) + "-";
    // document.cookie = cookievalue;








}