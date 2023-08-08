Number.prototype.entre = function ( inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function ( nota ) {
    if (nota.entre(9, 10))
        console.log('Quandro de Honra')
    else if(nota.entre(7,8.99))
        console.log('Aprovado')
    else if(nota.entre(4, 6.99))
        console.log('RECUPERAÇÃO')
    else if(nota.entre(0, 3.99))
        console.log('REPROVADO')
    else
        console.log('nota invalida')
    
    }


imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(-1)