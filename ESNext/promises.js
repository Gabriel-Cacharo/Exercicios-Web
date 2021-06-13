function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //Promise só aceita 1 parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) //Tratar erro (reject)