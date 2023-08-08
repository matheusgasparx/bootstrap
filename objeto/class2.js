class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {                              // extends é a forma da cintase da class para dizer que a
   constructor(sobrenome, profissão = 'Professor') { // determinada classe tem outra classe ou função terá função 
    super(sobrenome)  // super = pai é avo                  // do mesmo prototipo
    this.profissão = profissão
}                    
}                       

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)