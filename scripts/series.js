const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e1b102a83cmsh4dc8f67441468fdp1aa584jsne71462f57968',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=tt0001702%2Ctt0001856%2Ctt0001856', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


    

