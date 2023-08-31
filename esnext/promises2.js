setTimeout(function() {
    console.log('torra')

    setTimeout(function() {
        console.log('peida na farofa')
        
        setTimeout(function() {
            console.log('caneco')
        }, 2000)
    }, 2000)
}, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('quem fez esse código é corno!')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)