// METODO POUCO USADO, USADO ANTES DO ECMASCRIPT

function area ( largura, altura) { 
    const area = largura * altura
    if ( area > 20) {
        console.log(`Valor acima do parametro ${area}m2.`)
    } else { 
        return area
    }
}
            // cuidado com a flexibilidade
console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 32, 44, 32))
console.log(area(5, 5))