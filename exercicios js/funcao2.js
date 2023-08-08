// Armazenando função em uma constante
const imprimirSoma = function (a, b) {
    console.log(a, b)
}

imprimirSoma(2, 3)

// Armazenando uma funca arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const sub = (a, b) => a - b
console.log(sub(2, 3))

const imprimi2 = a => console.log(a)
imprimi2("Legal!!")