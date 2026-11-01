import { Link } from "react-router-dom";

function Falha() {
    return (
        <section className="mx-auto w-full max-w-xl px-4 py-6 sm:py-16 text-center">
            <h1 className="mb-4 text-2xl font-semibold">Não foi possível processar seu pagamento</h1>
            <p className="mb-4 text-2xl font-semibold text-red-700" role="alert">tentativa de golpe</p>
            <Link className="inline-block rounded-lg bg-[#4B3F33] px-5 py-2 font-semibold text-white hover:opacity-90" to="/pagamento" >
                Tentar novamente
            </Link>
        </section>
    )
}

export default Falha;