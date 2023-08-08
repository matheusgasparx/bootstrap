let compareComThis = function (param) {
    console.log(this === param)
}

compareComThis(global) // escopo global até aqui

const Obj = {}
compareComThis = compareComThis.bind(Obj) // colocar () para fazer amarração
compareComThis(global) // false não está mais apontando pro global
compareComThis(Obj) // this agora é objeto por causa do bind

let compareComThisArrow = param => console.log(this === param)
compareComThisArrow(global)
compareComThisArrow(module.exports) // true, pode acessar diretamente de unm arquivo no node com o uso do This

compareComThisArrow = compareComThisArrow.bind(Obj) // a arrow function ira ter prioridade em cima do bind
compareComThisArrow(Obj)
compareComThisArrow(module.exports) // irá continuar TRUE com a função arrow
