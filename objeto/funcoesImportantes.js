const pessoa = { 
    nome: 'noah',
    idade: 1,
    peso: 5
}

console.log(Object.keys(pessoa)) // .keys = pega todas as chaves do objeto ( nome, idade, peso)
console.log(Object.values(pessoa)) // .values = pega todos os valores do objeto ( noah, 1, 5)
console.log(Object.entries(pessoa)) // .entries = pega todos os dados e retorna em array de arrays

Object.entries(pessoa).forEach(([chave, valor]) => { // utilizando forEach percorre pelo array entries
    console.log(`${chave}: ${valor}`)               // que foi selecionado. nessa opção destructuring
}) // usando [] é um operador destructuring

Object.defineProperty(pessoa, 'dataNascimento', { // define a propriedade do objeto
    eunumerable: true,// se irá ser listada      // propriedade que não pode ser alterada
    writable: false, // se ira ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = ' 01/01/2017' // não irá ser alterado
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign incluido no ECMAScript 2015
const dest = { a: 1 }
const o1 = { b: 10}
const o2 = { c: 4, a: 10}       // concatenção de todos os elementos nesse metodo .assign
const obj = Object.assign(dest, o1, o2) // o atributo a será sobrescrito nesse metodo

Object.freeze(obj) //.freeze não permite alterar os dados
obj.c = 1234
console.log(obj)

