function teste1(num) { 
    if (num > 7)
        console.log(num) 
        
        console.log(' Final ') // sempre será imprimido, porque não tem nada a ver com a função
    }

    teste1(6)
    teste1(8)
    
    // pode ser o exemplo anterior ou o proximo, sem ou com chaves

    function teste2(num) {
        if(num > 7); { // cuidado com o " ; ", não usar com as estruturas de controle
            console.log(num)
        }
    }

    teste2(6)
    teste2(8)