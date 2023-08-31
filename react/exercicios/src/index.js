import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai' // importa o componente
import Filho from './componentes/Filho' // importa o componente

ReactDOM.render(
    <div>
        <Pai nome="Matheus" sobrenome="Gaspar">
            <Filho nome="Noah" />
            <Filho nome="Gisele" />
            <Filho nome="Melinna" />
        </Pai>
    </div>
, document.getElementById('root'))