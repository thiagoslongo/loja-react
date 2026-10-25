import { createContext, useState, useMemo } from "react";

export const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);
  const quantidadeTotal = useMemo(
    () => itens.reduce((total, item) => total + item.quantidade, 0),
    [itens],
  );

  const valorTotal = useMemo(
    () =>
      itens.reduce((total, item) => total + item.preco * item.quantidade, 0),
    [itens],
  );

  function adicionarItem(produto) {
    if (produto.estoque <= 0) {
      return;
    }
    const itemExistente = itens.find((item) => item.id === produto.id);
    if (itemExistente) {
      if (itemExistente.quantidade >= itemExistente.estoque) {
        return;
      }
      setItens(
        itens.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        ),
      );
      return;
    }

    setItens([...itens, { ...produto, quantidade: 1 }]);
  }

  function limparCarrinho() {
    setItens([]);
  }

  function removerItem(id) {
    setItens(itens.filter((item) => item.id !== id));
  }

  function alterarQuantidade(id, novaQuantidade) {
    const itemAtual = itens.find((item) => item.id === id);
        if (novaQuantidade < 1 || novaQuantidade > itemAtual.estoque) {
          return; 
        }

    setItens(
      itens.map((item) =>
        item.id === id ? { ...item, quantidade: novaQuantidade } : item,
      ),
    );
  }

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarItem,
        limparCarrinho,
        removerItem,
        alterarQuantidade,
        quantidadeTotal,
        valorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
