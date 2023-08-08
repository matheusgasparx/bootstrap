// criando o .filter2

Array.prototype.filter2 = function(callback) {
    const filterArray = []
    for ( let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
              filterArray.push(this[i])
        }
    }
    return filterArray
}

const produtos = [
    { nome: 'nootbook', preco: 2499, fragil: true },
    { nome: 'iPad pro', preco: 4199, fragil: true },
    { nome: 'copo de vidro', preco: 12.49, fragil: true },
    { nome: 'copo de plastico', preco: 18.99, fragil: false }
]

// ARROW FUNCTION
const preco = products => products.preco >= 2000
const fragil = products => products.fragil // nesse caso ele já retorna se for true 

console.log(produtos.filter2(preco).filter2(fragil))