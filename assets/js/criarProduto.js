// import { conectaApi } from "./conectaApi.js";
// const formulario = document.querySelector("[data-formulario]");

// async function criarProduto(evento) {
//     evento.preventDefault();

//     const url = document.querySelector("[data-url]").value;
//     const nome = document.querySelector("[data-nome]").value;
//     let valor = document.querySelector("[data-valor]").value;

//     valor = parseFloat(valor).toFixed(2);

//     if (isNaN(valor)) {
//         alert("Por favor, insira um valor numérico válido.");
//         return;
//     }
//     try {
//         await conectaApi.criarProduto(nome, valor, url);
//     } catch (e) {
//         alert(e);
//     }
// }

// formulario.addEventListener("submit", evento => criarProduto(evento))

import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const nome = document.querySelector("[data-nome]").value;
    let valor = document.querySelector("[data-valor]").value;

    valor = valor.replace(/\D/g, '');

    while (valor.length < 3) {
        valor = '0' + valor;
    }

    valor = valor.slice(0, -2) + ',' + valor.slice(-2);

    try {
        await conectaApi.criarProduto(nome, valor, url);
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarProduto(evento));
