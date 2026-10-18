import { Link } from "react-router-dom"

function NaoEncontrada() {
    return (
        <div>
            <h1>Página não encontrada</h1>
            <p>O endereço que você acessou não existe.</p>
            <Link to="/produtos">Voltar para os produtos</Link>
        </div>
    )
}

export default NaoEncontrada