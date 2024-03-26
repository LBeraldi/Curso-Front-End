const objetos = [
    {nome: 'caneta', preco: 2, quantidade: 5},
    {nome: 'caderno', preco: 10, quantidade: 8},
    {nome: 'caneca', preco: 15, quantidade: 3},
    {nome: 'garrafa', preco: 6, quantidade: 15}
]

const listaObjetos = document.getElementById('listaObjetos')

for (let i = 0; i < objetos.length; i++) {
    listaObjetos.innerHTML += 
    '<tr><th> ' + objetos[i].nome + '</th> <th> ' + objetos[i].preco + '</th> <th> ' + objetos[i].quantidade + '</th></tr>'
}