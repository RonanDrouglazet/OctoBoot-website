(window.OctoBoot_plugins = window.OctoBoot_plugins || {}).language = function() {
    if (location.hash) {
        var ln = location.hash.substr(1)
        var elements = $('.ob-language.' + ln).parent().parent()
        if (elements.length) {
            elements.each(function(i, el) {
                $(el).contents().filter(function() {
                    return this.nodeType == 3
                }).each(function(i, text) {
                    var sln = $(el).find('.ob-language.' + ln + ' span')[i]
                    if (sln) {
                        text.textContent = sln.innerHTML
                    }
                })
            })
        }
    }
}

$(document).ready(OctoBoot_plugins.language)
