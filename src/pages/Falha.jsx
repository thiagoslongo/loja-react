import { Link } from "react-router-dom";

function Falha() {
    return (
        <div>
            <h2>Não foi possível processar seu pagamento</h2>
            <p>tentativa de golpe</p>
            <Link to="/pagamento" >
                Tentar novamente
            </Link>
        </div>
    )
}

export default Falha;