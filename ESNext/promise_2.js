// setTimeout(() => {
//   console.log('Executando função')

//   setTimeout(() => {
//     console.log('Executando função 2...')

//     setTimeout(() => {
//       console.log('Executando função 3...')
//     }, 2000);
//   }, 2000);
// }, 2000);

function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log('Executando promise...')
      resolve()
    }, tempo);
  })
}

let p = esperarPor(3000)
  .then(() => esperarPor())
  .then(esperarPor)