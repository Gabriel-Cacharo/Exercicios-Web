//Factory é uma função que retorna um objeto 

//Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        idade: 23
    }
}

console.log(criarPessoa())