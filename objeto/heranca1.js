const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}

// __proto__ é para atributos que pode buscar na herança pai 
// prototype é para um atributo que está na função

console.log(ferrari.prototype) // objeto ferrari nao tem prototype
console.log(ferrari.__proto__) // so tem __proto__
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // ele não acessa o proprio atributo

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) // toda função de prototype
console.log(Object.prototype, MeuObjeto.prototype)