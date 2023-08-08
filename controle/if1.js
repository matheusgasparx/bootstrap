function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(9.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor )
    }
}

seForVerdadeEuFalo() // false
seForVerdadeEuFalo() // true

console.log()