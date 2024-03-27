function fn(cb) {
    console.log('Executar ação de callback')
    console.log(typeof cb)
    typeof cb ==='function' && cb()
}

function callback(){
    console.log('Função passada por parâmetro')
}
fn(callback())

const obj = {
    callback: callback
}

obj.callback()

function fn2(n1){
    return function (n2){
        return n1 + n2
    }
}

const funcao2 = fn2(10)
const soma = funcao2(2)

console.log(soma)

function fn3(){
    return function () {
        console.log('Função retornada por paramentro')
    }
}

const funcao3 = fn3()
funcao3()