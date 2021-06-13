const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
// require('./api/produto')(app, 'com param!')
const produtoApi = require('./api/produto')
produtoApi(app, 'Com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

// Middleware = Função que recebe REQ, RES, NEXT (opcional). Para fazer outra ação na mesma URL, terá que chamar a função NEXT, fazendo uma cadeia de ações.

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(saudacao('Guilherme'))

// Usando Next

app.use('/teste', (req, res, next) => {
  console.log('Será q serei chamado?')
  next()
})

// Lendo Dados da Requisição

// Query = http://localhost:3002/cliente/relatorio?completo=true&ano=2018
app.get('/clientes/relatorio', (req, res) => {
  res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

// Body
app.post('/corpo', (req,res) => {
  // let corpo = ''
  // req.on('data', function(parte) {
  //   corpo += parte
  // })

  // req.on('end', function() {
  //   res.send(corpo)
  // })
  res.send(req.body)
})

// Params = Direto na URL
app.get('/clientes/:id', (req, res,) => {
  res.send(`Cliente ${req.params.id} selecionado !`)
})

// Mandar resposta

app.get('/teste', (req, res) => {
  res.json([
    {id: 7, name: 'Ana', position: 1},
    {id: 34, name: 'Bia', position: 2},
    {id: 73, name: 'Carlos', position: 3},
  ])

  // res.json({
  //   name: 'iPad 32GB',
  //   price: 1899.00,
  //   discount: 0.12
  // })

  // res.send('Funcionando!')
})

app.listen(3002, () => {
  console.log('Backend ligado.')
})