const pessoa = {
    nome: 'Ana',
    idade: 16,
    endereco: {
        logradouro: 'Rua ABC',
        numero : 135
    }
}

const { nome, idade } = pessoa //Destructuring , tirar atributos da estrutura (objeto)
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //Criando novas váriáveis para os atributos
console.log(n, i)

const { endereco: { logradouro, numero } } = pessoa //Tirando atributos que estavam dentro do objeto e dentro de outro objeto de endereço
console.log(logradouro, numero)

const idadeB = pessoa.idade //Como pegar um elemento de dentro da estrutura (objeto)
console.log(idadeB) 