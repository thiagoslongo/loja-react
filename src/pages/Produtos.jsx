import useProdutos from '../hooks/useProdutos'
import ProdutoCard from '../components/ProdutoCard'

function Produtos() {
    
    const { produtos, loading, error } = useProdutos()
    
    return (
        <div>
            <h1>Produtos</h1>

            {loading && <p>Carregando produtos</p>}

            {error && <p>Não foi possível carregar os produtos. Tente novamente mais tarde.</p>}

            {!loading && !error && produtos.length === 0 && (
                <p>Nenhum produto disponível.</p>
            )}

            <div>
                {produtos.map((produto) => (
                    <ProdutoCard
                        key={produto.id}  
                        id={produto.id}
                        nome={produto.nome}
                        preco={produto.preco}
                        categoria={produto.categoria}
                        imagem={produto.imagem}
                    />
                ))}
            </div>   
        </div>
    )
}

export default Produtos