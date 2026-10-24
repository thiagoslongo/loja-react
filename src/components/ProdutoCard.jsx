import { Link } from "react-router-dom";
import { formatarMoeda } from "../utils/moeda";
import useCarrinho from "../hooks/useCarrinho"

function ProdutoCard ({ id, nome, preco, categoria, imagem, estoque }) {

    const { adicionarItem } = useCarrinho()

    return (
        <div>
            <div>
                <img src={imagem} alt={nome} />
            </div>
            <div>
                <p>{categoria}</p>
                <p>{nome}</p>
                <p>{formatarMoeda(preco)}</p>
                <Link to={`/produtos/${id}`}>Ver detalhes </Link>
            </div>
            <button onClick={() => adicionarItem({id, nome, preco, categoria, imagem, estoque})}>
                Adicionar ao carrinho
            </button>
        </div>
    )
}

export default ProdutoCard;
