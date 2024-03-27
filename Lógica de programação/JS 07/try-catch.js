function calcularRetangulo(v1, v2){
    if (typeof v1 !== 'number' || typeof v2 !== 'number' ){
        throw Error ('Deu erro ai filhão')
    }
    let area = v1 * v2
    return area
}
function calcularTriangulo(v1, v2){
    if (typeof v1 !== 'number' || typeof v2 !== 'number' ){
        throw Error ('Deu erro ai filhão')
    }
    let area = (v1 * v2) / 2
    return area
}
function calcularCirculo(raio) {
    if (typeof raio !== 'number'){
        throw Error ('Deu erro ai filhão')
    }
    let area = (raio * Math.PI) * 2
    return area
}
try{
    console.log(calcularRetangulo(10, 15))
} catch (e) {
    console.log('Parceiro ' + e.message )
}
try{
    console.log(calcularTriangulo(10, 15))
} catch (e) {
    console.log('Parceiro ' + e.message )
}
try{
    console.log(calcularCirculo(10))
} catch (e) {
    console.log('Parceiro ' + e.message )
}


