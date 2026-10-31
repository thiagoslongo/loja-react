import { formatarMoeda } from "../utils/moeda";

const botaoQuantidade =
  "h-8 w-8 rounded border border-[#CEBEA4] bg-white hover:bg-[#CEBEA4]/30 " +
  "disabled:opacity-40 focus-visible:ring-2 focus-visible:ring-[#CEBEA4]";

function ItemCarrinho({
  nome,
  preco,
  quantidade,
  id,
  removerItem,
  alterarQuantidade,
  imagem,
}) {
  const subtotal = preco * quantidade;

  return (
    <li className="flex gap-3 rounded-lg border border-[#CEBEA4] bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
      <img
        className="h-20 w-20 shrink-0 rounded object-contain sm:h-24 sm:w-24"
        src={imagem}
        alt={nome}
      />

      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
        <div className="min-w-0 sm:flex-1">
          <h3 className="line-clamp-2 font-semibold">{nome}</h3>
          <p className="text-sm text-gray-600">{formatarMoeda(preco)}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              className={botaoQuantidade}
              onClick={() => alterarQuantidade(id, quantidade - 1)}
              disabled={quantidade <= 1}
              aria-label={`Diminuir quantidade de ${nome}`}
            >
              -
            </button>
            <span className="w-6 text-center" aria-live="polite">
              {quantidade}
            </span>
            <button
              className={botaoQuantidade}
              onClick={() => alterarQuantidade(id, quantidade + 1)}
              aria-label={`Aumentar quantidade de ${nome}`}
            >
              +
            </button>
          </div>

          <button
            className="text-sm underline"
            onClick={() => removerItem(id)}
            aria-label={`Remover ${nome} do carrinho`}
          >
            Remover
          </button>
        </div>

        <p className="font-semibold sm:w-28 sm:text-right">
          {formatarMoeda(subtotal)}
        </p>
      </div>
    </li>
  );
}

export default ItemCarrinho;