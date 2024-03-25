
let nomes = ['Joao', 'Maria', 'Daniel', 'Beatriz', 'Lucas']  // Sintexe literal
// let nomes = new array()  Função construtora

let nome = prompt('Digite seu nome')

// O indice de um array, é o seu tamanho menos um
// nomes[nomes.length] = nome; ( O termo (nomes.length) mostra o tamanho de um array )


for (i = 0; i < nomes.length; i++){
    document.write(nomes[i])
}
console.log('Nesta lista há ' + nomes.length + ' nomes')