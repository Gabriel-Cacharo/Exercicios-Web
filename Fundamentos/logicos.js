function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // ( || = Ou ) Se um dos trabalhos derem certo a ação de comprarSorvete também dará certo
    const comprarTv50 = trabalho1 && trabalho2 //Precisa analizar os 2 trabalhos , os dois terão que dar certo para a ação também dar certo
    const comprarTv32 = trabalho1 != trabalho2 //Para a ação acontecer , os trabalhos tem que dar resultados diferentes . ( um dar certo e outro não )
    const manterSaudavel = !comprarSorvete //Se a ação de comprarSorvete não acontecer , irá acontecer a de manterSaudavel

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))