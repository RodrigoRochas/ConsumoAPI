"use strict";

let DB = 
[
    {
        "country": "Mundo",
        "suspeitos": "<div class='spiner blue'></div>",
        "confirmados": "<div class='spiner yellow'></div>",
        "mortes": "<div class='spiner red'></div>"
    }
];

const showData = ( data ) => {
    const panel = `
        <div class='paises'>
            ${data.country}
        </div>

        <div class='card suspeitos'>
            <div class='numeros'>
                ${data.suspeitos}
            </div>

            <div class='titulo'>
                CASOS
            </div>

        </div>


        <div class='card confirmados'>
            <div class='numeros'>
                ${data.confirmados}
            </div>

            <div class='titulo'>
                CONFIRMADOS
            </div>

        </div>

        <div class='card mortes'>
            <div class='numeros'>
                ${data.mortes}
            </div>

            <div class='titulo'>
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


const getCoronaMundo = async () => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/countries';
    const getAPI = await fetch (url);
    const json = await getAPI.json(); 
    const mundo = await {

        "country": "Brazil",
        "suspeitos": json.data.cases,
        "confirmados": json.data.confirmed,
        "mortes": json.data.deaths 
    }

    showData(mundo);
}

const getCoronaPaises = async () => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/countries';
    const getAPI = await fetch (url);
    const json = await getAPI.json(); 
    DB = await json.data;

}

const findPais = (evento) => {
    const countryMAP = evento.target.parentNode.id;
    alert(countryMAP);
    const getPais = DB.find( country => country.country.match(countryMAP));
    const pais = {
        "country": getPais.country,
        "suspeitos": getPais.cases,
        "confirmados": getPais.confirmed,
        "mortes": getPais.deaths
    }

    showData(pais);
}

document.querySelector('svg').addEventListener('click', findPais);

showData(DB[0]);
getCoronaPaises();
getCoronaMundo();

