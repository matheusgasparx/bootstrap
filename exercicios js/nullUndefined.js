let valor // nao inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor) //sempre usar NULL quando quiser zerar uma váriavel/referência
//console.log(valor.tostring()) // ERRO!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //sempre utilizar NULL
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)