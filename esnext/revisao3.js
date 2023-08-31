// ES8: Object.values / Object.entries
const objj = { a: 1, b: 2, c: 3}
console.log(Object.values(objj)) // retorna apenas valores
console.log(Object.entries(objj)) // retorna chave e valor

// melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'é sapatão'
    }
}

console.log(pessoa.nome, pessoa.ola())

// class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'auau!'
    }
}

console.log(new Cachorro().falar())