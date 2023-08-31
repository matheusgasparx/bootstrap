// let e var
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [ 1, 2, 3]
console.log(x, y)

const { idade: i, nome: n } = { nome: 'Noah Vei Hasbulla', idade: 2 }
console.log(i, n)