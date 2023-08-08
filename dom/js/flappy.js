function novoElemento(tagName, className) {// criando um elemento tagname ou classlist
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {// função criando as barreiras(canos)
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)// se for reversa primeiro corpo depois borda
    this.elemento.appendChild(reversa ? borda : corpo)// se for uma normal primeiro borda depois corpo

    this.setAltura = altura => corpo.style.height = `${altura}px` // setando a altura do corpo
}                                   

// const b = new Barreira(true)
// b.setAltura(200) // somente teste
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {// nesse caso seleciona a posição X
    this.elemento = novoElemento('div', 'par-de-barreiras')// função construtora

    this.superior = new Barreira(true)// barreira reversa // instanciando as barreiras
    this.inferior = new Barreira(false)// barreira contraria

    this.elemento.appendChild(this.superior.elemento)// .elemento representa oe elemento do DOM
    this.elemento.appendChild(this.inferior.elemento)// fazendo na barreira de baixo // adicionando no novo elemento 

    this.sorterAbertura = () => {// utiliza this pra ser usado fora da função, sortearAbertura tambem é visivel fora
        const alturaSuperior = Math.random() * (altura - abertura)//função que faz o calc aleatorio 
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)// setou a altura superior
        this.inferior.setAltura(alturaInferior)// setou a altura inferior
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])// parseInt converte para inteira
    this.setX = x => this.elemento.style.left = `${x}px`// setando o x para alterar de acordo com a animação
    this.getLargura = () => this.elemento.clientWidth// pegando a largura com cliente.Width

    this.sorterAbertura()// ja começa posição aleatoria
    this.setX(x)// setando o x
}
                // altura = 700, largura = 200, x = 800
// const b = new ParDeBarreiras(700, 200, 800)// armazenando o object ParDeBarreiras na const b
// document.querySelector('[wm-flappy]').appendChild(b.elemento)// selecionando wm-flappy, appendchild b em .elemento
                                                                                    // que é Barreira

function Barreiras(altura, largura, abertura, espaco, notificiarPonto) {
    this.pares = [// colocando em um array as ações
        new ParDeBarreiras(altura, abertura, largura),// começo do jogo fora da div
        new ParDeBarreiras(altura, abertura, largura + espaco),// começa com um espaco 
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),// 2x de distancia do anterior
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)// 3x de distancia
    ]
    const deslocamento = 3// quantos px será a animação, quanto maior anda mais rapido virse-versa
    this.animar = () => {
        this.pares.forEach(par => {// passa pelos 4 pares criados
            par.setX(par.getX() - deslocamento)//pega o x atual - deslocamento e setando para o x novo
            
            // quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) {// x é 0, getLargura é o fim da div
                par.setX(par.getX() + espaco * this.pares.length)// com esse calculo faz o loop para retornar 
                par.sorterAbertura()            // aqui sao os 4 elementos
            }   // sorteia novamente.

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio// aqui fiz o cruzamento do meio >= meio e getX < que meio
            if(cruzouOMeio) notificiarPonto()
        })  // se cruzou o meio chama notificar ponto
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])// posição y
    this.setY = y => this.elemento.style.bottom = (`${y}px`)// setando a posição do passaro

    window.onkeydown = e => voando = true //nesse caso quando clickar o voando é ativado
    window.onkeyup = e => voando = false //nesse caso quando soltar o click ele cai

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)//animando o voo, click sobe velocidade 8, ao soltar -5
        const alturaMaxima = alturaJogo - this.elemento.clientHeight// fazendo o passaro chegar somente ao teto

        if (novoY <- 0) {
            this.setY(0)// chega somente a 0 no chão
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)// chega somente a altura maxima
        } else {
            this.setY(novoY)// setando para o novo Y
        }
    }
    this.setY(alturaJogo / 2) // setando a altura do passaro no caso 700/2

}

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos// innerHTML insere os pontos 
    }
    this.atualizarPontos(0)
}

// const barreiras = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro (700)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// areaDoJogo.appendChild(passaro.elemento)// .elemento chama na dom
// areaDoJogo.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {// processo de animar setando o interval
//     barreiras.animar()
//     passaro.animar()
// }, 20)

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()// pegando o retangulo associado ao elemento A 
    const b = elementoB. getBoundingClientRect()// pegando o retangulo associado ao elemento B

    const horizontal = a.left + a.width >= b.left// a.left + a.width = lado direitoA >= lado esquerdo do B
        && b.left + b.width >= a.left// b.left + b.width = lado direitoB >= que lado esquerdo do A
    const vertical = a.top + a.height >= b.top// a.top + a.height = parte de baixoA >= parte de cima do B
        && b.top + b.height >= a.top// b.top + b.height = parte de baixoB >= parte de cima do A
    return horizontal && vertical
}

function colidiu( passaro, barreiras) {// função para colidir o passaro nas barreiras
    let colidiu = false
    barreiras.pares.forEach(ParDeBarreiras => {
        if (!colidiu) {
            const superior = ParDeBarreiras.superior.elemento
            const inferior = ParDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)// se passaro sobrepor a barreira superior ou
                || estaoSobrepostos(passaro.elemento, inferior)// sobrepor a barreira inferiorm será igual = true
        }
    })
    return colidiu
}


function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')// definindo area do jogo
    const altura = areaDoJogo.clientHeight// definindo altura 
    const largura = areaDoJogo.clientWidth// definindo largura

    const progresso = new Progresso()
    const barreiras = new Barreiras( altura, largura, 200, 400,// definindo barreiras com checkpoint 
        () => progresso.atualizarPontos(++pontos))// encremento ++pontos ja definido como 0 entao ++chama 1
    const passaro = new Passaro(altura)
      
        areaDoJogo.appendChild(progresso.elemento)// adicionando na tela do jogo
        areaDoJogo.appendChild(passaro.elemento)// adicionando passaro no jogo
        barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))// adicionando cada par dos canos

        this.start = () => { //definindo  looping
            const temporizador = setInterval(() => {
                barreiras.animar()
                passaro.animar()

                if (colidiu(passaro, barreiras)) {
                    clearInterval(temporizador)
                }
            }, 20)
        }
 }

new FlappyBird().start()