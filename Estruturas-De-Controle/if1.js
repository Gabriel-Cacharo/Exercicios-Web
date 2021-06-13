function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.4)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade ... ' + valor)
    }
}

seForVerdadeEuFalo() //false
seForVerdadeEuFalo(null) //false
seForVerdadeEuFalo(NaN) //false
seForVerdadeEuFalo('') //false
seForVerdadeEuFalo(-1) 
seForVerdadeEuFalo('Olá galerinha')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})