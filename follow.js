// firebase.initializeApp({
//     apiKey: 'AIzaSyAIlXUZEeQ9jwTaIGr5C9uEUQYOd8KEWpA',
//     projectId: 'spotify-8da9e'
// });

// const db = firebase.firestore();

function follow() {
    let personFollow = document.getElementById("personFollow").innerHTML;

    let mail2 = ''
    let currentChar2 = ''
    let index2 = document.cookie.search("now=") + 4;
    while (currentChar2 !== "-") {
        currentChar2 = document.cookie[index2];
        mail2 += currentChar2;
        index2 += 1;
    }

    let name2 = mail2.slice(0, -1);
    db.collection("follow").doc(name2).set({
        following: [personFollow]
    }, {merge: true})
    console.log(1)

}