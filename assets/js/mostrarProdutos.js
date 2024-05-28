import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(id, imagem, descricao, preco) {
    const produto = document.createElement("div");
    produto.innerHTML =

        `

        <article class="card" style="--isNew: true">
        <div class="author">
            <div><img src="assets/img/logo_A.png" alt=""></div>
            <div>
                <div class="name">Alura</div>Geek
            </div>
        </div>
        <div class="image"><img src="${imagem}" alt=""></div>
        <div class="info">
            <div class="name">${descricao}</div>
            <price>R$${preco}</price>
        </div>
        <div class="more">
            <div class="buttons">
                <button>🛒</button><button>Buy Now</button><button data-id="${id}" class="delete-btn">🗑</button>
            </div>
        </div>
    </article>

         `

    return produto;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.id, elemento.imagem, elemento.descricao, elemento.preco)))
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de Produtos</h2>`
    }
}

listaProdutos();

// DELETAR O PRODUTO

document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const id = event.target.getAttribute('data-id');
        try {
            await conectaApi.deletarProduto(id);
            event.target.closest('article').remove();
        } catch (erro) {
            console.error("Erro ao deletar o produto:", erro);
        }
    }
});
