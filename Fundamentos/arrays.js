const valores = [7.7, 8.8, 9.9, 4.4]
console.log(valores[0], valores[3])
console.log(valores[4]) //Indefinido

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //Pega o ultimo elemento
delete valores[0]
console.log(valores)

console.log(typeof valores)