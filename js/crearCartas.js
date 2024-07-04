import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearCartas(evento){

    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const url = document.querySelector("[data-url]").value;

    try {
        await conexionAPI.enviarCartas(nombre,precio,url);
    } catch (e) {
        alert(e)
    }

}

formulario.addEventListener('submit', evento => crearCartas(evento));