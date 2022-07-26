function trap() {
    var res = document.getElementById('corpo')
    res.innerHTML = 'Você descobriu o segredo! <br> O mais novo grande nome do Trap: Marsh, está disponível aqui: <br>'
    var a = document.createElement('a');
    var link = document.createTextNode ('Aqui')
    a.appendChild(link)
    a.href = "https://www.youtube.com/watch?v=VS9nzuJS0W4"
    res.appendChild(a)
    res.style.textAlign = 'center'
    res.style.fontSize = '20pt'
    var img = document.createElement('img')
}