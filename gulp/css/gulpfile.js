const { parallel } = require("gulp");
const gulp = require("gulp");
var sass = require('gulp-sass')(require('sass'))
const uglifycss = require("gulp-uglifycss"); // minimaliza o texto
const concat = require("gulp-concat");
 
function transformacaoCSS() {
  return gulp.src("src/sass/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(uglifycss({ uglifyComments: true })) // minimaliza o texto
    .pipe(concat("estilo.min.css"))
    .pipe(gulp.dest("build/css"));
}
 
function copiarHTML() {
    return gulp.src("src/index.html")
    .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarHTML);
 