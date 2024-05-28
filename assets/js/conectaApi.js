async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criarProduto(descricao, preco, imagem) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            descricao: descricao,
            preco: preco,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível criar o Produto")
    }
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

async function deletarProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE"
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível deletar o Produto");
    }
}


export const conectaApi = {
    listaProdutos,
    criarProduto,
    deletarProduto
}
