// Super Nintendo
var btn = document.querySelector('#show-or-hide-snes')
var container = document.querySelector('.contain1')

// Evento para o botão ser clicado (mostrar ou ocultar)

btn.addEventListener('click', function() {

    if(container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }

});

// Mega Drive
var btnMega = document.querySelector('#show-or-hide-md')
var containerMega = document.querySelector('.contain2')

// Evento para o botão ser clicado (mostrar ou ocultar)

btnMega.addEventListener('click', function() {
    if(containerMega.style.display === 'block') {
        containerMega.style.display = 'none';
    } else {
        containerMega.style.display = 'block';
    }
});

// Espaço para criar evento de lista de jogos
// respeitando 2 linhas

// Espaço para criar evento de botao clicado (mostrar ou ocultar) 
// respeitando 7 linhas

//Obs: Sujeito a alterações


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