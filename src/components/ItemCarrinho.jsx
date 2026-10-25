import { formatarMoeda } from "../utils/moeda";

function ItemCarrinho({ nome, preco, quantidade, id, removerItem, alterarQuantidade }) {
    
    const subtotal = preco * quantidade

    return (
        <div>
            <div >
                <p>Produto: {nome}</p>
                <p>Preço: {formatarMoeda(preco)}</p>
                <p>Quantidade: {quantidade}</p>
                <button onClick={() => removerItem(id)}>Remover</button>
                <button onClick={() => alterarQuantidade(id, quantidade -1)}>-</button>
                <button onClick={() => alterarQuantidade(id, quantidade +1)}>+</button>
                <p>Subtotal: {formatarMoeda(subtotal)}</p>
            </div>
        </div>
    )
}

export default ItemCarrinho;