const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(cb) {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080, // abrindo na porta 8080
            open: true, // se abre o browser
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')()) // dessa forma chama numa função arrow quando gerar novos html
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}