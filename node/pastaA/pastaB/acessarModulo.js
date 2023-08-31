const moduloA = require('../../moduloA') //  cada ../ sai de uma pasta
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia garera!')
//     res.end()
// }).listen(8080)