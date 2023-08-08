class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar () {
        console.log(`Eu gosto de ${this.nome}`)
}}

const p1 = new Pessoa ("Canela")
p1.falar()

// OU MODO FACTORY -- usar dessa forma de baixo

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Eu também gosto de ${nome}`)
    }
}

const p2 = criarPessoa("Canela")
    p2.falar()
