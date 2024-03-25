//Let objeto = {} || SINTAXE LITERAL DE DECLARAR UM OBJETO EM JS
// let objeto = new Object() || SINTAXE CONTRUTORA DE DECLARAR UM OBJETO


// MOSTRE NA TELA ONDE JOAO MORA -------------------------------------------
/*
const endereco = {
    rua: 'RUA DAS TULIPAS',
    numero: 302
}

const pessoa = {
    nome: 'JOAO',
    sobrenome: 'FAGUNDES',
    endereco // OBJETO  QUE RECEBE OUTRO OBJETO
}

console.log(`${pessoa.nome} mora em ${pessoa.endereco.rua} no numero ${pessoa.endereco.numero}`)
// LOOP FOR .. IN SERVE PARA INTERAGIR COM UM OBJETO
for (let props in pessoa) {
    console.log(props, pessoa[props])
}

//  MOSTRE O CONSUMO DE GASOLINA -------------------------------------------
/*
const carro = {
    modelo: 'UNO',
    ano: 2023,
    km: 10000,
    combustivel: 'GASOLINA',
    litrosConsumidos: 624
};

carro.marca = 'FIAT'

let aux = carro.km / carro.litrosConsumidos

console.log(`O carro ${carro.modelo} da marca ${carro.marca} fez em média ${aux} Km/l de ${carro.combustivel}`)



// EXEMPLO DE USO DE OBJETO -------------------------------------------
/*
let produtos = {
    nome: 'caneta',
    quantidade: 3,
    preco: 6
}

console.log(produtos.nome + ' custa ' + produtos.preco + ' e tem ' + produtos.quantidade + ' em estoque')
console.log(`${produtos.nome} custa R$${produtos.preco} e há ${produtos.quantidade} unidades em estoque`)*/