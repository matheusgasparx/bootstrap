// estrategia 1 para gerar valor padrão
function soma1( a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
       return a + b + c // dá problema com 0
}

console.log(soma1()), soma1(3), soma1( 1, 2, 3) // irão dar certo
console.log(soma1(0, 0, 0)) // irá dar errado pois o 0 é falso pois false || true = true

// estrategia 2, 3, e 4 para gerar valor padrão
function soma2( a, b, c) {
    a = a !== undefined ? a : 1 // !== é estritamente diferente, pode ser != que é só diferente
    b = b in arguments ? b: 1 // pode ser alguma dessas 3 opções
    c = isNaN(c)? 1: c // mais seguro, melhor utilizado
    return a + b + c    // menos bugs
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))
    
// valor padrão es2015 // usar esse, mais simples e melhor

function soma3( a = 1, b = 1, c = 1 ){
    return a + b + c 
}

console.log (soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))