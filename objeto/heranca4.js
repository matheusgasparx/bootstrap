function MeuObjeto() {}
console.log(MeuObjeto.prototype) // ele tem um objeto

const obj1 = new MeuObjeto // instancia objeto na função 
const obj2 = new MeuObjeto // ou seja ele é a me
console.log(obj1.__proto__ === obj2.__proto__) // então TRUE ambos apontam para o mesmo prototype
console.log(MeuObjeto.prototype === obj1.__proto__) // true ele aponta para o mesmo prototype

MeuObjeto.prototype.nome = 'gaspar' // nesse caso coloquei nome a herança pai
MeuObjeto.prototype.falar = function(){
    console.log(`eae aqui é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'noah' // nesse caso é subscrito gaspar porque obj2 tem nome
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

// Resumindo

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // aponta
console.log(MeuObjeto.__proto__ === Function.prototype) // é o mesmo que
console.log(Function.prototype.__proto__ === Object.prototype) // 
console.log(Object.prototype.__proto__ === null) // depois desse não há mais. ...null 