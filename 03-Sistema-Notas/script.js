/*
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. 
Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 
Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação:
                
3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 

Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados
sejam iguais.Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.

*/

function arredondarNota(nota) {
  let proximoMultiploDeCinco = Math.ceil(nota / 5) * 5
  if (nota >= 38 && proximoMultiploDeCinco - nota < 3) {
      let notaFinal = proximoMultiploDeCinco
      return notaFinal
  }
  return nota
}

function validarSituacaoAluno() {
  let notaInserida = document.querySelector("#txtNum1");
  
  let resultado = document.getElementById("res");

  if (notaInserida.value.length == 0 || notaInserida.value < 0 ) {
    resultado.innerHTML = "Impossível calcular! <br>Informe uma nota válida.";
    resultado.style.color = "red";
  } else {
    
    let nota = Number(notaInserida.value);

    let notaFinalArredondada = arredondarNota(nota)

    if (nota < 38) {
      resultado.style.color = "red";
      resultado.innerHTML = `Aluno Reprovado. Nota final: ${notaFinalArredondada}`
    } else if (nota <= 100){
      resultado.style.color = "#006400";
      resultado.innerHTML =`Aluno aprovado. Nota final: ${notaFinalArredondada}`
    } else {
      resultado.innerHTML = "Nota Inválida!";
      resultado.style.color = "red";
    }
  }
}

