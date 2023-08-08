console.log(typeof Array, typeof new Array, typeof [])
                // instancia através da função array, tornando um OBJ com 3 elementos
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos', 'Ana']
console.log(aprovados[0]) // so bia
console.log(aprovados[1]) // so carlos
console.log(aprovados[2]) // so ana
console.log(aprovados[3])  // undefined

aprovados[3] = 'Paulo' // dessa forma adiciona o indice 3
aprovados.push('Abia') // .push = puxa o elemento para o fim do indice
console.log(aprovados.length) // .length = ler o tamanho do array, quantos elementos

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // .sort = organiza o array por ordem alfabetica
console.log(aprovados)

delete aprovados[1] // deleta mas não reorganiza
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0) // .splice = remover elemento do Array e adiciona
console.log(aprovados) // o primeiro elemento seleciona o indice que ira ser trabalhado