function soma ( ){
    let soma = 0
    for (i in arguments) {          // ARGUMENTS É UMA ARRAY INTERNO DA FUNÇÃO
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))        // forma correta

console.log(soma(1.1, 2.2, ' teste '))  // não fazer com string
console.log(soma('a', 'b', 'c'))