function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 0 && hora < 12) {
        // Bom Dia
        img.src = 'imagens/manhatrans.png'
        msg.innerHTML = `Agora são ${hora} horas. Bom Dia!`
        document.body.style.background = '#ffd53b'
    }else if(hora >= 12 && hora < 18) {
        // Boa Tarde
        img.src = 'imagens/tardetrans.png'
        msg.innerHTML = `Agora são ${hora} horas. Boa Tarde!`
        document.body.style.background = '#8e564d'

    }else {
        // Boa Noite
        img.src = 'imagens/noitetrans.png'
        msg.innerHTML = `Agora são ${hora} horas. Boa Noite!`
        document.body.style.background = '#1e3342'

    }

}    