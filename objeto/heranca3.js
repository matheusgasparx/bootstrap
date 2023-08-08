const pai = { nome: 'pedro', corDcabelo: 'preto'}

const filha1 = Object.create(pai) // dessa forma ela recebe herença do pai
filha1.nome = 'ana'
console.log(filha1.corDcabelo)

const filha2 = Object.create(pai, { // Object.create passa para o objeto o prototipo que você quer aplicar
    nome: { value: 'bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'carla' // nesse caso não se torna carla porque o wrintable está false
console.log(`${filha2.nome} tem cabelo ${filha2.corDcabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) { //usando assim todos os atributos são impressos
    filha2.hasOwnProperty(key) ? // usando hasOwnProperty imprime se os atributos são realmente dela
        console.log(key) : console.log(`Por herança: ${key}`)
}
