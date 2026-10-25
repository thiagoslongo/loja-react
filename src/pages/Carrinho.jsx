import useCarrinho from "../hooks/useCarrinho";
import { formatarMoeda } from "../utils/moeda";
import ItemCarrinho from "../components/ItemCarrinho";
import { Link } from "react-router-dom";

function Carrinho() {
  const { itens, removerItem, alterarQuantidade, valorTotal } = useCarrinho();

  return (
    <div>
      <h1>Meu carrinho</h1>

      {itens.length === 0 && (
        <div>
          <p>Seu carrinho está vazio</p>
          <Link to="/produtos">Ver Produtos</Link>
        </div>
      )}

      <div>
        {itens.map((item) => (
          <ItemCarrinho
            key={item.id}
            id={item.id}
            nome={item.nome}
            preco={item.preco}
            quantidade={item.quantidade}
            removerItem={removerItem}
            alterarQuantidade={alterarQuantidade}
          />
        ))}
      </div>
      {itens.length > 0 && (
        <div>
          <p>Valor Total: {formatarMoeda(valorTotal)}</p>
          <Link to="/pagamento">Finalizar compra</Link>
        </div>
      )}
    </div>
  );
}
export default Carrinho;
