function contar() {
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")
    
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Insira os dados!"
    } else {
        res.innerHTML = "Contando:"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando passo 1.')
            p = 1
        }
        if(i < f) {
            //Contagem crescente
             for(let c = i; c <= f; c += p ) {
                res.innerHTML += `${c}  \u{1f449}`
            }
            
        } else {
            // Contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449} `
            } 
        }
        res.innerHTML +=  '\u{1f44A}'
    }
}