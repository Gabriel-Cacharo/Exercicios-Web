function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if(Math.random() < chanceErro) {
      reject('Ocorrreu um erro...')
    } else {
      resolve(valor)
    }
  })
}

funcionarOuNao('Testando...', 0.5)
  .then(console.log)
  .catch(console.log)
  .then(() => console.log('Fim!'))