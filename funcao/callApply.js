function getPreco (imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * ( 1 - this.desc) * ( 1 + imposto)}`
}

const produto = {       // dessa forma this acessa do global
    nome: 'pão',
    preco: 10000,
    desc: 0.15,
    getPreco
}  

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // acessa do global
console.log(produto.getPreco()) // dessa forma chama o objeto

// ou dessa forma, utilizando a mesma função mas utilizando o call e apply

const carro = { preco: 10000, desc: 0.2}

console.log(getPreco.call(carro)) // chama la em cima o parametro
console.log(getPreco.apply(carro))


console.log(getPreco.call(carro, 0.20, '$')) // 1º sempre será o contexto, em seguida os parametros
console.log(getPreco.apply(global, [0.20, '$'])) // em um array e pode buscar também no global