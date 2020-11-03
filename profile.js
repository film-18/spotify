// ---------- Init Firebase ----------

firebase.initializeApp({
    apiKey: 'AIzaSyAIlXUZEeQ9jwTaIGr5C9uEUQYOd8KEWpA',
    projectId: 'spotify-8da9e'
});

// ---------- Get Mail ----------

let mail = ''
let currentChar = ''
let index = document.cookie.search("now=") + 4;
while (currentChar !== "-") {
    currentChar = document.cookie[index];
    mail += currentChar;
    index += 1;
}

let name = mail.slice(0, -1);


async function likeSong() {
    const db = firebase.firestore();
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

    // let info = {
    //     Artist:[],
    //     NameSong:[],
    //     Img:[],
    // }
    // let doc = await db.collection("likeSong").doc(name).get().then(data => {
    //     console.log(data.data().name)
    //     info = {
    //         Artist: data.data().Song.Artist ? data.data().Song.Artist : [],
    //         NameSong: data.data().Song.NameSong ? data.data().Song.NameSong : [],
    //         Img: data.data().Song.Img ? data.data().Song.Img : []
    //     };
    // })
    // console.log(info)

    // let data = doc.data();
    // info.Artist.push(nameArtist)
    // info.NameSong.push(nameSong)
    // info.Img.push(img)
    let doc = await db.collection('likeSong').doc(name).get();
    let data = doc.data();

    data.Song.Artist.push(nameArtist)
    data.Song.NameSong.push(nameSong)
    data.Song.Img.push(img)
    await db.collection("likeSong").doc(name).set({
        // Song: {
        //     Artist: firebase.firestore.FieldValue.arrayUnion(nameArtist),
        //     NameSong: firebase.firestore.FieldValue.arrayUnion(nameSong),
        //     Img: firebase.firestore.FieldValue.arrayUnion(img)
        // }
        Song: {
            Artist: data.Song.Artist,
            NameSong: data.Song.NameSong,
            Img: data.Song.Img
        }
    }, {merge: true})

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





