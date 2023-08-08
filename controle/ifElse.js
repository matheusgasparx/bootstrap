const ImprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('APROVADO') // RETIRAR ;
    } else {
        console.log('REPROVADO')
    }}

ImprimirResultado(10)
ImprimirResultado(4)
ImprimirResultado('sim') // CUIDADO!! TAMBÉM SERÁ IMPRIMIDO MESMO SEM SER NÚMERO