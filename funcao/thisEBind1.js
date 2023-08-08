const pessoa = {
    saudacao: " bom dia ",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paragmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa) // independente do contexto o this ficará amarrada ao componete bind.
falarDePessoa()