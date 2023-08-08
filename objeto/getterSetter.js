// se utilza _ quando sugere que se utilize get ou set
// metodo get = ler a variavel && metodo set = alterar a variavel

const sequencia = {
    _valor: 1, // _ convenção
    get valor() { return this._valor++}, // assim pode ser mais especifico antes de devolvar pra variavel
                                          // com o ++ você pega o valor retorna e acrescenta para o valor 
                                          // seguinte, se utiliza quando quer acrescentar sequencia
    set valor(valor){
        if( valor > this._valor){
            this._valor = valor
        }
     }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900       // não irá ser imprimido porque por conveção o valor já foi registrado maior
console.log(sequencia.valor, sequencia.valor) // anteriormente
