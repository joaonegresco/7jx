let produto =
{
    nome,
    categoria,
    quantidade,
    preco
}

let produtos = [];

const formulario = document.getElementById("formProd");

formulario.addEventListener
    (
        "submit",
        cadastrarProd
    );

function cadastrarProd(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;

    let categoria = document.getElementById("categoria").value

    let quantidade = document.getElementById("quantidade").value;

    let preco = document.getElementById("preco").value;

    let produto =
    {
        nome,
        categoria,
        quantidade,
        preco
    }

    produtos.push(produto);

    const tabela = document.getElementById("tabelaProd");
    produtos.forEach (
    
            tabela.innerHTML += `
            <tr>
                <td>${produto.nome}</td>
                <td>${produto.categoria}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.preco}</td>
                <td><a href="#">Excluir</a></td>
            </tr> `
    )        

}