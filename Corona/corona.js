"use strict";

let BD = [
    {
        "uf": "Brazil",
        "suspeitos": "<div class = 'spiner cor1'> </div>",
        "confirmados": "<div class = 'spiner cor2'> </div>",
        "mortes": "<div class = 'spiner cor3'> </div>"
    }
];

const showData = (data) => {
    const panel = `
        <div class = "estado">
            ${data.uf}
        </div>

        <div class = "card suspeitos"> 
            <div class = "numeros"> 
                ${data.suspeitos}
            </div>

            <div class = "titulo">
                SUSPEITOS
            </div>
        </div>

        <div class = "card confirmados"> 
            <div class = "numeros"> 
                ${data.confirmados}
            </div>

            <div class = "titulo">
                CONFIRMADOS
            </div>
        </div>

        <div class = "card mortes"> 
            <div class = "numeros"> 
                ${data.mortes}
            </div>

            <div class = "titulo">
                MORTES  
            </div>
        </div>
    `;

    const $container = document.createElement('div');
    $container.innerHTML = panel;

    const $info = document.getElementById('info');

    $info.removeChild($info.firstChild);
    $info.appendChild($container);


};

const getCoronaBrazil = async () => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
    const getApi = await fetch(url);
    const json = await getApi.json();


    const Brazil = await {

            "uf": "Brazil",
            "suspeitos": json.data.cases,
            "confirmados": json.data.confirmed,
            "mortes": json.data.deaths


    }

    showData(Brazil);
}

const getCoronaState = async () => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/';
    const getApi = await fetch(url);
    const json = await getApi.json();
    BD = await json.data;
}

const findState = (evento) => {
    const ufMap = evento.target.parentNode.id;
    const getState = BD.find(state => state.uf.match(ufMap));
    const state = {
        "uf": getState.uf,
        "suspeitos": getState.suspects,
        "confirmados": getState.cases,
        "mortes": getState.deaths

    }
    showData(state);
}

document.querySelector('svg').addEventListener('click', findState);


showData(BD[0]);
getCoronaState();
getCoronaBrazil ();
