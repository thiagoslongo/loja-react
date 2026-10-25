import { useState } from "react";
import { todosDigitosIguais } from "../utils/pagamento.js"

function usePagamento() {

    const [carregando, setCarregando] = useState(false)

    async function processarPagamento(dadosCartao) {
        setCarregando(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setCarregando(false)

        const guardarDadosCartao = dadosCartao.numeroCartao
        const validaDadosCartao = todosDigitosIguais(guardarDadosCartao)

        return validaDadosCartao
    }

    return { carregando, processarPagamento }
}

export { usePagamento }