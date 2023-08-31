// operador ... rest(juntar) / spread(espalhar)
// usar rest com parametro de função => revisao 2

// usar spread com objeto
const funcionario = { nome: 'Gaspar', salario: 13000.99 }
const clone = { ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['Martin', 'Melman', 'Gloria', 'Alex']
const grupoFinal = ['Tia Kelly', ...grupoA, "vô Osvaldo"]
console.log(grupoFinal)