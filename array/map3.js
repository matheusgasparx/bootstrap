// criando o .map2

Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "caderno", "preco": 13.90}',
    '{ "nome": "kit de lapis", "preco": 42.22}',
    '{ "nome": "caneta", "preco": 7.50}'
  ]
    
// retornar um array apenas de preços

const precoMateriais = carrinho.map2 (precos => JSON.parse(precos).preco);

console.log(precoMateriais);

const precoMateriais2 = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(precoMateriais2)//.map2(apenasPreco)
console.log(resultado)