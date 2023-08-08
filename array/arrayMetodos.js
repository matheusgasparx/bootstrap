const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa']
pilotos.pop()   // ..pop = remove o último indice do array
console.log(pilotos)

pilotos.push('verstappen') // .push = inseri um elemento ao último indice
console.log(pilotos)

pilotos.shift() // .shift = remove o primeiro indice
console.log(pilotos)

pilotos.unshift('hamilton') // .unshift = insere no primeiro indice
console.log(pilotos) 

// splice pode adicionar e remover elementos
// .splice = adicionando
pilotos.splice(2, 0, 'bottas', 'massa') // a partir do indice 2, exclui 0 elemento
console.log(pilotos)                    // a partir de alonso

// .splice = removendo
pilotos.splice(3, 1) // nesse caso 3 ( massa ) e remove apenas 1 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // .slice = retorna um novo array
console.log(algunsPilotos1)             // nesse caso a partir do indice 2 (bottas)

const algunsPilotos2 = pilotos.slice(1, 4) // nesse caso ira imprimir o 1 mas não imprime o 4
console.log(algunsPilotos2)                 // sera a partir de aloson até raikkonen