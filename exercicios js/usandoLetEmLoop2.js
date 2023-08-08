const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()


// sempre irá ser o mesmo valor por o var é global, não irá respeitar o escopo
// VAR = GLOBAL 
// LET = não tem âmbito global, tem escopo de função, tem escopo de bloco, e pode ser reatribuído.
// CONST =  não tem âmbito global, tem escopo de função, tem escopo de bloco, e não pode ser reatribuído.