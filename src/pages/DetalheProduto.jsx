import { useParams, Link } from "react-router-dom";
import useProduto from "../hooks/useProduto";
import { formatarMoeda } from "../utils/moeda";
import useCarrinho from "../hooks/useCarrinho";

function DetalheProduto() {
  const { id } = useParams();
  const { produto, loading, error } = useProduto(id);
  const { adicionarItem } = useCarrinho()

  return (
    <section className="mx-auto w-full max-w-5xl px-4">
      {loading && <p role="status" className="py-16 text-center">Carregando produto</p>}

      {!loading && error && (
            <div className="mx-auto max-w-md py-16 text-center">
                <p className="mb-4 text-xl font-semibold" role="alert">Produto não encontrado</p>
                    <Link className="inline-block rounded-md bg-[#4A3B32] px-4 py-2 text-white hover:bg-[#33271F]" to="/produtos" >
                        Voltar ao catálogo
                    </Link>
            </div>
            )}

      {produto && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-5xl items-center py-8">
          <div className="rounded-lg border border-[#CEBEA4] bg-white shadow-sm p-2">
            <img className="w-full h-[28rem] object-contain" src={produto.imagem} alt={produto.nome} />
          </div>
          <div className="flex flex-col gap-3"> 
            <h1 className="text-3xl font-semibold">{produto.nome}</h1>
            <p className="text-2xl font-semibold text-[#8A6A2F]">{formatarMoeda(produto.preco)}</p>
            <p className="border-t border-[#CEBEA4] pt-4">{produto.descricao}</p>
            <p className="text-sm text-[#7A6A5F]">{produto.estoque} unidades em estoque</p>

            <button className="mt-4 w-full rounded-md bg-[#4A3B32] px-4 py-2 text-white hover:bg-[#33271F] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#4A3B32]" disabled={produto.estoque <= 0} onClick={() => adicionarItem(produto)}>
              {produto.estoque <= 0 ? "Indisponível" : "Adicionar ao carrinho"}
            </button>
          </div>
        </div>
      )}

    </section>
  );
}

export default DetalheProduto;


