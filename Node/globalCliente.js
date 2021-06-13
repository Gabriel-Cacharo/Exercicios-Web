require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' //Não dá pq está freezado no outro arquivo global
console.log(MinhaApp.nome)