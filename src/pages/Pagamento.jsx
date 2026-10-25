import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { usePagamento } from "../hooks/usePagamento.js";
import useCarrinho from "../hooks/useCarrinho.js";
import { formatarMoeda } from "../utils/moeda.js";

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
        <div>
        <h2>Dados do pagamento</h2>

        <p>Total: {formatarMoeda(valorTotal)}</p>

        <form onSubmit={handleSubmit(enviarDadosCartao)}>
            <div>
                <label htmlFor="numeroCartao">Número Cartão:</label>
                <input type="text" id="numeroCartao" 
                    {...register('numeroCartao', {
                        required: 'Número do cartão tem que ter 16 dígitos',
                        pattern: {
                            value: /^\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}$/,
                            message: 'O número do cartão precisa ter 16 dígitos podendo ter espaço ou hífen entre os grupos',
                        }
                    })}
                placeholder="1111 0000 2222 6666"
                />

                {errors.numeroCartao && <p role="alert">{errors.numeroCartao.message}</p>}
            </div>

            <div>
                <label htmlFor="titularContaCartao">Nome (como está no cartão):</label>
                <input type="text" id="titularContaCartao"
                    {...register('titularContaCartao', {
                        required: 'O nome do titular da conta é obrigatório',
                    })}
                    placeholder="Josefino Antonio Silva"
                />

                {errors.titularContaCartao && <p role="alert">{errors.titularContaCartao.message}</p>}
            </div>

            <div>
                <label htmlFor="validade">Validade MM/AA:</label>
                <input type="text" id="validade"
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

                {errors.validadeCartao && <p role="alert">{errors.validadeCartao.message}</p>}
            </div>

            <div>       
                <label htmlFor="codSeguranca">Código de segurança:</label>
                <input type="password" id="codSeguranca"
                    {...register('cvvCartao', {
                        required: 'Código de segurança precisa  ter 3 dígitos',
                        pattern: {
                            value: /^\d{3}$/,
                            message:'O código de segurança deve ter exatamente 3 dígitos', 
                        }
                    })}
                placeholder="335"
                />

                {errors.cvvCartao && <p role="alert">{errors.cvvCartao.message}</p>}
            </div> 

            <button className="btn-finalizar" disabled={carregando} type="submit">Finalizar Compra</button>
            {carregando && <p>Processando compra...</p>}
        </form>
        </div>
    )
}

export default Pagamento;