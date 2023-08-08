const aprovados = [ 'rafael', 'nattan', 'luanda', 'raquel']
        // .forEach = percorre todo o array
aprovados.forEach( function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`) // o +1 utiliza para poder romper o i [0] e começar
})                                        // por 1.    ja o nome começa por [0] rafael

// também pode ser
aprovados.forEach(nome => console.log(nome)) // arrow function nessa forma mas retorna
                                             // apenas os nomes.
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) // armazenando a função numa variavel e retornando
                                   // por parametro no forEach