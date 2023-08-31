function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(resolve, tempo) // Chama resolve após o tempo especificado
    })
}

esperarPor(2000)
    .then(() => console.log('quem fez esse código é corno!'))
    .then(esperarPor)
    .then(() => console.log('quem fez esse código é corno!'))
    .then(esperarPor)
    .then(() => console.log('quem fez esse código é corno!'))

    function retornarValor() {
        return 20
}
        
async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()