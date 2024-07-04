let iframeFilme = document.getElementById("iframeFilme")

let sourceVideos = [];
sourceVideos[0] = "https://coolrom.com.au"; //PLUTOTV
sourceVideos[1] = "https://www.myabandonware.com"; //MENU CANAIS
sourceVideos[2] = "https://www.retrogames.cc/"; //SUPERTV

function altGameLink(){
  iframeFilme.setAttribute("src", sourceVideos[0]);
}

//ALTERANDO O ATRIBUTO SRC DO ELEMENTO HTML VIDEO

function alterarLinkGame(idLinkGame) {
 this.idLinkGame = idLinkGame
console.log(idLinkGame)
iframeFilme.setAttribute("src", sourceVideos[idLinkGame]);
}
