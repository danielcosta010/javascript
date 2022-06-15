/*function parimp(n) {
    if(n % 2 == 0) {
        console.log(`O numero ${n} é par`)
    }else {
        console.log(`O numero ${n} é ímpar`)
    }
} parimp(23)*/

function parimp(n) {
    if(n % 2 == 0) {
        return 'Par';
    }else {
        return 'Impar';
    }
} 
/*let res = parimp(4)
console.log(res)*/

console.log(parimp(7))
