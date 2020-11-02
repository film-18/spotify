async function register() {
    
    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
        apiKey: 'AIzaSyAIlXUZEeQ9jwTaIGr5C9uEUQYOd8KEWpA',
        projectId: 'spotify-8da9e'
    });
    
    
    let email = document.getElementById('email').value;
    // let confirmEmail = document.getElementById('confirmemail').value;
    // let password = document.getElementById('password').value;
    // let namehelp = document.getElementById('name').value;
    // let day = document.getElementById('date').value;
    // let month = document.getElementById('month').value;
    // let year = document.getElementById('numyear').value;
    // let birth = day + "/" + month + "/" + year;
    // let gender = document.getElementById('choose');
    
    console.log(email);
    
    var db = firebase.firestore();
    await db.collection("playlist").doc('aaaa').set({
        Email: 'aaaa'
        // ConfirmEmail: confirmEmail
    })


    if (document.account.email.value == "") {
        alert("Enter some value!");
        return;
    }
    document.cookie = "now=" + escape(document.account.email.value) + "-";
    // document.cookie = cookievalue;

}