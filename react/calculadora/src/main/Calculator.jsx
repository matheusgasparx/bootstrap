import React, { Component } from "react"
import './Calculator.css'
import Button from "../components/Button"
import Display from "../components/Display"

const initialState = {
    DisplayValue: '0', // começa com 0 no display , estado inicial
    clearDisplay: false, // começa false o limpaDisplay
    operation: null, // ira armazenar a operação
    values: [0, 0], // ira chamar um
    current: 0 // ira mostrar qual ira manipular
}

export default class Calculator extends Component {

    state = {...initialState}

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() { // AC
        this.setState({ ...initialState}) // dessa forma aponta para ele mesmo
    }

    setOperation(operation){ // recebe o simbolo + * / -
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else { 
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`) // sempre que um operador for inserido
            if (isNaN(values[0]) || !isFinite(values[0])) {
                this.clearMemory()
            return
            }
            } catch(e) {
                values[0] = this.state.values[0]
            }
            
            values[1] = 0                                               // dará o resultado que sera inserido no indice 1
        

            this.setState({
                DisplayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) { // recebe so numero e . como paramentro
        if (n === '.' && this.state.DisplayValue.includes('.')) { 
            return
        }

        const clearDisplay = this.state.DisplayValue === '0' // so sera limpa se o valor do display for 0 ou true
            || this.state.clearDisplay                       // dessa forma tira o 0 a esquerda
        const currentValue = clearDisplay ? '' : this.state.DisplayValue // vazio ou o valor do display
        const DisplayValue = currentValue + n // valor atual mais n
        this.setState({ DisplayValue, clearDisplay: false }) // uma vez que digitou o valor o clear passa a ser false

        if (n !== '.') { //se for diferente, então 0 a 9
            const i = this.state.current // armazenando no primeiro elemento
            const newValue = parseFloat(DisplayValue)
            const values = [...this.state.values] // clonou o array e inseriu em values
            values[i] = newValue
            this.setState({ values }) // passa a substituir o values
        }
    }

    render() {
        return (
            <div className="calculator"> 
                <Display value={this.state.DisplayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}