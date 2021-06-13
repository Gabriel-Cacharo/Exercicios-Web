function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] //Inverter valores
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //Floor = arredondar para baixo o valor
}

console.log(rand([50, 40]))
console.log(rand([992])) //Irá definir para o mínimo , e irá pegar a definição de max na function
console.log(rand([, 10])) //Irá definir o min como 0 (,) e o máximo como 10
console.log(rand([])) //Irá pegar as definições de min e max na function