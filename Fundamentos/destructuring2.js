const [a] = [10]
console.log(a)

const [n1, , n3, , n4, n6 = 0] = [10, 9, 4, 15]
console.log(n1, n3, n4, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] //Irá ignorar alguns (,) e pegar apenas o 2 elemento do 2 array
console.log(nota)