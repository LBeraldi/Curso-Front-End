const produto = {
    nome: "caneta",
    quantidade: 10,
    comprar: function (qtd) { // MÉTODO DENTRO DO OBJETO
        if (qtd > this.quantidade) {
            console.log("quantidade insuficiente, quantidade em estoque é de ", this.quantidade)
            return null
        }

        console.log(`comprar caneta`)
        this.quantidade -= qtd
    },
    teste1() {
        console.log("teste 1")
        console.log(this)
    },
    teste2: () => {
        console.log("teste 2")
        this.quantidade = 1000
        console.log(this) // WINDOW
    }
// QUANDO SE TRATA DE OBJETOS SEMPRE USE FUNCTIONS DECLARATE
}

console.log(produto)

// COMPRAR 3 CANETAS
// PRODUTO.QUANTIDADE = 7
produto.quantidade -= 3

console.log(produto)

//COMPRAR 14 CANETAS
produto.quantidade -= 14

produto.quantidade = 10

produto.comprar(3)

produto.comprar(13)

produto.teste1()
produto.teste2()
console.log(produto)