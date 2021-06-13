const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho) {
  return new Promise(resolve => {
    fs.readFile(caminho, function(error, conteudo) {
      resolve(conteudo.toString())
    })
  })
}

lerArquivo(caminho)
  .then(conteudo => conteudo.split('\n'))
  .then(linhas => console.log(linhas[1]))