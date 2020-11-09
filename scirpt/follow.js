firebase.initializeApp({
    apiKey: 'AIzaSyAIlXUZEeQ9jwTaIGr5C9uEUQYOd8KEWpA',
    projectId: 'spotify-8da9e'
});

const db = firebase.firestore();

async function follow() {
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

    
    let doc = await db.collection('follow').doc(name2).get();
    let data = doc.data();

    data.following.push(personFollow) 
    await db.collection("follow").doc(name2).set({
        following: data.following
    }, {merge: true})
    console.log(1)

}
// function follow() {
//     var count = localStorage.clickcount = Number(localStorage.clickcount)+1;
//         if (isNaN(count) === true) {
//             count = localStorage.clickcount = 1;
//             // document.getElementById("result").innerHTML = count;
//             console.log(count)
//             document.getElementById('numberOfFollow').innerHTML = count;
//         } else {
//             // document.getElementById("result").innerHTML = count;
//             console.log(count)
//             document.getElementById('numberOfFollow').innerHTML = count;
//         }
// }