const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function ( a, b, operacao = soma ) {
    console.log(operacao(a,b))
}

imprimirResultado( 3, 4 ) // pode ser assim, simples
imprimirResultado(3, 4, soma) // pode ser assim, não irá somar porque é igual
imprimirResultado(3, 4, function (x, y) { // mesmo exemplo do anterior mas nesse caso com alteração 
    return x - y                          // no sinal - menos, ai há alteração
})
imprimirResultado(3,4, (x, y) => 3 * 4) // ARROW FUNCTION, multiplica, funciona

// CRIANDO UMA FUNÇÃO DENTRO DE UM OBJETO

const pessoa = {
    falar: function () { // pode usar sem o function()
        console.log('Opa')
    }
}
pessoa.falar()