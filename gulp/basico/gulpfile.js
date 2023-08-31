const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2')
    return cb()
}

function copiar(cb) {
//  gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // seleciona quais arquivos de entrada para o workflow
    gulp.src('pastaA/**/*.txt') // dessa forma copia todos txt

   .pipe(gulp.dest('pastaB')) // serve para transformar os arquivos de entrada
    return cb()
}

const fim = cb => {
    console.log('Fim!')
    return cb()
}

module.exports.default = series(
    parallel( antes1,antes2), // utilizando parallel ele executa ao mesmo tempo
    copiar,
    fim
)