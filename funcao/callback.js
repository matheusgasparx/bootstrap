const fabricantes = [ "Mercedes", 'Audi', "BMW" ]

function imprimir(nome, i) {
    console.log(`${i + 1}.${nome}`)
}

fabricantes.forEach(imprimir) // simples e rápido, como é uma array vai imprimir todos os indices
fabricantes.forEach(function(fabricante){  
    console.log (fabricante) // como é um array pode ser assim também, selecionando qual indice quer
})
fabricantes.forEach(fabricante => console.log(fabricante)) // arrow function