const alunos = [
    { nome: 'noah', nota: 9.2, bolsista: false },
    { nome: 'leon', nota: 7.3, bolsista: true },
    { nome: 'oliver', nota: 9.8, bolsista: false },
    { nome: 'melinna', nota: 8.7, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)      // .reduce = reduz o array para um so elemento
    return acumulador + atual           // tambem pode agregar para reduzir em um so.
}, 0)

console.log(resultado)