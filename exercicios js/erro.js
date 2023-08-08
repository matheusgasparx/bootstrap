function tratarErroELancar(erro){ 
    // throw new Error ('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    // throw {
    //     nome: erro.name,
    //     msg: erro.mensagem,
    //     date: new Date
    }{
    
}

function imprimirNomeGritando(obj) { 
    try { console.log(obj.name.toUppercase() + "!!!" )
} catch (e) { 
    tratarErroELancar (e)
}}

const obj = {name:"Robertito "}

console.log(obj)