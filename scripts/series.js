
let linkFilme1 = document.getElementById("linkFilme1")
let linkFilme2 = document.getElementById("linkFilme2")
let linkFilme3 = document.getElementById("linkFilme3")
let linkFilme4 = document.getElementById("linkFilme4")
let linkFilme5 = document.getElementById("linkFilme5")

let sourceVideos = [];
sourceVideos[0] = "https://embed.warezcdn.net/serie/tt0898266"; //BIG BANG THEORY
sourceVideos[1] = "https://embed.warezcdn.net/serie/tt7631058"; //HOUSEOFDRAGON
sourceVideos[2] = "https://embed.warezcdn.net/serie/tt11640018"; //LA BREA
sourceVideos[3] = "https://embed.warezcdn.net/serie/tt15431326"; //HP CAMP CASAS
sourceVideos[4] = "https://embed.warezcdn.net/serie/tt10234724"; //MOONKNIGHT
sourceVideos[5] = "https://embed.warezcdn.net/serie/tt11198330"; //SPOTIFY
sourceVideos[6] = "https://embed.warezcdn.net/serie/tt7631058"; //LORD OF THE RINS
sourceVideos[7] = "https://embed.warezcdn.net/serie/tt0108778"; //FRIENDS




//ALTERANDO O ATRIBUTO SRC DO ELEMENTO HTML VIDEO
let iframeFilme = document.getElementById("iframeFilme")


function alterarLinkFilme0(){
    iframeFilme.setAttribute('src', "https://embed.warezcdn.net/serie/tt0898266")
}
function alterarLinkFilme1(){
    iframeFilme.setAttribute('src', "https://embed.warezcdn.net/serie/tt11198330")
}
function alterarLinkFilme2(){
    iframeFilme.setAttribute('src', "https://embed.warezcdn.net/serie/tt11640018")
}
function alterarLinkFilme3(){
    iframeFilme.setAttribute('src', "https://embed.warezcdn.net/serie/tt15431326")
}
function alterarLinkFilme4(){
    iframeFilme.setAttribute('src', "https://embed.warezcdn.net/serie/tt10234724")
}
function alterarLinkFilme5(){
	iframeFilme.setAttribute('src', "https://embed.warezcdn.net/serie/tt11564258")
}
function alterarLinkFilme6(){
    iframeFilme.setAttribute('src', "https://embed.warezcdn.net/serie/tt7631058")
}
function alterarLinkFilme7(){
    iframeFilme.setAttribute('src', "https://embed.warezcdn.net/serie/tt0108778")
}





