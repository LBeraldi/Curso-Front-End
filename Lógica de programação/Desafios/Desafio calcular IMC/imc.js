/*
    MUITO ABAIXO DO PESO - 16 A 16,9 KG/M²
    ABAIXO DO PESO - 17 A 18,94 KG/M²
    PESO NORMAL - 18,5 A 24,9 KG/M²
    ACIMA DO PESO - 25 A 29,9 KG/M²
    OBESIDADE GRAU I - 30 A 34,9 KG/M²
    OBESIDADE GRAU II - 36 A 40 KG/M²
    OBESIDADE GRAU III - ACIMA DE 40 KG/M²
*/

//  '
function calcularIMC(peso, altura, cb) {
    if (peso === undefined || altura === undefined){
        throw Error ('Need two parameters: weight and height')
    }
    let imc = peso / (altura * altura)
    if(typeof cb === 'function'){
        return cb(imc)
    }
    return imc
}

function clasIMC(imc) {
    if (imc <= 16.9){
        return 'MUITO ABAIXO DO PESO';
    }else if (imc <= 18.4){
        return 'ABAIXO DO PESO';
    }else if (imc <= 24.9){
        return 'PESO NORMAL';
    }else if (imc <= 29.9){
        return 'ACIMA DO PESO';
    }else if (imc <= 34.9){
        return 'OBESIDADE GRAU I';
    }else if (imc <= 40){
        return 'OBESIDADE GRAU II';
    }else{
        return 'OBESIDADE GRAU III';
    }
}
let imc = calcularIMC(60, 1.65)
let imc2 = calcularIMC(60, 1.65, clasIMC)
console.log(imc)
console.log(imc2)
