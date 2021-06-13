function teste(num) {
    if(num > 7)
        console.log(num) //Sem chaves apenas uma linha será executada como if
    console.log('Final')
}

teste(6)
teste(9)

function teste2(num) {
    if(num > 7); { //Cuidado com o ; , não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(9)