import $ from 'jquery' // ecmascript 2015 - busca o jquery dentro do modules

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) { // parent será todos wm-include
    if(!parent) parent = 'body'
// se parent nao tiver setado = procura no body inteiro
    $(parent).find('[wm-include]').each(function(i, e) { // i= index depois e = elemento
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include') // para não haver uma nova chamada
                
                loadHtmlSuccessCallbacks.forEach(
                    callback => callback(data))
                loadIncludes(e) // dessa forma ele reanaliza até localizar todos os parents chamados
            }
        })
    })
}

loadIncludes()