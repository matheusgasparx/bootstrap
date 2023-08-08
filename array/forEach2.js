Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}      // dessa forma implementamos nosso proprio forEach inserindo no prototype da função
        // criando uma função no prototype do Array
const reprovados = [ 'abraao', 'jorge', 'jose', 'napo']

reprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})