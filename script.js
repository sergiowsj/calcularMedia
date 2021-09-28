function calcularMedia() {
  var nome = document.getElementById("nome-aluno").value;
  var mediaNecessaria = document.getElementById("media-necessaria").value;
  var notap1 = parseFloat(document.getElementById("notap1").value);
  var notap2 = parseFloat(document.getElementById("notap2").value);
  var notap3 = parseFloat(document.getElementById("notap3").value);
  var notap4 = parseFloat(document.getElementById("notap4").value);
  var notaFinal = parseFloat((notap1 + notap2 + notap3 + notap4) / 4);
  var resultado;

  if (notaFinal >= mediaNecessaria) {
    resultado = `Parabéns ${nome}, você foi APROVADO!`;
  } else {
    resultado = `${nome}, você foi REPROVADO!`;
  }

  var exibirResultado = document.getElementById("resultado");
  exibirResultado.innerHTML = resultado;
}
// var nome = ''prompt("Digite o nome do aluno");''
// var notaPrimeiroBim = 9;
// var notaSegundoBim = 7;
// var notaTerceiroBim = 6;
// var notaQuartoBim = 8;

// var notaFinal =
//   (notaPrimeiroBim + notaSegundoBim + notaTerceiroBim + notaQuartoBim) / 4;
// notaFinal.toFixed(2);

// console.log("Bem vindo " + nome);
// console.log("Sua nota final é " + notaFinal);
// if (notaFinal >= 6) {
//   console.log("Aprovado!");
// } else {
//   console.log("Reprovado!");
// }

// document.write(`<center>Olá ${nome}!</center>`);