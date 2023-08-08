// 1º -> gerar uma string concatenacao

const nome = " Leonardo"
const concatenacao = "Olá" + nome + "!"

console.log(concatenacao)

// 2º -> convertendo idade em dias

function converterIdadeEmDias ( idadeEmAnos ) {
    const diasPorAno = 365
    const idadeEmDias = idadeEmAnos * diasPorAno
    return idadeEmDias
}

const idadeEmAnos = 70
const idadeEmDias = converterIdadeEmDias(idadeEmAnos) 
console.log(idadeEmDias)

      
// 3º -> calculando quanto ele ganha salario * hora

const calcularSalario = function (salarioHora, hora) {
    const salario = salarioHora * hora
    return "Salário igual a R$ " + salario.toFixed(2)
}

salarioHora = 150
hora = 40.5

const salarioMEnsal = calcularSalario (salarioHora, hora )
console.log(salarioMEnsal)

// 4º -> criando funcao que recebe numero 1-12 e retorne o mes como uma string.

const nomeDoMes = [
    "", 
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro" ];
  
  console.log(nomeDoMes[2]);

// 5º -> retornar 2 numeros e retorne se o primeiro é >= que o segundo

const notas = function () {maiorOuIgual, seraQueEsse}

const maiorOuIgual = 10
const seraQueEsse = 5

const resultado = maiorOuIgual >= seraQueEsse
console.log(resultado)

// 6º -> criar uma função que retorne o valor inverso, booleano;

function peido (fedorento, cheiroso ) {
    if ( fedorento <= cheiroso ) { 
        console.log("então eu cheiro ")}
    else {  
        console.log("não vou cheirar. ")}
}

peido (5, 10)
peido (10, 5)

// 7º -> retornar 4 numero como param ( num min max inclusivo ) e 
// retornar se o param num está entre min e max. 

function verificarIntervalo(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
      return numero >= minimo && numero <= maximo;
    } else {
      return numero > minimo && numero < maximo;
    }
  }

console.log(verificarIntervalo(5, 0, 10)); // Saída: true
console.log(verificarIntervalo(10, 0, 10)); // Saída: false (exclusivo)
console.log(verificarIntervalo(10, 0, 10, true)); // Saída: true (inclusivo)

// 8º -> Desenvolver uma função com 2 números inteiros e 
// realizar multiplicação sem usar operador *


function multiplicar1 ( a, b) {
    let resultado = 0;
    let sinal = (a < 0 && b > 0 ) || (a > 0 && b < 0) ? - 1 : 1
    a = Math.abs(a);
    b = Math.abs(b);

    while (b > 0) {
        resultado += a
        b--
    }

    return resultado * sinal
}

console.log(multiplicar1(5, 5))

// 9º -> criar uma função que recebe 2 param, o primeiro é o num que repetirá e 
// o segundo o de x que se repetirá.

function repetir(elemento, vezes){
  return Array(vezes).fill(elemento)
}
const resultado2 = repetir('códido', 3)
console.log(resultado2);

// 10º -> elaborar uma função que recebe um numero como parametro e retorne
// uma string com o simbolo de + na quantidade especificada no parameto

function repetirMais(quantidade) {
  return "+".repeat(quantidade)

}

const resultado32 = repetirMais(3)

console.log(resultado32)

// 11º -> criando uma função que recebe uma array retornando apenas o 
// primeiro e o ultimo elemento do array

 const celular = [ "iphone", "motorola", "samsung"]
 console.log(celular[0], celular[2])

 // 12º -> retirar um elemento de uma função

const traficante = {
      nome2: "cabelin ",
      idade2: 13,
      cidade: " rio de janeiro "
}

const { nome2, idade2} = traficante
console.log(nome2, idade2)

// 13º -> criando uma função array de elementos e retornando outro awway 
// somente com nº

function filtrarNumeros(array) {
  const valores2 = array.filter((soNumeros) => typeof soNumeros === 'number')
  return valores2
}

const arrayElementos = [1, 'arroz', 3, 'feijão', 5, 'salada']
const valores2 = filtrarNumeros(arrayElementos)
console.log(valores2)

// 14º -> criar uma função que receba como parametro um objeto 
// e retorne array de arrays

function dado2 (entreDados)  {
    return Object.entries(entreDados)
}

const dadosInternos = {
  nome: "Gaspar",
  profissão5: "Dev Software" }

  const dadosEmArray = dado2(dadosInternos)
  console.log(dadosEmArray)


// 15º -> criar uma função que recebe array de números
//  e retorne array todos número pares

const numeros = [ 2, 9, 35, 78, 80 , 100]
  
const numerosPares = (numero => numero % 2 === 0)
const pares = numeros.filter ( numerosPares )
console.log(pares)

// 16º -> função que retorne se o ano é bissexto ou não

function checarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return true
  } else {
    return false
  }
}

console.log(checarAnoBissexto(2024))
console.log(checarAnoBissexto(2027))

// 17º escrevendo uma array de números, que retornem eles somados

const [a, b, c, d] = [ 10, 20, 20, 50 ]
    
console.log([a + b + c + d])

// 18º -> criar uma função q recebe um array de produtos e retorne total das $

function totalGastos () {
  const produtos = [
  { eletro: 'Celular', valor: 1000 },
  { eletro: 'Nootbook', valor: 2000} ]
  
  const valores4 = produtos.map((item) => item.valor) // .map extrai os valores de cada produto
  const despesas = valores4.reduce((total, valor) => total + valor, 0) // .reduce soma os valores do array
  
  return [produtos, despesas]
}

const [produtos, totalDespesas] = totalGastos()
console.log('Produto:', produtos)
console.log('Total de despesas:',totalDespesas)

