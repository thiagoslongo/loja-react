import { Link } from "react-router-dom"

function NaoEncontrada() {
    return (
        <section className="mx-auto w-full max-w-xl px-4 py-6 sm:py-16 text-center">
            <h1 className="mb-4 text-2xl font-semibold">Página não encontrada</h1>
            <p className="mb-6 text-lg">O endereço que você acessou não existe.</p>
            <Link className="inline-block rounded-lg bg-[#4B3F33] px-5 py-2 font-semibold text-white hover:opacity-90" to="/produtos">Voltar para os produtos</Link>
        </section>
    )
}

export default NaoEncontrada