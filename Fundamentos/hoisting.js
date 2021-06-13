//APENAS UMA CURIOSIDADE , NÃO USAR !!

console.log('a =', a) //undefined
var a = 2 //Irá ser empurrada para cima , pq a não foi definido antes
console.log('a =', a)

console.log('b =', b) //Não irá executar , pois b não foi definida antes
let b = 3
console.log('b =', b)

//Hoisting = Jogar as declarações com var para cima , se foi definida em baixo do console.log