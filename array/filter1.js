const produtos = [
    { nome: 'nootbook', preco: 2499, fragil: true },
    { nome: 'iPad pro', preco: 4199, fragil: true },
    { nome: 'copo de vidro', preco: 12.49, fragil: true },
    { nome: 'copo de plastico', preco: 18.99, fragil: false }
]
// mdm web docs                                 
console.log(produtos.filter( function(products) { // .filter = filtra os elementos 
    return true                                   // nesse exemplo por exemplo preco > 1000
}))                                               // fragil === true

// ARROW FUNCTION
const preco = products => products.preco >= 2000
const fragil = products => products.fragil // nesse caso ele já retorna se for true 

console.log(produtos.filter(preco).filter(fragil))

// também da certo assim
const filtrarPreco = produtos.filter(function(products){
    return products.preco > 2000
})
const filtrarFragilidade = produtos.filter(function(products) {
    return products.fragil
})

console.log(filtrarPreco, filtrarFragilidade)