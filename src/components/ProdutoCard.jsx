import { Link } from "react-router-dom";
import { formatarMoeda } from "../utils/moeda";

function ProdutoCard ({ id, nome, preco, categoria, imagem }) {

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
            <button>Adicionar ao carrinho</button>
        </div>
    )
}

export default ProdutoCard;


