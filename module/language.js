(window.OctoBoot_plugins = window.OctoBoot_plugins || {}).language = function() {
    if (location.hash) {
        var elements = $('*[ob-language-' + location.hash.substr(1) + ']')
        if (elements.length) {
            elements.each(function(i, el) {
                el.innerHTML = el.innerHTML.replace($(el).attr('ob-language-default'), $(el).attr('ob-language-' + location.hash.substr(1)))
            })
        }
    }
}

$(document).ready(OctoBoot_plugins.language)
