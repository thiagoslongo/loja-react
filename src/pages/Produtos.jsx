import useProdutos from '../hooks/useProdutos'
import ProdutoCard from '../components/ProdutoCard'
import { useState, useMemo } from 'react'
import { filtrarProdutos } from '../utils/busca'

function Produtos() {
    
    const { produtos, loading, error } = useProdutos()
    const [busca, setBusca] = useState('')
    const produtosFiltrados = useMemo (() => filtrarProdutos(produtos, busca), [produtos, busca])
    
    return (
        <div>
            <h1>Produtos</h1>
           
            {loading && <p>Carregando produtos</p>}

            {error && <p>Não foi possível carregar os produtos. Tente novamente mais tarde.</p>}

            {!loading && !error && produtos.length === 0 && (
                <p>Nenhum produto disponível.</p>
            )}

            <div>
            {!loading && !error &&<input 
                type='text'
                placeholder='Buscar produto pelo nome'
                value={busca}
                onChange={(e) => setBusca(e.target.value)} />}
            
            {busca && <button onClick={() => setBusca('')}>Limpar busca</button>}

            {!loading && !error && produtosFiltrados.length === 0 && produtos.length > 0 && (
                <p>Nenhum produto encontrado</p>
            )}
            </div>

            <div>
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
        </div>
    )
}

export default Produtos