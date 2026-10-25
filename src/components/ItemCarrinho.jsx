import { formatarMoeda } from "../utils/moeda";

function ItemCarrinho({ nome, preco, quantidade, id, removerItem, alterarQuantidade }) {
    
    return (
        <div>
            <div >
                <p>Produto: {nome}</p>
                <p>Preço: {formatarMoeda(preco)}</p>
                <p>Quantidade: {quantidade}</p>
                <button onClick={() => removerItem(id)}>Remover</button>
                <button onClick={() => alterarQuantidade(id, quantidade -1)}>-</button>
                <button onClick={() => alterarQuantidade(id, quantidade +1)}>+</button>
            </div>
        </div>
    )
}

export default ItemCarrinho;