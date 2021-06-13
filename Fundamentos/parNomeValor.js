//Par nome/valor
const saudacao = 'Opa' //Contexto léxico 1 (léxico = onde foi definido fisicamente o código)

//Função

function exec() {
    const saudacao = 'Falaaa' //Contexto léxico 2
    return saudacao
}

//Objeto

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)