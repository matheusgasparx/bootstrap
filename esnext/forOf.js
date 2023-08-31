for (let letra of "cod3r") {
    console.log(letra) // retorna as letras em cada linha
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i) // retorna a quantidade de indices
}

for (let assunto of assuntosEcma) {
    console.log(assunto) // retorna o nome das String
}

const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}