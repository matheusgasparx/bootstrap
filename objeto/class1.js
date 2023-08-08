class Lancamento {
    constructor(nome = 'Generico', valor = 0) { // constructor é o operador que transforma em função
        this.nome = nome                        // quando chamar new
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = [] 
   }
    addLancamentos(...lancamentos) { // addLancamentos é função
    lancamentos.forEach(l => this.lancamentos.push(l))
   }                                                // pode usar .map .reduce
    sumario() {                                     
    let valorCosolidado = 0                 
    this.lancamentos.forEach(l => {             // class é mais usado em react
        valorCosolidado += l.valor
    })
    return valorCosolidado
} }

const salario = new Lancamento('Salario', 5000)
const contaDeLuz = new Lancamento('Luz', 250)

const contas = new CicloFinanceiro(6, 2020)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())