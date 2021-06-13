function numeroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = numeroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi : ${opcao}.`)
} while (opcao != -1)  

console.log('Até a próxima !')