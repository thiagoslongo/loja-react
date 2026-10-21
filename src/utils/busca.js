export function filtrarProdutos(produtos, termo) {

        const resultadoBusca = produtos.filter(produto =>
            produto.nome.toLowerCase().includes(termo.toLowerCase()))

    return resultadoBusca
}