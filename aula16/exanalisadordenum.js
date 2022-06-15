let num = document.getElementById('num')
let fim = document.getElementById('fim')
let box = document.getElementById('box')
let valores = []

function inNum(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inBox(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}
function adicionar (){
    if(inNum(num.value) && !inBox(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        box.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0) {
        alert('Adiocione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            media = soma / tot
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML =''
        res.innerHTML +=`<p> Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valore é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
        
    }
}