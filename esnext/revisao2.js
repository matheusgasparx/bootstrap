// Arrow Function
const soma = (a, b) => a + b
console.log(soma(1, 2))

const soma1 = (a, b) => { a + b
    return 1 + 2
}
console.log(soma1(1, 2))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function node( texto = 'Node2') {
    console.log(texto)
}

node()
node('Sou mais forte')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))