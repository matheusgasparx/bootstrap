const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS() {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({ "uglyComments" : false })) //
        .pipe(concat('deps.min.css')) // cancatena com o arquivo na pasta css
        .pipe(gulp.dest('build/assets/css'))
}

function depsFonts() {
    return gulp.src('node_modules/font-awesome/fonts/*.*') // *.* todas as fontes irão para pasta
        .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
    depsCSS,
    depsFonts
}