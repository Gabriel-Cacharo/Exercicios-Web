//Não aceita repetição / Não indexada

const times = new Set()
times.add('Corinthians')
times.add('Botafogo-SP').add('Palmeiras').add('Flamengo')
times.add('São Paulo')
times.add('Corinthians') //Repetição

console.log(times)
console.log(times.size)
console.log(times.has('corinthians'))
console.log(times.has('Corinthians'))

times.delete('Palmeiras')
console.log(times.has('Palmeiras'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)