const nome = "Gabriel" //Começa pela letra 0 ( G = 0 )

console.log(nome.charAt(4)) //Mostrar a quarta letra da palavra
console.log(nome.charAt(7)) //Não irá gerar nada (nulo) // pq n tem 7 letras (começando do 0)

console.log(nome.substring(1)) //Irá mostrar a primeira letra em diante (começando do 0)
console.log(nome.substring(0, 6)) //Irá mostrar a letra 0 até a sexta (a sexta ele n mostra)

console.log("Bom Dia ".concat(nome).concat("!"))
console.log("Bom Dea " + nome + "!")

console.log("Ana,Maria,Pedro".split(","))
