import { createContext, useState } from "react"

export const CarrinhoContext =  createContext()

export function CarrinhoProvider( {children }) {

    const [itens, setItens] = useState([]); 

    function adicionarItem(produto) {
        setItens([
            ...itens,
            { ...produto, quantidade: 1 }
        ])
    }

    function limparCarrinho() {
        setItens([])
    }

    function removerItem(id) {
        setItens(itens.filter(item =>
            item.id !== id))
    }

    function alterarQuantidade(id, novaQuantidade) {          
            setItens(itens.map(item => (
            item.id === id ? {...item, quantidade: novaQuantidade} : item
        )))
    }

    return (
        <CarrinhoContext.Provider value={{ itens, adicionarItem, limparCarrinho, removerItem, alterarQuantidade }}>
            {children}
        </CarrinhoContext.Provider>
    )

}

