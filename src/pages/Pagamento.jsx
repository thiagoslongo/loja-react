import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { usePagamento } from "../hooks/usePagamento.js";
import useCarrinho from "../hooks/useCarrinho.js";
import { formatarMoeda } from "../utils/moeda.js";

const classeRotulo = "mb-1 block";
const classeCampo = "w-full rounded-md border border-[#CEBEA4] bg-white px-4 py-2";
const classeErro= "mt-1 text-sm text-red-700";

function Pagamento() {

    const { register, handleSubmit, formState: {errors} } = useForm()
    const navegar = useNavigate()
    const { carregando, processarPagamento } = usePagamento()
    const { valorTotal } = useCarrinho();

    async function enviarDadosCartao(dadosCartao) {
        const tentativaGolpe = await processarPagamento(dadosCartao)
        if (tentativaGolpe) {
            navegar('/falha')
        } else {
            navegar('/sucesso')
        }
    }

    return (
        <section className="mx-auto w-full max-w-xl px-4 py-6 sm:py-10">
        <h1 className="mb-4 text-2xl font-semibold">Dados do pagamento</h1>

        <p className="mb-4 text-lg">Total: <strong>{formatarMoeda(valorTotal)}</strong></p>

        <form 
            className="flex flex-col gap-4 rounded-lg border border-[#CEBEA4] bg-white p-4 sm:p-6"
            onSubmit={handleSubmit(enviarDadosCartao)}>
            <div>
                <label className={classeRotulo} htmlFor="numeroCartao">Número Cartão:</label>
                <input type="text" id="numeroCartao" className={classeCampo} 
                    {...register('numeroCartao', {
                        required: 'Número do cartão tem que ter 16 dígitos',
                        pattern: {
                            value: /^\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}$/,
                            message: 'O número do cartão precisa ter 16 dígitos podendo ter espaço ou hífen entre os grupos',
                        }
                    })}
                placeholder="1111 0000 2222 6666"
                />

                {errors.numeroCartao && <p className={classeErro} role="alert">{errors.numeroCartao.message}</p>}
            </div>

            <div>
                <label className={classeRotulo} htmlFor="titularContaCartao">Nome (como está no cartão):</label>
                <input type="text" id="titularContaCartao" className={classeCampo}
                    {...register('titularContaCartao', {
                        required: 'O nome do titular da conta é obrigatório',
                    })}
                    placeholder="Josefino Antonio Silva"
                />

                {errors.titularContaCartao && <p className={classeErro} role="alert">{errors.titularContaCartao.message}</p>}
            </div>

            <div>
                <label className={classeRotulo} htmlFor="validade">Validade MM/AA:</label>
                <input type="text" id="validade" className={classeCampo}
                    {...register('validadeCartao', {
                        required: 'Formato MM/AA entre 01 e 12', 
                        pattern: {
                            value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                            message:'Formato inválido. Use MM/AA (Ex: 12/26)',
                        },
                        validate: (valor) => {
                            const [mesTexto, anoTexto] = valor.split("/");
                            const mesCartao = Number(mesTexto);
                            const anoCartao = Number(anoTexto) + 2000;

                            const hoje = new Date()
                            const mesAtual = hoje.getMonth() +1;
                            const anoAtual = hoje.getFullYear();

                            if (anoCartao < anoAtual || (anoCartao === anoAtual && mesCartao < mesAtual)) {
                                return "Este cartão já expirou";
                            }
                            return true;
                        }
                    })}
                placeholder="12/28"
                />

                {errors.validadeCartao && <p className={classeErro} role="alert">{errors.validadeCartao.message}</p>}
            </div>

            <div>       
                <label className={classeRotulo} htmlFor="codSeguranca">Código de segurança:</label>
                <input type="password" id="codSeguranca" className={classeCampo}
                    {...register('cvvCartao', {
                        required: 'Código de segurança precisa  ter 3 dígitos',
                        pattern: {
                            value: /^\d{3}$/,
                            message:'O código de segurança deve ter exatamente 3 dígitos', 
                        }
                    })}
                placeholder="335"
                />

                {errors.cvvCartao && <p className={classeErro} role="alert">{errors.cvvCartao.message}</p>}
            </div> 

            <button className="w-full rounded-lg bg-[#4B3F33] px-6 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-60"
                disabled={carregando} 
                type="submit"
            >
                Finalizar Compra
            </button>
            {carregando && <p className="text-center text-sm" role="status">Processando compra...</p>}
        </form>
        </section>
    )
}

export default Pagamento;