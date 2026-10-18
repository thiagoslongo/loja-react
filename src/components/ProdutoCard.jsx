import { Link } from "react-router-dom";

function ProdutoCard ({ id, nome, preco, categoria, imagem }) {

    return (
        <div>
            <div>
                <img src={imagem} alt={nome} />
            </div>
            <div>
                <p>Categoria: {categoria}</p>
                <p>Produto: {nome}</p>
                <p>Preço Unitário: {preco}</p>
                <Link to={`/produtos/${id}`}>Ver detalhes </Link>
            </div>
            <button>Adicionar ao carrinho</button>
        </div>
    )
}

export default ProdutoCard;


