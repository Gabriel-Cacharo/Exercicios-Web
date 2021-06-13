const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }'
]

//Retornar um array apenas com os preços

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado)