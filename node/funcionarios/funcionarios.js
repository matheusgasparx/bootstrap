const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// const paisChina = funcionarios => funcionarios.pais === 'china'
// const chinesa = funcionarios => funcionarios.genero === 'F'
// const chinesasalario = (func, funcAtual) => {
//     return func.salario < funcAtual.salario ? func : funcAtual
// }

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const mulherChinesa = funcionaria => { 
        if (funcionaria.pais === 'China' && funcionaria.genero === 'F') {
            return funcionaria
        }
    }
    const menorSalario = (funcionariaInicial, funcionariaAtual) => {
        let salarioMenor = funcionariaInicial
        if (funcionariaAtual.salario < funcionariaInicial.salario) {
            salarioMenor = funcionariaAtual
        }
        return salarioMenor
        
    }
    const chinesaLisa = funcionarios.filter(mulherChinesa).reduce(menorSalario)
    console.log(chinesaLisa)

    // mulher chinesa com menor salario professor \/

//     const func = funcionarios
//             .filter(chinesa)
//             .filter(paisChina)
//             .reduce(chinesasalario)

//     console.log(func)
})


