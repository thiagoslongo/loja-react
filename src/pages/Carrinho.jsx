import useCarrinho from "../hooks/useCarrinho";
import { formatarMoeda } from "../utils/moeda";
import ItemCarrinho from "../components/ItemCarrinho"

function Carrinho() {

    const { itens } = useCarrinho()

    return (
        <div>
            <h1>Meu carrinho</h1>
            <div>
                {itens.map((item) => (
                    <ItemCarrinho
                        key={item.id}
                        nome={item.nome}
                        preco={item.preco}
                        quantidade={item.quantidade}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carrinho


