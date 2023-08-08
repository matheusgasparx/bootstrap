// Object.preventExtensions
const produto = Object.preventExtensions({
    nome:'qualquer', preco: 1.99, tag: 'promoção'
})
console.log('extensivel', Object.isExtensible(produto)) // .isExtensiable verifica
                                                        // se ele permite adicionar
produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto) // .preventExtensios -> não permite adicionar atribudo

// Object.seal
const pessoa = { nome: 'gaspar', idade: 26 }
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa)) // .isSealed verifica se o objeto esta
                                                // selado
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 23
console.log(pessoa) // .seal -> sela o objeto não adiciona, não deleta só modifica

// Object.freeze = selado + valores constantes