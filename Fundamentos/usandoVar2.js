var numero = 1
{
    var numero = 2 //Irá mudar globalmente
    console.log('dentro =', numero)
}
console.log('fora =', numero)