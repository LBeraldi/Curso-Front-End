/*
    DESAFIO CALCULAR MEDIA !!
    - PODE RECEBER UM OU MAIS VALORES NUMÉRICOS
    - DEVE RETORNAR UM ÚNICO NÚMERO
    - DEVE GERAR UM ERRO SE REBEBER UM PARÂMETRO NÃO NÚMERO
    - DEVE RETORNAR ZERO CASO NÃO RECEBA NENHUM PARÂMETRO
*/

(function (){
    function calcularMedia(){
        let total = 0
        let qtd = arguments.length
        for (let i = 0; i < qtd ; i++) {
            if(typeof arguments[i] !== 'number'){
                throw Error('Only numbers')
            }
            total += arguments[i]
        }
        return total / qtd
    }
/*   let media = calcularMedia(2,4)
    console.log(media)*/

    console.log(calcularMedia(2,4,5, 6,7))
})()

// const arr = [1, 2, 3, 4]