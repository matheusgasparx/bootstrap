// pessoa -> 123 -> {...} ou seja, ela sempre receberá o objeto
const pessoa = { nome:'gaspar' }
pessoa.nome = 'Noah'
console.log(pessoa)     // será imprimido mas não será alterado

// pessoa -> 456 -> {...} dará erro pois não tem como um objeto apontar para um objeto
// pessoa = { nome:'ana'} por exemplo

Object.freeze(pessoa) // dessa forma você congela os dados do objeto, nem tira, nem adiciona, nem modifica

// criando uma função com objetos congelados

const pessoaConstante = Object.freeze({ nome:'gaspar'})
pessoaConstante.nome = 'garibalde'
console.log(pessoaConstante.nome)