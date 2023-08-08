// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

// ou

const { nome: n, idade: i } = pessoa
console.log((n, i))

// O QUE PODE ACONTECER QUANDO NÃO TEM NO OBJETO = NULL UNDEFINED

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

// COMO ACESSAR ATRIBUTOS 

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

// NÃO ACESSAR ATRIBUTO QUE NÃO EXISTE

// const { conta: { ag, num }} = pessoa
// console.log( ag, num )  // erro