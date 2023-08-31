import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    constructor(props) { //sempre que chamar constructor deve-se chamar super
        super(props)
        
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo} /> 
                <input type="text" placeholder="Nome..." //sempre usar set state this para referenciar
                    value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}