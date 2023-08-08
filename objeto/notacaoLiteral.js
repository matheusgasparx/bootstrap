const a = 1
const b = 2         // atualmente se utiliza assim
const c = 3

const obj1 = { a: a, b: b, c: c} // se utilizava antigamente
const obj2 = { a, b, c} // atualmente se faz assim 
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 10

const obj3 = {}
obj3[nomeAttr] = valorAttr  // antigamente
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}  // hoje em dia
console.log(obj4)

const obj5 = {
    funcao1: function(){ // não precisa se utilizar mais assim
        //...
    },
    funcao2(){     // assim mais simples no novo ecmascript
        //...
    }
}