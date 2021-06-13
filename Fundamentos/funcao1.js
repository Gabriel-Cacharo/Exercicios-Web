//Função sem retorno

function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //NaN = Not a Number
imprimirSoma(2, 10, 4, 5, 6) //Irá pegar os 2 primeiros e ignorar os outros
imprimirSoma() //NaN

//Função com retorno

function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())