const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false //quando não quer que seja enumerado
})                     

console.log(quaseArray[0]) // retorna o indice string

const meuArray = [ 'Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)