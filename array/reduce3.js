// criando o .reduce2

Array.prototype.reduce2 = function(callback, valorInicial) {
    let indiceInicial = valorInicial ? 0 : 1
    let acumulador  = valorInicial || this [0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [ 10, 20, 30, 40, 50]
console.log(nums.reduce2(soma, 21))