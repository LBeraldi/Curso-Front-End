const notas = [[3, 5, 6, 1], [2, 8, 4, 9], [10, 3, 5, 7]]

console.log(notas[1]) //[2, 8, 4, 9]
console.log(notas[1][2])

console.log(notas[2][1]) // 3

for (let i = 0; i < notas.length; i++) {
    const notasAluno = notas[i]
    console.log(notasAluno)

    for (let j = 0; j < notasAluno.length; j++) {
        // console.log(notasAluno[j])
        console.log(notas[i][j]) // Matrizes
    }
}