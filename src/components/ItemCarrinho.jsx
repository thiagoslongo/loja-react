import { formatarMoeda } from "../utils/moeda";

function ItemCarrinho({ nome, preco, quantidade }) {
    
    return (
        <div>
            <div >
                <p>Produto: {nome}</p>
                <p>Preço: {formatarMoeda(preco)}</p>
                <p>Quantidade: {quantidade}</p>
            </div>
        </div>
    )
}

export default ItemCarrinho;