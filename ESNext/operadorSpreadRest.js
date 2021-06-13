//Operador ... rest(juntar)/spread(espalhar)
//Usar rest com parâmetro de função

//Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 9560.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//Usar spread com array
const grupoA = ['João', 'Pedro', 'Ana', 'Gabriel']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)