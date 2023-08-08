// cadeira de prototipos (prototype chain)
Object.prototype.attr0 = '0'        // não fazer esse!!
const avo = { attr1:'A'}
const pai = { __proto__:avo, attr2:'B'}
const filho = {__proto__:pai, attr3:'C'} // sobescreve
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324      // shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}:${super.status()}` // super referencia o prototipo
    }
}

Object.setPrototypeOf(ferrari, carro) // nesse caso ferrari tem carro vomo seu prototipo
Object.setPrototypeOf(volvo, carro) // é o mesmo que colocar __proto__ e apontar para carro do primeiro exemplo

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(300)
console.log(volvo.status())

ferrari.acelerarMais(310)
console.log(ferrari.status())