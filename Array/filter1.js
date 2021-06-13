const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 9.50, fragil: false}
]

console.log(produtos.filter(function(p) {
    return false //Volta um array vazio
}))

//Versão 1
console.log(produtos.filter(function(p) {
    return p.preco >= 800 && p.fragil
}))

//Versão 2
const caro = produto => produto.preco >= 800
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))