var aluno = prompt('Digite o nome do aluno')
//Leitura de notas
var notaB1 = prompt('Digite a nota do primeiro bimestre')
var notaB2 = prompt('Digite a nota do segundo bimestre')
var notaB3 = prompt('Digite a nota do terceiro bimestre')
var notaB4 = prompt('Digite a nota do quarto bimestre')
//Média
var media = (parseFloat(notaB1) + parseFloat(notaB2) + parseFloat(notaB3) + parseFloat(notaB4)) / 4
var mediaFixada = media.toFixed(1)

alert("A média do aluno "+ aluno +" é "+mediaFixada)

if (mediaFixada >= 6){
  alert("O aluno "+ aluno + " está aprovado")
}else{
  alert("O aluno "+ aluno + " está reprovado")
 }
    