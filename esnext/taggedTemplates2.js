function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}` // se o valor não for numero volta apenas isso
        // isNan = se não for numero                                // se for numero retorna toFixed
        resultado.push(partes[indice], valor)
    })                       // i = 0
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)