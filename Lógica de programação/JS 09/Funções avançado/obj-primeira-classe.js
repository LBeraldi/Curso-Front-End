function fn(cb) {
    console.log('Executar ação de callback')
    console.log(typeof cb)
    typeof cb ==='function' && cb()
}

fn(function (){

})
