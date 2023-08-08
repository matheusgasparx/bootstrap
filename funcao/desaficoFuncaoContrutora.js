// transformar essa class em construtorra

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar () {
        console.log(`Eu gosto de ${this.nome}`)
}}

const p1 = new Pessoa ("Canela")
p1.falar()

// construtora

function Pessoa2 (nome) {
    this.nome = nome

    this.falar = function () {
         console.log(`Eu gosto de ${this.nome}`)
}}

const p2 = new Pessoa2 ("canela")
p1.falar()
