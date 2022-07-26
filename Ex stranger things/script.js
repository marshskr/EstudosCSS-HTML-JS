function fugir() {
    var audio = document.getElementById('audio');
    audio.play();
    var res = document.getElementById('res')
    var body = document.getElementById('body')
    body.style.backgroundColor = 'white'
    var escapatoria = document.getElementById('escapatoria')
    escapatoria.innerHTML = '<strong>Um caminho está se abrindo!</strong>'
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    img.setAttribute('src', 'maxsaindo.png')
    img.style.maxWidth = '450px'
    img.style.marginLeft = '25px'
    img.style.marginBottom = '20px'
    res.appendChild(img)
}