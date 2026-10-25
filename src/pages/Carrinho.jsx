import useCarrinho from "../hooks/useCarrinho";
import { formatarMoeda } from "../utils/moeda";
import ItemCarrinho from "../components/ItemCarrinho"

function Carrinho() {

    const { itens, removerItem, alterarQuantidade } = useCarrinho()

    return (
        <div>
            <h1>Meu carrinho</h1>
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
        </div>
    )
}

export default Carrinho


