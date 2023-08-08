const notas = [ 4.3, 5.6, 5.2, 8.9, 7.1, 9.0 ]

// SEM CALLBACK
const notasBaixas1 = []
for ( let i in notas ) {
    if ( notas [i] < 7) {
        notasBaixas1.push(notas[i])
    }
} 
console.log (notasBaixas1)

// COM CALLBACK

const notasBaixas2 = notas.filter( function(nota) {
    return nota < 7
})
console.log(notasBaixas2)

// CALLBACK COM ARROW FUNCTION

const notasMenorQue7 = nota => nota <7 // utilizando dessa forma você reutilizar a função em outros lugares
const notasBaixas3 = notas.filter ( notasMenorQue7 )
console.log(notasBaixas3)