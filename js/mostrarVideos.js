import { conexionAPI } from "./conexionAPI.js";


const cards = document.querySelector('[data-productos]');

function crearCard(nombre,precio,url) {
    const cartas = document.createElement('div');
    cartas.className = 'card';
    cartas.innerHTML = `
            <img src="${url}" />
            <div class="card-container--info">
              <p>${nombre}</p>
              <div class="card-container--value">
                <p>$ ${precio}</p>
                <img src="./img/trash.svg" />
              </div>
            </div>`;

    return cartas;
}

async function listarCartas(){
    const listaAPI = await conexionAPI.listarCartas();
    listaAPI.forEach(cartas => cards.appendChild(crearCard(cartas.nombre,cartas.precio,cartas.url)));
}

listarCartas()