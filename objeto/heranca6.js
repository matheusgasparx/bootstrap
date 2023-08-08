function Aula (nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula ('inicio das aulas', 123) // usando operador new cria um novo objeto
const aula2 = new Aula ('fim das aulas', 555) // então irá apontar para função .protoype
console.log(aula1, aula2)

// simulando o new, o que ele faz por baixo dos panos

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.protoype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4) // imprime a mesma coisa.