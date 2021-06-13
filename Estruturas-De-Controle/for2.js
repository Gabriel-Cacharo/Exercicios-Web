const notas = [6.7, 7.6, 8.4, 9.3, 7.7]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 72
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}