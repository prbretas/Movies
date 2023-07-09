
let linkFilme1 = document.getElementById("linkFilme1")
let linkFilme2 = document.getElementById("linkFilme2")
let linkFilme3 = document.getElementById("linkFilme3")
let linkFilme4 = document.getElementById("linkFilme4")
let linkFilme5 = document.getElementById("linkFilme5")

let sourceVideos = [];
sourceVideos[0] = "https://embed.warezcdn.net/serie/tt0433740"; //SHURATO
sourceVideos[1] = "https://embed.warezcdn.net/serie/tt0185133"; //YUYU HAKUSHO
sourceVideos[2] = "https://embed.warezcdn.net/serie/tt0144069"; //SFVII
sourceVideos[3] = "https://embed.warezcdn.net/serie/tt0161952"; //CDZ
sourceVideos[4] = "https://embed.warezcdn.net/serie/tt0214341"; //DBZ

//ALTERANDO O ATRIBUTO SRC DO ELEMENTO HTML VIDEO
let iframeFilme = document.getElementById("iframeFilme")


function alterarLinkFilme0(){
    iframeFilme.setAttribute('src', "https://embed.warezcdn.net/serie/tt0433740")
}
function alterarLinkFilme1(){
    iframeFilme.setAttribute('src', "https://embed.warezcdn.net/serie/tt0185133")
}
function alterarLinkFilme2(){
    iframeFilme.setAttribute('src', "https://embed.warezcdn.net/serie/tt0144069")
}
function alterarLinkFilme3(){
    iframeFilme.setAttribute('src', "https://embed.warezcdn.net/serie/tt0161952")
}
function alterarLinkFilme4(){
    iframeFilme.setAttribute('src', "https://embed.warezcdn.net/serie/tt0214341")
}



function alerta()
{
    alert("Boa tarde!");
}