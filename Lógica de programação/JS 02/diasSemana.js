let dia = new Date()

// console.log('Dia get ' + dia.getDay())

const diaSemana = [ 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo' ]

console.log('hoje é ' + diaSemana[dia.getDay() - 1] + ' Dia ' + dia.getDate())

