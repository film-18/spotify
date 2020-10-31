firebase.initializeApp({
    apiKey: 'AIzaSyAIlXUZEeQ9jwTaIGr5C9uEUQYOd8KEWpA',
    projectId: 'spotify-8da9e'
});

let mail = ''
let currentChar = ''
let index = document.cookie.search("now=") + 4;
while (currentChar !== "-") {
    currentChar = document.cookie[index];
    mail += currentChar;
    index += 1;
}

let name = mail.slice(0, -1);
let addSong = [];
let addArtist = [];
let addimg = [];

function likeSong() {
    let nameSong = document.getElementById("songti").innerHTML;
    let nameArtist = document.getElementById("songar").innerHTML;
    let img = document.getElementById("thumbnail").getAttribute("src");
    addSong.push(nameSong);
    addArtist.push(nameArtist);
    addimg.push(img);
    // addSong.push(addArtist);

    var db = firebase.firestore();
    db.collection("likeSong").doc(name).set({
        Name: name,
        Song: {
            Artist: addArtist,
            NameSong: addSong,
            Img: addimg
        }


    })

    console.log(nameSong);
    console.log(addSong);
    console.log(addArtist);
}

var db = firebase.firestore();
db.collection("playlist").doc(name).get().then(data => {

    for (let i = 0; i < data.data().Playlist.play.length; i++) {
        let table = document.getElementById("table0");
        table.setAttribute("class", "border-top-0 pb-3"); //id @table
        let row = table.insertRow(-1);
        let newrow = row.insertCell(0);
        let playlist1 = data.data().Playlist.play[i];
        newrow.innerHTML = playlist1;

        newrow.style.color = "white";
    }
    console.log(data.data().Playlist);
});