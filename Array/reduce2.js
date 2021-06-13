const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Ana', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Maria', nota: 8.3, bolsista: true}
]

//Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 1 ( Versão 2 )
const bolsas = alunos.map(a => a.bolsista)
console.log(bolsas.reduce((acumulador, atual) => {
    if(!acumulador) {
        return false
    } else {
        return atual
    }
}))

//Desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

//Desafio 2 ( Versão 2 )
console.log(bolsas.reduce((acumulador, atual) => {
    if(acumulador) {
        return true
    } else {
        return atual
    }
}))