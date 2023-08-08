const nums = [1, 2, 3, 4, 5]        //  exatamente o mesmo tamanho, nao modifica o orig

// for com proposito
let resultado = nums.map(function(e) { // .map transforma o array em outro array so que 
    return e * 2                       // alterado, por ex multiplicado, dividido, somado
})                                      // transformar em objeto... etcc

console.log(resultado)

const soma10 = e => e + 10          // nesse caso a função arrow => recebe o return, se n
const triplo = e => e * 3           // fica undefined ** função arrow tem return implicito, dentro dele
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` 
// .parseFloat = coloca um flooting-point number
// .toFixed = adiciona casas decimais, nesse caso 2 casas
// .replace = substitui . por , nesse caso
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)