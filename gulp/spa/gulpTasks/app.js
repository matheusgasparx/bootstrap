const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
var sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true })) // tira os espaços em branco
        .pipe(gulp.dest('build'))
}

function appCSS() {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError)) // caso aconteça erro
        .pipe(uglifycss({ "uglyComments": true })) // tira os comentarios do arquivo final
        .pipe(concat('app.min.css')) // concatena todos os arquivos em um so
        .pipe(gulp.dest('build/assets/css')) // jogando para a pasta de destino
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['ENV'] })) // buscando o babel 
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML', appHTML) // registra a task em um nome // realiza a atualização automatica na dom
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}