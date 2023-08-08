// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco // assim deleta através do ponto (.)
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'bmw',
    valor: 10000,
    proprietario: {
        nome: 'gaspar',
        idade: '26',
        endereco: {
            logradouro: 'manoel',
            numero: '135'
        }
    },
    condutores: [{
        nome: 'noah',
        parentesco: 'filho',
    }],
    
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000 // com ponto acessa os objetos
carro['proprietario']['endereco']['logradouro'] = 'Av minha pomba' // acessando através de string 
console.log(carro)

// delete carro.condutores
delete carro.proprietario.enderecos
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) // assim da undefined porque os condutores do carro foi deletado na linha 37
console.log(carro.condutores.length)