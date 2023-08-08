let dobro = function (a) {       // sem arrow function
    return 2 * a
}

// arrow 1

dobro = (a) => {
    return 2 * a
}

// arrow 2

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return ' Olá '
}

ola = () => " Olá " // mais usado
ola = _ => " olá " // possui um paramento, menos utilizado
console.log(ola())