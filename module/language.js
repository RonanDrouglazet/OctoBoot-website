(window.OctoBoot_plugins = window.OctoBoot_plugins || {}).language = function() {
    if (location.hash) {
        var elements = $('*[ob-language-' + location.hash + ']')
        if (elements.length) {
            elements.each(function(i, el) {
                el.innerHTML = el.innerHTML.replace($(el).attr('ob-language-default'), $(el).attr('ob-language-' + location.hash))
            })
        }
    }
}

$(document).ready(OctoBoot_plugins.language)
