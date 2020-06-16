var $sinaMiniBlogShare = function(eleShare, eleContainer, callback) {
    eleContainer = eleContainer || document
    let CONTENT = ''
    var funGetSelectTxt = function() {
        var txt = ''
        if (document.selection) {
            txt = document.selection.createRange().text // IE
        } else {
            txt = document.getSelection()
        }
        return txt.toString()
    }
    eleContainer.onmouseup = function(e) {
        var txt = funGetSelectTxt()
        var left = e.clientX + 8
        var top = e.clientY + 20

        if (txt) {
            CONTENT = txt
            eleShare.style.display = 'inline'
            eleShare.style.left = left + 'px'
            eleShare.style.top = top + 'px'
        } else {
            eleShare.style.display = 'none'
        }
    }
    eleShare.onclick = function() {
        if (CONTENT) {
            console.log('eleShare.onclick -> txt', CONTENT)
            callback(CONTENT.replace(/\n/g, ' '))
        }
    }
}

export default $sinaMiniBlogShare
