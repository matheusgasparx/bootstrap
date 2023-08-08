// v e v ~> v
// v e f ~> f
// v e ? ~> f

// v ou ? ~> v
// f ou v ~> v
// f ou f ~> f

// v xor v ~> f
// v xor f ~> v
// f xor v ~> v
// f xor f ~> f

// !v ~> f
// !f ~> v


function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //  || é o mesmo que ou
    const comprarTv50 = trabalho1 && trabalho2 // && é o mesmo que e
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor opcional, menos usado
    const comprarTv32 = trabalho1 != trabalho2 // usar em xor, mais rápido != é o mesmo que diferente
    const manterSaudavel = comprarSorvete // operador unário 

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
    }

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))