firebase.initializeApp({
    apiKey: 'AIzaSyAIlXUZEeQ9jwTaIGr5C9uEUQYOd8KEWpA',
    projectId: 'spotify-8da9e'
});

// window.onload = () => {
// }

let mail = ''
let currentChar = ''
let index = document.cookie.search("now=") + 4;
while (currentChar !== "-") {
    currentChar = document.cookie[index];
    mail += currentChar;
    index += 1;
}

let name = mail.slice(0, -1);
// let addSong = [];
// let addArtist = [];
// let addimg = [];

async function likeSong() {
    let mail = ''
    let currentChar = ''
    let index = document.cookie.search("now=") + 4;
    while (currentChar !== "-") {
        currentChar = document.cookie[index];
        mail += currentChar;
        index += 1;
    }

    let name = mail.slice(0, -1);

    let nameSong = document.getElementById("songti").innerHTML;
    let nameArtist = document.getElementById("songar").innerHTML;
    let img = document.getElementById("thumbnail").getAttribute("src");
    // addSong.push(nameSong);
    // addArtist.push(nameArtist);
    // addimg.push(img);
    // addSong.push(addArtist);

    let info = {
        artist:[],
        nameSong:[],
        img:[],
    }
    var db = firebase.firestore();
    let doc = await db.collection("likeSong").doc(name).get()
    info = {
        Artist: doc.data().Song.Artist,
        NameSong: doc.data().Song.NameSong,
        Img: doc.data().Song.Img
    };
    console.log(info)
    //console.log(doc.data())
    //console.log(doc.data())
    let data = doc.data();
    info.Artist.push(nameArtist)
    info.NameSong.push(nameSong)
    info.Img.push(img)
    // data.Song.Artist.push(nameArtist)
    // data.Song.NameSong.push(nameSong)
    // data.Song.Img.push(img)
    console.log(info)
    await db.collection("likeSong").doc(name).update({
        // Song: {
        //     Artist: firebase.firestore.FieldValue.arrayUnion(nameArtist),
        //     NameSong: firebase.firestore.FieldValue.arrayUnion(nameSong),
        //     Img: firebase.firestore.FieldValue.arrayUnion(img)

        // }
        Song: {
            Artist: info.Artist,
            NameSong: info.NameSong,
            Img: info.Img
        }

    })

    console.log(nameSong);
    console.log(nameArtist);
    console.log(img);
}

//show playlist
var db = firebase.firestore();
db.collection("playlist").doc(name).get().then(data => {

    for (let i = 0; i < data.data().Playlist.length; i++) {
    let table = document.getElementById("table0"); //id @table
    table.setAttribute("class", "border-top-0 pb-3");
    let row = table.insertRow(-1);
    let newrow = row.insertCell(0);
    let playlist1 = data.data().Playlist[i];
    newrow.innerHTML = playlist1;

    newrow.style.color = "white";
    }
    console.log(data.data().Playlist);
});