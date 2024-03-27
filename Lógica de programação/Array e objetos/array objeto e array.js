// DADO O ARRAY ABAIXO, MOSTRE UMA LISTAS NO HTML COM AS NOTAS DE CADA ALUNO
const alunos = [
    {
        nome: 'PEDRINHO',
        notas: [1, 2, 3 ,4]
    },
    {
        nome:'JOAOZINHO',
        notas: [10, 2, 8 ,3]
    }
]
let container = document.getElementById('container')
for (let i = 0; i <alunos.length ; i++) {
    console.log(alunos[i].nome)
    container.innerHTML = '<ul><li>' + alunos[i].nome + '</li></ul>'
}
