// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função e manipular variáveis externas à função

const x = " Global "

function fora() { 
    const x = " Local"
    function dentro () {
        return x
    }
    return dentro
}


const minhaFuncao = fora ()   // ele irá achar o local porque a memoria do cloruse
console.log(minhaFuncao())    // por conta de ter sido criado uma função