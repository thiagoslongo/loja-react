import { useParams, Link } from "react-router-dom";
import useProduto from "../hooks/useProduto";
import { formatarMoeda } from "../utils/moeda";

function DetalheProduto() {
  const { id } = useParams();
  const { produto, loading, error } = useProduto(id);

  return (
    <div>
      {loading && <p>Carregando produto</p>}

      {!loading && error && (
            <div>
                <p>Produto não encontrado</p>
                    <Link to="/produtos" >
                        Voltar ao catálogo
                    </Link>
            </div>
            )}

      {produto && <h1>{produto.nome}</h1>}

      {produto && (
        <div>
          <img src={produto.imagem} alt={produto.nome} />
          <p>{formatarMoeda(produto.preco)}</p>
          <p>{produto.descricao}</p>
          <p>{produto.estoque}</p>

          <button>Adicionar ao carrinho</button>
        </div>
      )}

    </div>
  );
}

export default DetalheProduto;
