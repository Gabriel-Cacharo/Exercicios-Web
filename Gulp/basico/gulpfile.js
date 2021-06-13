const gulp = require('gulp')
const { series , parallel } = require('gulp')

const antes = cb => {
    console.log('Tarefa antes !')
    return cb()
}

function copiar (cb) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const depois = cb => {
    console.log('Tarefa depois !')
    return cb()
}

module.exports.default = series(
    parallel(antes, depois),
    copiar,
)