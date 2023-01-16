// https://striveschool-api.herokuapp.com/api/deezer/search


let pink = document.getElementById("pink");
let listOfAlbums = [];
let listOfSongs= [];

const getPink = () => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=pinkfloyd')
	.then(response => response.json())
    .then(response => renderAlbum(response.data, pink))
	.catch(err => console.error(err));
}
const renderAlbum = (fetchedAlbum, location) => {
    let album = document.createElement("div");
    album.innerHTML+=`<h2>Pink Floyd</h2>`
    for(let i = 0; i < fetchedAlbum.length; i++){
        album.innerHTML+=`<li><img><img src="${fetchedAlbum[i].album.cover}">${fetchedAlbum[i].title}</li>`
        listOfAlbums.push(fetchedAlbum[i].album.cover);
        listOfAlbums.push(fetchedAlbum[i].title);
    }
    album.innerHTML+=""
    location.appendChild(album);
}

let daft = document.getElementById("daft");
listOfAlbums = [];
listOfSongs= [];

const getDaft = () => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=daftpunk')
	.then(response => response.json())
    .then(response => renderSecondAlbum(response.data, daft))
	.catch(err => console.error(err));
}
const renderSecondAlbum = (fetchedAlbum, location) => {
    let album = document.createElement("div");
    album.innerHTML+=`<h2>Daft Punk</h2>`
    for(let i = 0; i < fetchedAlbum.length; i++){
        album.innerHTML+=`<li><img><img src="${fetchedAlbum[i].album.cover}">${fetchedAlbum[i].title}</li>`
        listOfAlbums.push(fetchedAlbum[i].album.cover);
        listOfAlbums.push(fetchedAlbum[i].title);
    }
    album.innerHTML+=""
    location.appendChild(album);
}

let metallica = document.getElementById("metallica");
listOfAlbums = [];
listOfSongs= [];

const getMetallica = () => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=metalicca')
	.then(response => response.json())
    .then(response => renderThirdAlbum(response.data, metallica))
	.catch(err => console.error(err));
}
const renderThirdAlbum = (fetchedAlbum, location) => {
    let album = document.createElement("div");
    album.innerHTML+=`<h2>Metallica</h2>`
    for(let i = 0; i < fetchedAlbum.length; i++){
        album.innerHTML+=`<li><img><img src="${fetchedAlbum[i].album.cover}">${fetchedAlbum[i].title}</li>`
        listOfAlbums.push(fetchedAlbum[i].album.cover);
        listOfAlbums.push(fetchedAlbum[i].title);
    }
    album.innerHTML+=""
    location.appendChild(album);
}


window.onload = function(){
    getPink();
    getDaft();
    getMetallica();
}