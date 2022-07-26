function reloginho() {
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var relogio = document.getElementById('horario')
    relogio.innerHTML = `<h1>${hora}:${min}</h1>`
    relogio.style.color = 'black'
    relogio.style.fontSize = "40pt"
    if(hora >= 12 && hora < 18) {
        var msg = document.getElementById('msg')
        msg.innerHTML = '<br><strong>Boa Tarde!</strong>'
        msg.style.fontSize = "20pt"
        document.body.style.backgroundImage = "url(tarde.jpg)"
    } else if(hora >= 0 && hora < 12) {
        var msg = document.getElementById('msg')
        msg.innerHTML = '<br><strong>Bom Dia!</strong>'
        msg.style.fontSize = '20pt'
        document.body.style.backgroundImage = "url(manha.jpg)"
    } else {
        var msg = document.getElementById('msg')
        msg.innerHTML = '<br><strong>Boa Noite!</strong>'
        msg.style.fontSize = '20pt'
        relogio.style.color = 'white'
        document.body.style.backgroundImage = "url(noite.jpg)"
    }
}