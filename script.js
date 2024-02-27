// Super Nintendo
var btn = document.querySelector('#show-or-hide-snes')
var container = document.querySelector('.containsnes')

// Adiciona um ouvinte de evento para o botão
document.getElementById("show-or-hide-snes").addEventListener("click", function() {
    // Abre uma nova janela do navegador com a página relacionada ao Super Nintendo
    window.open("paginas/pagsnes/pagsnes.html", "_blank");
});

// Mega Drive
var btnMega = document.querySelector('#show-or-hide-md')
var containerMega = document.querySelector('.containmd')

// Adiciona um ouvinte de evento para o botão
document.getElementById("show-or-hide-md").addEventListener("click", function() {
    // Abre uma nova janela do navegador com a página relacionada ao Super Nintendo
    window.open("paginas/pagmd/pagmd.html", "_blank");
});

// Nintendo
var btnNES = document.querySelector('#show-or-hide-nes');
var containerNES = document.querySelector('.containnes');

// Adiciona um ouvinte de evento para o botão
document.getElementById("show-or-hide-nes").addEventListener("click", function() {
    // Abre uma nova janela do navegador com a página relacionada ao Super Nintendo
    window.open("paginas/pagnes/pagnes.html", "_blank");
});

// Sega Master System
var btnSMS = document.querySelector('#show-or-hide-sms');
var containerSMS = document.querySelector('.contain4');

// Adiciona um ouvinte de evento para o botão
document.getElementById("show-or-hide-sms").addEventListener("click", function() {
    // Abre uma nova janela do navegador com a página relacionada ao Super Nintendo
    window.open("paginas/pagsms/pagsms.html", "_blank");
});

// Playstation
var btnPSOne = document.querySelector('#show-or-hide-psone');
var containerPSOne = document.querySelector('.contain5');

// Adiciona um ouvinte de evento para o botão
document.getElementById("show-or-hide-psone").addEventListener("click", function() {
    // Abre uma nova janela do navegador com a página relacionada ao Super Nintendo
    window.open("paginas/pagpsone/pagpsone.html", "_blank");
});

// Espaço para criar evento de lista de jogos
// respeitando 2 linhas

// Espaço para criar evento de botao clicado (mostrar ou ocultar) 
// respeitando 7 linhas

//Obs: Sujeito a alterações



// Função para chamar o jogo e ver no site HowLongToBeat
function getGame(gameName){
    let url = 'https://www.howlongtobeat.com/api/search'

    let options = {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Content-Type': 'application/json; charset=utf-8',
            Referer: 'https://howlongtobeat.com/',
            Origin: 'https://howlongtobeat.com/'
        },
        body: JSON.stringify({
            "searchType": "games",
            "searchTerms": [
                gameName
            ],
            "searchPage": 1,
            "size": 20,
            "searchOptions": {
                "games": {
                    "userId": 0,
                    "platform": "",
                    "sortCategory": "popular",
                    "rangeCategory": "main",
                    "rangeTime": {
                        "min": 0,
                        "max": 0
                    },
                    "gameplay": {
                        "perspective": "",
                        "flow": "",
                        "genre": ""
                    },
                    "modifier": ""
                },
                "users": {
                    "sortCategory": "postcount"
                },
                "filter": "",
                "sort": 0,
                "randomizer": 0
            }
        })
    }

    fetch(url, options)
    .then(res => res.json())
    .then(data => console.log(data))
    .then(err => console.log(err))
}