const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9a1920db6msh3c30d912dae7432p1b9db9jsn2ab8ea5181e3',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

// https://deezerdevs-deezer.p.rapidapi.com/search?q=[YOUR_STRING]

const urlMetlallica = "https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica";

fetch(urlMetlallica, options)
	.then(response => response.json())
	.then(album => console.log(album))
	.catch(err => console.error(err));

const creatAlbums = (album) => {
    let pinkFloydRow = document.querySelector("#pinkFloydList");
   let dataArray = album.data;
   for (let i = 0; i < dataArray.length; i++) {
    
    
   }
}   


