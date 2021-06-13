let p = new Promise(function(resolve) {
  resolve(['Carlos', 'Ana', 'Bia'])
})

const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

p
  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log)