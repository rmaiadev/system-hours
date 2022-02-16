function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = ' foto/manha.png'
        document.body.style.background = '#FDC34C'

    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = ' foto/tardee.png'
        document.body.style.background = '#7B90B0'

    } else {
        // boa noite
        img.src = ' foto/noite.png'
        document.body.style.background = '#0D1A40'
    }

}
