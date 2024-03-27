/*
let v1 = parseFloat(prompt( 'Digite algum número de 1 a 10 !'))
let v2 = parseFloat(prompt( 'Digite um segundo número de 1 a 10 !'))
let media  = (v1 + v2) / 2

    if (v1 == 0 || v2 == 0){
    alert(true)
    }

    if (media <= 4){
        vf = true
        alert(vf)
    }else{
        vf = false
        alert(vf)
    }
    */

let v1 = parseFloat(prompt( 'Digite algum número de 1 a 10 !'))
let v2 = parseFloat(prompt( 'Digite um segundo número de 1 a 10 !'))
let media  = (v1 + v2) / 2

/*
if (v1 == 0 || v2 == 0){
    alert(true)
}
*/

alert('O aluno esta reprovado ? ' + (media < 4 || v1 == 0 || v2 == 0))

/*
if (media <= 4){
    vf = true
    alert(vf)
}else{
    vf = false
    alert(vf)
}
*/

// Parte Dois do desafio

let v1 = parseFloat(prompt( 'Digite algum número de 1 a 10 !'))
let v2 = parseFloat(prompt( 'Digite um segundo número de 1 a 10 !'))
let media

if ((v1 <= 0 && v1 >= 10) || (v2 <= 0 && v2 >= 10) ){
    media = (v1 + v2) / 2
    if (media > 7){
        vf = true
        alert(vf)
    }else{
        vf = false
        alert(vf)
    }
}else{
    alert('O número digitado é maior que 10')
}