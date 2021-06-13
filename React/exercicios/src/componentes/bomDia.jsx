import React from 'react'

export default props => [
        <h1 key='h1'>Bom dia {props.nome} !</h1>,
        <h2 key='h2'>Seja Bem Vindo(a) !</h2>
]

// export default props =>
//     <React.Fragment>
//         <h1>Bom dia {props.nome} !</h1>
//         <h2>Seja Bem Vindo(a) !</h2>
//     </React.Fragment>

// export default props =>
//     <div>
//         <h1>Bom dia {props.nome} !</h1>
//         <h2>Seja Bem Vindo(a) !</h2>
//     </div>