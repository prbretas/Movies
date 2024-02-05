let linkFilme1 = document.getElementById("linkFilme1");
let linkFilme2 = document.getElementById("linkFilme2");
let linkFilme3 = document.getElementById("linkFilme3");
let linkFilme4 = document.getElementById("linkFilme4");
let linkFilme5 = document.getElementById("linkFilme5");

let sourceVideos = [];
sourceVideos[0] = "https://embedder.net/e/movie?imdb=tt0317219"; //CARROS
sourceVideos[1] = "https://embed.warezcdn.net/filme/tt1216475"; //CARROS 2
sourceVideos[2] = "https://embed.warezcdn.net/filme/tt1630029"; //AVATAR
sourceVideos[3] = "https://embedder.net/e/tt2911666/"; //JOHN WICK DE VOLTA AO JOGO
sourceVideos[4] = "https://embed.warezcdn.net/filme/tt4425200"; //JOHN WICK UM NOVO DIA PRA MATRR
sourceVideos[5] = "https://embed.warezcdn.net/filme/tt6146586"; //JW PARABELLUM
sourceVideos[6] = "https://embed.warezcdn.net/filme/tt10366206"; //BABA YAGA
sourceVideos[7] = "https://embed.warezcdn.net/filme/tt2906216"; //DUNGEOSN DRAGONS
sourceVideos[8] = "https://embed.warezcdn.net/filme/tt11145118"; //CREED 3
sourceVideos[9] = "https://embed.warezcdn.net/filme/tt10151854"; //SHAZAM 2
sourceVideos[10] = "https://embedder.net/e/movie?imdb=tt4630562"; //VELOZES 10
sourceVideos[11] = "https://embedder.net/e/movie?imdb=tt6495056"; //PATOS
sourceVideos[12] = "https://embedder.net/e/tt15837338/"; //PATRULHA CANINA SUPER
sourceVideos[13] = "https://embedder.net/e/tt28603694/"; //o porteiro
sourceVideos[14] = "https://embedder.net/e/tt3291150/"; //MERCENARIOS 4
sourceVideos[15] = "https://embedder.net/e/tt4495098"; //gran turismo

//ALTERANDO O ATRIBUTO SRC DO ELEMENTO HTML VIDEO
let iframeFilme = document.getElementById("iframeFilme");

function alterarLinkFilme0() {
  iframeFilme.setAttribute("src", sourceVideos[0]);
}
function alterarLinkFilme1() {
  iframeFilme.setAttribute("src", sourceVideos[1]);
}
function alterarLinkFilme2() {
  iframeFilme.setAttribute("src", sourceVideos[2]);
}
function alterarLinkFilme3() {
  iframeFilme.setAttribute("src", sourceVideos[3]);
}
function alterarLinkFilme4() {
  iframeFilme.setAttribute("src", sourceVideos[4]);
}
function alterarLinkFilme5() {
  iframeFilme.setAttribute("src", sourceVideos[5]);
}
function alterarLinkFilme6() {
  iframeFilme.setAttribute("src", sourceVideos[6]);
}
function alterarLinkFilme7() {
  iframeFilme.setAttribute("src", sourceVideos[7]);
}

function alterarLinkFilme8() {
  iframeFilme.setAttribute("src", sourceVideos[8]);
}

function alterarLinkFilme9() {
  iframeFilme.setAttribute("src", sourceVideos[9]);
}

function alterarLinkFilme10() {
  iframeFilme.setAttribute("src", sourceVideos[10]);
}

function alterarLinkFilme11() {
  iframeFilme.setAttribute("src", sourceVideos[11]);
}
function alterarLinkFilme12() {
  iframeFilme.setAttribute("src", sourceVideos[12]);
}
function alterarLinkFilme13() {
  iframeFilme.setAttribute("src", sourceVideos[13]);
}
function alterarLinkFilme14() {
  iframeFilme.setAttribute("src", sourceVideos[14]);
}

function alterarLinkFilme15() {
  iframeFilme.setAttribute("src", sourceVideos[15]);
}
