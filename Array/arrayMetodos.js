const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona o elemento no final
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona o elemento como primeiro da lista
console.log(pilotos)

//Splice pode adicionar e remover elementos

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //adiciona no indice 2 , e n remove ninguém
console.log(pilotos)

//Remover
pilotos.splice(3, 1) //Removeu 1 elemento a partir do indice 3 (Massa)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Cria um novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)