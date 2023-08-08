const valor = " Global "

function minhaFuncao () {
    console.log(valor)
}

function exec ( ){
    const valor = " Local "
    minhaFuncao()
}

exec() // irá abrir o escopo global, pois função tem prioridade na execução