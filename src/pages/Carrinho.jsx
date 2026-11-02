import useCarrinho from "../hooks/useCarrinho";
import { formatarMoeda } from "../utils/moeda";
import ItemCarrinho from "../components/ItemCarrinho";
import { Link } from "react-router-dom";

function Carrinho() {
  const { itens, removerItem, alterarQuantidade, valorTotal, limparCarrinho } = useCarrinho();

  function aoLimpar() {
    if (window.confirm("Deseja remover todos os itens do carrinho?")) {
      limparCarrinho();
    }
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-6 sm:py-10">
      <h1 className="mb-4 text-2xl font-semibold sm:mb-6">Meu carrinho</h1>

      {itens.length === 0 && (
        <div className="flex flex-col items-start gap-4 rounded-lg border border-[#CEBEA4] bg-white p-6">
          <p>Seu carrinho está vazio</p>
          <Link
            to="/produtos"
            className="rounded-lg bg-[#4B3F33] px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Ver Produtos
          </Link>
        </div>
      )}

      {itens.length > 0 && (
        <>
          <div className="mb-3 flex justify-end">
            <button
              type="button"
              onClick={aoLimpar}
              className="cursor-pointer rounded-md border border-red-700 px-4 py-2 text-sm text-red-700 transition hover:bg-red-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
            >
              Limpar carrinho
            </button>
          </div>
          <ul className="flex flex-col gap-3 sm:gap-4">
            {itens.map((item) => (
              <ItemCarrinho
                key={item.id}
                id={item.id}
                nome={item.nome}
                preco={item.preco}
                quantidade={item.quantidade}
                removerItem={removerItem}
                alterarQuantidade={alterarQuantidade}
                imagem={item.imagem}
              />
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-4 rounded-lg border border-[#CEBEA4] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg">
              Valor total: <strong>{formatarMoeda(valorTotal)}</strong>
            </p>
            <Link
              to="/pagamento"
              className="rounded-lg bg-[#4B3F33] px-6 py-3 text-center font-semibold text-white hover:opacity-90"
            >
              Finalizar compra
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

export default Carrinho;