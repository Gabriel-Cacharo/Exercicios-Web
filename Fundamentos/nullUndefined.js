let valor //não atribuiu nada = undefined
console.log(valor)

valor = null //Ausência de valor
console.log(valor)

/* console.log(valor.toString()) Erro ! */

const produto = {}
console.log(produto)
console.log(produto.preco)

produto.preco = 4.50
console.log(produto)

produto.preco = undefined //Evite atribuir Undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //Sem preço
console.log(!!produto.preco)
console.log(produto)
