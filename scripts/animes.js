
let sourceVideos = [];
sourceVideos[0] = "https://animesgames.cc/animes/shurato-dublado-todos-os-episodios"; //SHURATO
sourceVideos[1] = "https://animesgames.cc/animes/yu-yu-hakusho-dublado-todos-os-episodios"; //YUYU HAKUSHO
sourceVideos[2] = "https://animesgames.cc/animes/street-fighter-ii-victory-todos-os-episodios"; //SFVII
sourceVideos[3] = "https://animesgames.cc/animes/os-cavaleiros-do-zodiaco-dublado-todos-os-episodios"; //CDZ
sourceVideos[4] = "https://animesgames.cc/animes/dragon-ball-z-dublado-todos-os-episodios"; //DBZ //sourceVideos[4] = "https://animesonlinecc.to/search/dragon+ball"; //DBZ



//ALTERANDO O ATRIBUTO SRC DO ELEMENTO HTML VIDEO
let iframeFilme = document.getElementById("iframeFilme")

function alterarLinkFilme(indexFilme) {
    this.indexFilme = indexFilme
   console.log(indexFilme)
   iframeFilme.setAttribute("src", sourceVideos[indexFilme]);
   }
   