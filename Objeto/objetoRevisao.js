//Coleção dinâmica de pares chave/valor 
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: '320i GT',
    valor: 123000,
    marca: 'BMW',
    proprietario: {
        nome: 'Gabriel',
        idade: 23,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 321
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 29
    }, {
        nome: 'Paula',
        idade: 25
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)