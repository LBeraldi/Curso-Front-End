// DADO O SEGUINTE OBJETO MOSTRE NA TELA O NOME A LISTA COM AS NOSTAS, MEDIA E SITUAÇÃO DO ALUNO -------------------------
const aluno = {
    nome: 'Pedrinho',
    notas: [1, 2, 3, 4, 5]
}

let aux = 0
let med

for (let i = 0; i < aluno.notas.length ; i++) {
    aux = aux + aluno.notas[i]
    med = aux / aluno.notas.length

}

let alunoNome = document.getElementById('alunoNome')
alunoNome.innerHTML = aluno.nome

let notas = document.getElementById('notas')
notas.innerHTML = aluno.notas

let media = document.getElementById('media')
media.innerHTML = med

let situacao = document.getElementById('situacao')

if(med > 6){
    situacao.innerHTML = 'O aluno ' + aluno.nome + ' foi APROVADO'
}else{
    situacao.innerHTML = 'O aluno ' + aluno.nome + ' foi REPROVADO'
}