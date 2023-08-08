// USAR DESSA FORMA 

function Pessoa() {
    this.idade = 0

    setInterval(function(){ 
        this.idade++
        console.log(this.idade)
    } .bind(this), 1000) }

    new Pessoa

// OU USAR DESSA, drible na variação do thi

function Pessoa() {
    this.idade = 0

    const self = this
    
    setInterval(function(){ 
        self.idade++
        console.log(self.idade)
    }, 1000) }

    new Pessoa