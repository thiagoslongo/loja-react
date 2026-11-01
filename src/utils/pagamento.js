function limparCartao(numeroCartao) {
    const digitosLimpo = numeroCartao.replace(/[- ]/g, "")
        return digitosLimpo
}

function todosDigitosIguais(numeroCartao) {
    const numeroLimpo = limparCartao(numeroCartao)
    const listaDigitos = numeroLimpo.split("")
    const todosIguais = listaDigitos.every(function(digitoAtual) {
        return digitoAtual === listaDigitos[0]
    })

    return todosIguais
}

export { limparCartao, todosDigitosIguais }