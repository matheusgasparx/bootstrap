// DESTRUCTURING COM ARRAY = mais complicado mas saber

function r4nd([min = 0, max = 1000]) {
    if ( min > max) [min, max] = [max, min]
    const valor = Math.random() * (max- min) + min
    return Math.floor(valor)
}

console.log(r4nd([50, 40]))
//ou
console.log(r4nd([992])) // VAI FICAR ENTRE 992 e 1000
//ou
console.log(r4nd([, 10])) // VAI FICAR ASSUMIR O MIN COMO 0
// ou
console.log(r4nd)([]) // NÃO LER
// e
console.log(r4nd)() // NÃO LER