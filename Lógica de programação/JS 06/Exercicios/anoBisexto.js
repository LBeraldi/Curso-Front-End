function anoBisexto(ano) {
    if(ano % 4 == 0){
        return true
    }else{
        return false
    }
}

console.log(anoBisexto(2000))