let pessoa1 = {
    nome: 'PEDRO',
    email: 'sila6982@uorak.com'
}
let pessoa2 = {
    nome: 'THIAGO',
    email: 'jiacheng1968@uorak.com'
}
let pessoa3 = {
    nome: 'LUCAS',
    email: 'domicia3703@uorak.com'
}
let pessoa4 = {
    nome: 'VICENTE',
    email: 'matutina2014@uorak.com'
}
let pessoa5 = {
    nome: 'EUGENIA',
    email: 'baptiste3082@uorak.com'
}
// DUAS FORMAS DIFERENTES DE DECLARAR UM ARRAY QUE CONTÉM DIVERSOS OBJETOS
/*const pessoas = [
    {nome: 'PEDRO', email: 'sila6982@uorak.com'},
    {nome: 'THIAGO', email: 'jiacheng1968@uorak.com'},
    {nome: 'LUCAS', email: 'domicia3703@uorak.com'},
    {nome: 'VICENTE', email: 'matutina2014@uorak.com'},
    {nome: 'EUGENIA', email: 'baptiste3082@uorak.com'}
]*/
const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5]

const listaPessoas = document.getElementById('listaPessoas')

for (let i = 0; i < pessoas.length ; i++) {
    console.log(pessoas[i].email)
    listaPessoas.innerHTML = '<li> ' + pessoas[i].nome +' : ' + pessoas[i].email +'</li>'
}
