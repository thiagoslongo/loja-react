import { Link } from "react-router-dom";
import { useEffect } from "react";
import useCarrinho from "../hooks/useCarrinho";

function Sucesso() {
    const { limparCarrinho } = useCarrinho();

    useEffect(() => {
        limparCarrinho()
    }, [])

    return (
        <section className="mx-auto w-full max-w-xl px-4 py-6 sm:py-16 text-center">
            <h1 className="mb-4 text-2xl font-semibold">Parabéns! Sua compra foi aprovada com sucesso!</h1>
            <Link className="inline-block rounded-lg bg-[#4B3F33] px-5 py-2 font-semibold text-white hover:opacity-90" to="/produtos" >
                Voltar aos produtos
            </Link>
        </section>
    )
}

export default Sucesso