// 19º -> criar uma função que recebe uma quantidade de arrays e retorne a media deles somados
// e divididos pela quantidade de números

function mediaBombs(bombs) {
  const soma = bombs.reduce((totalBombs, valor) => totalBombs + valor.bombs, 0)
  const media = soma / bombs.length
  return media }

  const bombs = [
    { pais: "EUA",     bombs: 10},
    { pais: "RUSSIA",  bombs: 5},
    { pais: "UK",      bombs: 6}
  ]
  
  const media = mediaBombs(bombs)
  console.log(media) // MEDIA SIMPLES

// 20º -> criar uma função que recebe ( base x altura ) /2 de um triangulo e retorne
// a área desse triangulo, a precisão será de duas casas decimais.

function triangulo ( altura = 10, largura = 15){
  return altura * largura / 2
}
console.log(triangulo(7 , 9))

// 21º -> criar uma função que recebe array de números e retorne o menor número dele

function menorNumero(numerosArray) {
  return Math.min(...numerosArray)
}
const todosNumeros = [10, -5, 20, 15, 8];
const menorNumero1 = menorNumero(todosNumeros)
console.log(menorNumero1)

// 22º -> criar uma função que retorne um número aleatório com string sorteio

function sorteioNumero () {
  const numeroSorteado = Math.floor(Math.random()*10) + 1
  if (numeroSorteado == 6)
    console.log(`Parabéns! o número sorteado foi:${numeroSorteado}`)
  else ( console.log(`Poxa que pena! O número sorteado foi:${numeroSorteado}`))
}

sorteioNumero()

// 23º -> criar uma função que recebe um string e retorne quantas palavras tem nela

function totalPalavras (string){
  const palavras = string.split(" ")
  return palavras.length
}

const stringExemplo = "me divirto aprendendo a programar"
const numeroDePalavras = totalPalavras(stringExemplo)
console.log(numeroDePalavras)

// 24º -> criar uma função que recebe um caractere na string como param e retorne
// quantos vezes aparece o caractere na string.

function quantosCaracteres (string, letra) {
    let quantas = 0

    for (const arg of string) {
      if (arg === letra) {
        quantas++
      }
    }
    return quantas
}

const totalCaracteres = (" vai e Volta que eu quero ver")
const letraProcurada = "V"
const numeroDeVezes = quantosCaracteres(totalCaracteres, letraProcurada)
console.log(numeroDeVezes)

// 25º -> criar uma função de busca que retorne nomes sugestivos para o buscador

function buscador ( consultar, nomes) {
  const resultados = nomes.filter
    (itens => itens.toLowerCase().includes(consultar.toLowerCase()))
      return resultados
  }

const nomes = [ "javali", "javascript", "java", "profissão", "profissional" ]

const palavra = "java"
const resultados = buscador(palavra, nomes)
console.log(resultados)


// 26º -> criar uma função q retire as vogais e retorne apenas consoantes na string

function semVogal(frase) {
  const tirarVogal = /[^aeiou\s]/gi
  const consoantes = frase.match(tirarVogal)
  return consoantes ? consoantes.join('') : ''
}

const fraseToda = "facil vem, dificil vai"
const resultadoVogal = semVogal(fraseToda)
console.log(resultadoVogal)

// 27º -> criar uma função que recebe um objeto como parametro e retorne outro objeto 
// que corresponte ao objeto recebido como parametro, porem com as posições das
// chaves e valores invertidas.

function inverterObjeto() {
  const objetoInvertido = {}
  for (const chave in questoes) {
    objetoInvertido[questoes[chave]] = chave
  }
  return objetoInvertido
}

const questoes = {
  a: "20",
  b: "c",
  d: 30,
}

const respostaQuestoes = inverterObjeto(questoes)
console.log(respostaQuestoes)

// 28º -> criando função que retorna e filtra a quantidade de digitos num numero
// retornando somente os numeros com quantidade de digitos

function filtrarQuantidade (numeros, totalDigitos){
    return numeros.filter(number => number.toString().length === totalDigitos)
  }
const numeros28 = [10, 2, 60, 111, 200, 2]
const quantidadeDigitos = 3
const numerosFiltrados = filtrarQuantidade(numeros28, quantidadeDigitos)

  console.log(numerosFiltrados)

// 29º -> criar uma função que recebe um array de números e retorne o segundo maior
// número como array

function segundoMaior(array){
  const numberNow = array.sort((a, b) => b - a) 
  return numberNow[1]
}

const todosOsNumeros = [10, 20, 30, 40, 50]
const segundoNumero = segundoMaior(todosOsNumeros)
console.log(segundoNumero)

// 30º -> criar uma função que recebe um objeto com alunos e as notas num array.
// calcular a media da nota de cada aluno e retorne com atributos, que indica
// o melhor aluno com a melhor nota

function calcularMedia(array) {
  const mediaAlunos = array.map(aluno => {
  const somaNotas = aluno.notas.reduce((total, nota) => total + nota, 0)
  return {
    nome: aluno.nome,
    media: somaNotas / aluno.notas.length
  }
})
  return mediaAlunos
}

const sala1 = [
{
    nome: "Andreia",
    notas: [ 8, 7.5, 4, 8, 2]},
{
    nome: "Mariana",
    notas: [ 9, 5, 6, 7.4, 6]},
{
    nome: "Marcos",
    notas: [ 8, 4, 10, 6.7, 5]}]

const mediaSala = calcularMedia(sala1);

const melhorMedia = mediaSala.reduce((alunoAnterior, alunoAtual) => {
  return alunoAtual.media > alunoAnterior.media ? alunoAtual : alunoAnterior;
});

console.log(melhorMedia);