import { Link } from "react-router-dom";
import { formatarMoeda } from "../utils/moeda";
import useCarrinho from "../hooks/useCarrinho"

function ProdutoCard ({ id, nome, preco, categoria, imagem, estoque }) {

    const { adicionarItem } = useCarrinho()

    return (
        <div className="flex flex-col gap-2 rounded-lg border border-[#CEBEA4] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div>
                <img className="w-full h-48 object-contain" src={imagem} alt={nome} />
            </div>
            <div>
                <p className="text-xs uppercase tracking-wide text-[#8A6A2F]">{categoria}</p>
                <p>{nome}</p>
                <p className="text-lg font-semibold">{formatarMoeda(preco)}</p>
                <Link className="text-sm underline hover:text-[#C5A059]" to={`/produtos/${id}`}>Ver detalhes </Link>
            </div>
            <button className="mt-auto w-full cursor-pointer rounded-md bg-[#4A3B32] px-4 py-2 text-white transition hover:bg-[#33271F] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[#4A3B32]" disabled={estoque <= 0} onClick={() => adicionarItem({id, nome, preco, categoria, imagem, estoque})}>
                {estoque <= 0 ? "Indisponível" : "Adicionar ao carrinho"}
            </button>
        </div>
    )
}

export default ProdutoCard;
