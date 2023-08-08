// POUCO USADO MAS APRENDER if else em SWITCH

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
            case 10:
            case 9:
        console.log('QUADRO DE HONRA')
        break
            case 8:
            case 7:
        console.log('APROVADO')
        break
            case 6: case 5: case 4:
        console.log('RECUPERAÇÃO')
        break
            case 3: case 2: case 1:
        console.log('REPROVADO')
        break
            default:
        console.log('nota invalida')

    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado(-1)
imprimirResultado(11)
