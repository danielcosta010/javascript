let amigo = {
    nome:'José',
    sexo: 'M',
    idade: 45,
    peso: 85,
    engordar(p=0){
        this.peso += p
    }
}
amigo.engordar(5)
console.log(`${amigo.nome} pesa agora ${amigo.peso} engordou `);