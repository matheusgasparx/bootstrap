// usando a notação literal
const obj1 = {}
console.log(obj1)  // pode se criar assim 
                   // ou assim \/ abaixo
// Object em JS
console.log(typeof Object, typeof new Object) // somente Object é uma função e new Object é um objeto
const obj2 = new Object
console.log(obj2)

// funções construtoras que pode ser usada também, mesma que anteriror mas usando coisas minhas
function Produto(nome, preco, desc) {
    this.nome = nome        // somente nome estara fora do escopo
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneca', 8, 0.10)
const p2 = new Produto('Notebook', 10000, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


// função FACTORY
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('gaspar', 10000, 5) // aqui o criarFuncionario está com os dados da pessoas
const f2 = criarFuncionario('ronaldinho', 50000, 10) // e estão dentro do f1
console.log(f1.getSalario(), f2.getSalario())  // aqui chamamos os dados atraves do f1 e getSalario chama
                                                // o calculo criada na função

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "SOU UM JSON"')
console.log(fromJSON.info)