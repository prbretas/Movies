let PlutoBtn = document.getElementById("PlutoBtn")
let iframePlutoTv = document.getElementById("iframePlutoTV")
let iframeCanal = document.getElementById("iframeCanal")

let sourceVideos = [];
sourceVideos[0] = "https://pluto.tv/pt/live-tv"; //PLUTOTV
sourceVideos[1] = "https://embedflix.online/tv/"; //MENU CANAIS


function abrirPlutoTv(){
    iframePlutoTv.setAttribute("src", sourceVideos[0]);
}

function selecionarCanal(){
    iframeCanal.setAttribute("src", sourceVideos[1]);
}



function executarAposUmSegundo() {
    setTimeout(function() {
        // Coloque aqui o código que deseja executar após 1 segundo
        console.log("Ação executada após 1 segundo.");
    }, 1000); // 1000 milissegundos = 1 segundo
}

// Adicione essa função como um event listener para o clique do botão
document.getElementsByClassName("button").addEventListener("click", executarAposUmSegundo);
