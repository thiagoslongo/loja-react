import { Link } from "react-router-dom";
import { useEffect } from "react";
import useCarrinho from "../hooks/useCarrinho";

function Sucesso() {
    const { limparCarrinho } = useCarrinho();

    useEffect(() => {
        limparCarrinho()
    }, [])

    return (
        <div>
            <h1>Parabéns! Sua compra foi aprovada com sucesso!</h1>
            <Link to="/produtos" >
                Voltar aos produtos
            </Link>
        </div>
    )
}

export default Sucesso