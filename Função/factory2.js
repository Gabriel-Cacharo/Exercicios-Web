function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.2
    }
}

console.log(criarProduto('Notebook', 2149.99))
console.log(criarProduto('Geladeira', 3250.49))