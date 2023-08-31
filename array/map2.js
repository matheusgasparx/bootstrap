const carrinho = [
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "caderno", "preco": 13.90}',
    '{ "nome": "kit de lapis", "preco": 42.22}',
    '{ "nome": "caneta", "preco": 7.50}'
  ]
    
// retornar um array apenas de preços

const precoMateriais = carrinho.map (precos => JSON.parse(precos).preco);

console.log(precoMateriais);

const precoMateriais2 = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(precoMateriais2).map(apenasPreco)
console.log(resultado)


const preco = products => products.preco >= 2000
const fragil = products => products.fragil // nesse caso ele já retorna se for true 

console.log(resultado.filter(preco).filter(fragil))