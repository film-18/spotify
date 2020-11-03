function getvalue(_src) {
    var pic = "./icon proflie/icon " + _src.id

    console.log(pic)

    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("pic", pic);
        // Retrieve
        document.getElementById('imgprofile').src = localStorage.getItem("pic");
        document.getElementById("imgprofile2").src = localStorage.getItem("pic");


    } else {
        document.getElementById('imgprofile').src = "Sorry, your browser does not support Web Storage...";

    }
    console.log(document.getElementById('imgprofile'));

}

let getname = document.getElementById('profileName');
let getname2 = document.getElementById('name2');
let mail = ''
let currentChar = ''
let index = document.cookie.search("now=") + 4;
while (currentChar !== "-") {
    currentChar = document.cookie[index];
    mail += currentChar;
    index += 1;
}

let name = mail.slice(0, -1);

getname.innerHTML = name;
getname2.innerHTML = name;
console.log(name);
