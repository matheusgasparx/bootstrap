(function ($) {
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({
            mensagem: 'Em breve!',
            horario: '18:10:00'
        }, opcoes)
        
        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorMinuto = $('<span class="separador">').html(':')
        const separadorHora = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append( horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade,
            separadorMinuto, segundoDezena, segundoUnidade, mensagem )

        const regex = new RegExp (/(\d\d):(\d\d):(\d\d)/) // significa 18:00:00
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        // console.log(horarioAlvo)

        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diferencaEmMili = alvo.getTime() - agora.getTime()
            if (diferencaEmMili >= 0) {
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())
                            // recebe a regex la de cima
                console.log(diferenca)

                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            }               
        }, 1000)

        return this
    }
})(jQuery)