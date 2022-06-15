let val = [7, 4, 6, 2, 3, 9]
val.sort()

/*
console.log(val[0])
console.log(val[1])
console.log(val[2])
console.log(val[3])
console.log(val[4])
console.log(val[5])*/

/*for(let pos = 0; pos < val.length; pos++) {
    console.log(`A posição ${pos} é ${val[pos]}`)
}*/

val[6] = 8
val.push(17)
console.log(val)

for(let pos in val) {
     console.log(`A posição ${pos} é ${val[pos]}`)
}

let pos = val.indexOf(9)
if(pos == -1) {
    console.log('O número não existe')
}else
    console.log(pos)


