console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object) // toda função tem .prototype

String.prototype.reverse = function() { // .reverse reverte a string
    return this.split('').reverse().join('') // .split quebra as letras em um array || .join junta as letras
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() { // .first pega o primeiro número do array
    return this[0]                   // mas pode ser acessado através do [0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a','b','c','d'].first())

String.prototype.toString = function() { // NÃO FAZER ISSO, não fazer coisa que já existe no javascript
    return 'lascou tudo'
}

console.log('alou macarena'.reverse())