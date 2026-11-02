import { Link } from "react-router-dom";
import { formatarMoeda } from "../utils/moeda";
import useCarrinho from "../hooks/useCarrinho"
import PropTypes from "prop-types";
import { useState } from "react";

function ProdutoCard ({ id, nome, preco, categoria, imagem, estoque }) {

    const { adicionarItem, itens } = useCarrinho();
    const [adicionando, setAdicionando] = useState(false);
    const itemNoCarrinho = itens.find((item) => item.id === id);
    const quantidadeNoCarrinho = itemNoCarrinho?.quantidade ?? 0;
    const limiteAtingido = quantidadeNoCarrinho >= estoque ;

    function aoAdicionar() {
        adicionarItem({ id, nome, preco, categoria, imagem, estoque });
        setAdicionando(true);

        setTimeout(() => {
            setAdicionando(false);
        }, 1500);
    }

    const indisponivel = estoque <= 0 || limiteAtingido;

    let textoBotao = "Adicionar ao carrinho";
    if (indisponivel) {
        textoBotao = "Indisponível";
    } else if (adicionando) {
        textoBotao = "Adicionado";
    }

    return (
        <div className="flex h-full flex-col gap-2 rounded-lg border border-[#CEBEA4] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div>
                <img className="w-full h-48 object-contain" src={imagem} alt={nome} />
            </div>
            <div>
                <p className="text-xs uppercase tracking-wide text-[#8A6A2F]">{categoria}</p>
                <p className="line-clamp-2 min-h-12">{nome}</p>
                <p className="text-lg font-semibold">{formatarMoeda(preco)}</p>
                <Link className="text-sm underline hover:text-[#8A6A2F]" to={`/produtos/${id}`}>Ver detalhes </Link>
            </div>
            <button className="mt-auto w-full cursor-pointer rounded-md bg-[#4A3B32] px-4 py-2 text-white transition hover:bg-[#33271F] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[#4A3B32]"
                disabled={indisponivel || adicionando}
                onClick={aoAdicionar}
            >                          
               {textoBotao}
            </button>
        </div>
    )
}

ProdutoCard.propTypes = {
    id: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    categoria: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    estoque: PropTypes.number.isRequired
}

export default ProdutoCard;
