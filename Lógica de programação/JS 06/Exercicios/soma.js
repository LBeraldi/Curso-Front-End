/*let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let str = document.getElementById('str')
let output = document.getElementById('output')*/

/*let n1Value = n1.value
let n2Value = n2.value*/
function somar(n1, n2, str) {
        if (n1 == null || n2 == null){
        console.log('Digite os valores corretamente')
    }
    
    switch (str) {
        case '-':
            return n1 - n1
            break
        case '*':
            return n1 * n1
            break
        case '/':
            return n1 / n1
            break
        case '+':
            return n1 + n1
            break
        default:
            console.log('Digite as operações corretamente')
    }
}

console.log(somar(5, 5, '/'))
console.log(somar(5, 5, '+'))
console.log(somar(5, 5, '-'))
console.log(somar(5, 5, '*'))
console.log(somar())
console.log(somar(5, '/'))