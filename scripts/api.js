const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e1b102a83cmsh4dc8f67441468fdp1aa584jsne71462f57968',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

fetch('https://deezerdevs-deezer.p.rapidapi.com/infos', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    