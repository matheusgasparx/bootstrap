console.log (soma(3, 4)) // usando dessa forma também imprime pois o vscode carrega primeiro as funções
                        // das demais formas não, pois estão em const ou let

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y, z) {
    return x - y - z
}
console.log(sub(3, 4, 1))

// named function expression --- menos usada, mas aprender
const mult = function mult(x, y) {
    return x * y
} 
console.log(mult( 4, 5))