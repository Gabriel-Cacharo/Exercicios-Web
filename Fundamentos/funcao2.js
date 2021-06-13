//Armazenando uma função em uma variavel

const ImprimirSoma = function (a, b) {
    console.log(a + b)
}

ImprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//Retorno implícito

const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!')