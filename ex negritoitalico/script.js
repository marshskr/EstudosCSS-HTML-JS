var it = document.getElementById('res')
var neg = document.getElementById('res')

function negrito() {
    neg.style.fontWeight = 'bold'
}

function italico() {
    it.style.fontStyle = 'italic'
}

function removeri() {
    if(it.style.fontStyle == 'italic') {
        it.style.fontStyle = ''
    }
}

function removerb() {
    if(neg.style.fontWeight == 'bold') {
        neg.style.fontWeight = ''
    }
}