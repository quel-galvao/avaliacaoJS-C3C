/*
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. 
Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 
Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação:
                
3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 

Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.

*/

function calcularEquacaoSegundoGrau() {
  let a = document.querySelector("#txtNum1");
  let b = document.querySelector("#txtNum2");
  let c = document.querySelector("#txtNum3");
  let resultado = document.getElementById("res");

  if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0) {
    resultado.innerHTML = "Impossível calcular. Faltam Dados!";
    resultado.style.color = "#FF0000";
  } else {
      let valorA = Number(a.value);
      let valorB = Number(b.value);
      let valorC = Number(c.value);
      
      let x = []
      let delta = Math.pow(valorB,2) - 4 * valorA * valorC

      if (delta < 0) {
        resultado.style.color = "#FF0000";
        resultado.innerHTML = "Delta é negativo";
      } else {
        x[0] = (-valorB + Math.sqrt(delta, 2)) / (2 * valorA)
        x[1] = (-valorB - Math.sqrt(delta, 2)) / (2 * valorA) 
        resultado.style.color = "#006400";
        resultado.innerHTML =`x' = ${x[0].toFixed(2).replace(".",",")}</br>x'' = ${x[1].toFixed(2).replace(".",",")}`;
      }
    }
  }
