function gerarNumerosMegaSena(min, max, numProibidos) {
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numProibidos.includes(aleatorio)) {
            reject('Numero repetido')
        } else {
            resolve(aleatorio)            
        }
    })
}
   
async function megaSena(qtdeNumeros, tentavitas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosMegaSena(1, 500, numeros))
        }
        return numeros
    } catch(e) {
        if(tentavitas > 1) {
            throw "Não ganhou!"
        } else {
            return megaSena(qtdeNumeros, tentavitas + 1)
        }        
    }
}

megaSena(5)
    .then(console.log)
    .catch(console.log)