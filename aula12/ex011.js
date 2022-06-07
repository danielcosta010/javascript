var idade = 65
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log(' é menor de idade e ainda não pode votar!')
}else if(idade >= 16 && idade <= 17) {
    console.log('é menor de idade, mas já pode votar e o voto não é obrigatório!')
}else if(idade >=18 && idade < 65) {
    console.log('é maior de idade e o voto é obrigratório')
}else {
    console.log('Você é maior que 65 anos, você pode votar, mas não é obrigatório!')
}
