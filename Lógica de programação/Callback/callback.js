function teste(cb) {
    console.log('Função teste')
    console.log(cb)
    cb()
}

function fn(param) {
    console.log('Função anonima de callback')
    console.log(param)
}
fn(30)
teste(fn)