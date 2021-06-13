{
    {
        {
            var sera = 'Será???' //Fica visível globalmente
        }
    }
}
console.log(sera)

function teste() {
    var local = 123 //Fica apenas visível dentro do function (mais seguro)
    console.log(local)
}

teste()
console.log(local)