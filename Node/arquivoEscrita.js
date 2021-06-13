const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 2249.99,
    desconto: 0.150
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!')
})