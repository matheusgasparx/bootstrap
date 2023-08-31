// não aceita repetição/não indexada
const times = new Set()
times.add('Framengo')
times.add('São Paulo').add('Manchester').add('Corinthians')
times.add('Verdebhremer')
times.add('Porto')

console.log(times)
console.log(times.size)
console.log(times.has('Framengo'))
times.delete('Framengo')
console.log(times.has('Framengo'))

const nomes = ['Raquel', 'Rute', 'Julia', 'Raquel']
const nomesSet = new Set(nomes)
console.log(nomesSet)