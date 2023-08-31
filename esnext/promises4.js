function gerarNumerosMegaSena(min, max, tempo) {
    if (min > max) [max, min] = [min, max];
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio);
        }, tempo);
    });
}

function gerarNumerosMegaSena2() {
    return Promise.all([
        gerarNumerosMegaSena(1, 60, 1800),
        gerarNumerosMegaSena(1, 60, 100),
        gerarNumerosMegaSena(1, 60, 500),
        gerarNumerosMegaSena(1, 60, 1600),
        gerarNumerosMegaSena(1, 60, 400)
    ]);
}

gerarNumerosMegaSena2()
    .then(numeros => console.log(numeros));

console.time('promise')

gerarNumerosMegaSena2()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })