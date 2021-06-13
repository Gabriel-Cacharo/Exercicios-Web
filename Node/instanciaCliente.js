const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //Para retornar a função tem que adicionar () no final
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) //Ele juntou todos valores e retornou 3

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)