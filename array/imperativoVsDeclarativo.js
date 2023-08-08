// dessa forma podemos pegar a media dos alunos. metodos imperativo ou declarativo.

const alunos = [
    { nome: 'gaspizera', nota: 8},
    { nome: 'noahziane', nota: 10},
    { nome: 'gabyvea', nota:9}
]

// imperativo
let total1 = 0 // aqui ele atribui 0
for (let i = 0; i < alunos.length; i++) { // aqui o i é atribuido a partir do indc 0
    total1 += alunos[i].nota
}       // acrescentando
console.log(total1 / alunos.length)

// declarativo
const getNota = aluno => aluno.nota // pega nota do aluno
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma) // reduce também atribui para redução d
console.log(total2 / alunos.length) // usando length ele leva em consideração todos os alunos
// mapeia os valores, reduce faz a media, console pega os valores e faz a media divivindo.