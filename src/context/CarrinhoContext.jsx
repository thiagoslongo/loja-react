import { createContext, useState } from "react"

export const CarrinhoContext =  createContext()

export function CarrinhoProvider( {children }) {

    const [itens, setItens] = useState([]); 

    return (
        <CarrinhoContext.Provider value={{ itens }}>
            {children}
        </CarrinhoContext.Provider>
    )

}

    
