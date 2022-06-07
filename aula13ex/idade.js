function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nasc')
    var res = document.querySelector('#res')

    if(fano.value == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e digite novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Você tem ${idade} anos!`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if(idade >= 0 && idade < 12) { // criança
               img.setAttribute('src', 'imagens/meninop.png')
               res.innerHTML = `Ola! Você tem ${idade} anos e é um menino.`
            }else if (idade < 18) {  //jovem
                img.setAttribute('src', 'imagens/homenp.png')
                res.innerHTML = `Ola! Você tem ${idade} anos e é um jovem.`
            }else if (idade < 50) {  //adulto
                img.setAttribute('src', 'imagens/adultop.png')
                res.innerHTML = `Ola! Você tem ${idade} anos e é um adulto.`
            }else { //idoso
                img.setAttribute('src', 'imagens/idosop.png')
                res.innerHTML = `Ola! Você tem ${idade} anos e é um idoso.`
            }
            
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 12) { //criança
                img.setAttribute('src', 'imagens/meninap.png')
                res.innerHTML = `Ola! Você tem ${idade} anos e é uma menina.`
            }else if (idade < 18) { //jovem
                img.setAttribute('src', 'imagens/mulherp.png')
                res.innerHTML = `Ola! Você tem ${idade} anos e é uma jovem.`
            }else if (idade < 50) { //adulta
                img.setAttribute('src', 'imagens/adultap.png')
                res.innerHTML = `Ola! Você tem ${idade} anos e é uma adulta.`
            }else { //idosa
                img.setAttribute('src', 'imagens/senhorap.png')
                res.innerHTML = `Ola! Você tem ${idade} anos e é uma idosa.`
            }
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
        //res.innerHTML = `detec ${genero} de ${idade} de idade`
    }
}
function limpar() {
    document.querySelector('#nasc').reset();
    document.querySelector('#radsex').reset();

}
