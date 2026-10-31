import useProdutos from "../hooks/useProdutos";
import ProdutoCard from "../components/ProdutoCard";
import { useState, useMemo } from "react";
import { filtrarProdutos } from "../utils/busca";

function Produtos() {
  const { produtos, loading, error } = useProdutos();
  const [busca, setBusca] = useState("");
  const produtosFiltrados = useMemo(
    () => filtrarProdutos(produtos, busca),
    [produtos, busca],
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:py-10">
      <h1 className="mb-4 text-2xl font-semibold">Produtos</h1>

      {loading && <p role="alert">Carregando produtos</p>}

      {error && (
        <p role="alert">
          Não foi possível carregar os produtos. Tente novamente mais tarde.
        </p>
      )}

      {!loading && !error && produtos.length === 0 && (
        <p>Nenhum produto disponível.</p>
      )}

      <div>
        {!loading && !error && (
          <div>
            <label className="mb-1 block" htmlFor="busca">Busca:</label>
            <input
              type="text"
              placeholder="Buscar produto pelo nome"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full rounded-md border border-[#CEBEA4] bg-white px-4 py-2 mb-4"
              id="busca"
            />
          </div>
        )}

        {busca && <button className="mb-4 text-sm underline" onClick={() => setBusca("")}>Limpar busca</button>}

        {!loading &&
          !error &&
          produtosFiltrados.length === 0 &&
          produtos.length > 0 && <p>Nenhum produto encontrado</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {produtosFiltrados.map((produto) => (
          <ProdutoCard
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            categoria={produto.categoria}
            imagem={produto.imagem}
            estoque={produto.estoque}
          />
        ))}
      </div>
    </section>
  );
}

export default Produtos;
