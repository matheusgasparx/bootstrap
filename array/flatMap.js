const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'noah',
        nota: 8.5
    }, {
        nome:'ana',
        nota: 7.1
    }]
},  {
    nome: 'Turma M2',
    alunos: [{
        nome: 'rebeca',
        nota: 8.1
    }, {
        nome: 'roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

console.log([].concat([ 8.5, 7.1 ], [ 8.1, 7.3 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)