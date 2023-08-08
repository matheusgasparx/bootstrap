const alunos = [
    { nome: 'noah', nota: 9.2, bolsista: false },
    { nome: 'leon', nota: 7.3, bolsista: true },
    { nome: 'oliver', nota: 9.8, bolsista: false },
    { nome: 'melinna', nota: 8.7, bolsista: true }
]

// desafio 1: todos os alunos são bolsistas?
const saoBolsistas = alunos.map(a => a.bolsista).reduce(function(bolsaDeEstudos){
    return bolsaDeEstudos
})
console.log(saoBolsistas)

// desafio 2: algum aluno é bolsista?
const alunoBolsa = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(alunoBolsa))

// pode se usar o metodo no segundo exemplo aplicado para o primeiro; trocando apenas

//const saoBolsistas = alunos.reduce((acumulador, aluno) => acumulador && aluno.bolsista)
// console.log(saoBolsistas) === Output: false