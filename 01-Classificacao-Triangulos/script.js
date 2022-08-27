/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 

- Equilátero: Os três lados são iguais.
- Isósceles: Dois lados iguais.
- Escaleno: Todos os lados são diferentes.

Crie um código JS que receba os comprimentos dos lados de um triângulo através de inputs e retorne sua classificação
quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as  condições matemáticas de existência de um triângulo)

*/

function classificarTriangulo() {
  let ladoA = document.querySelector("#txtNum1");
  let ladoB = document.querySelector("#txtNum2");
  let ladoC = document.querySelector("#txtNum3");
  let resultado = document.getElementById("res");

  if (ladoA.value.length == 0 || ladoB.value.length == 0 || ladoC.value.length == 0) {
    resultado.innerHTML = "Impossível classificar. Insira as medidas!";
    resultado.style.color = "#FF0000";
  } else if (ladoA.value <= 0 || ladoB.value <= 0 || ladoC.value <= 0) {
    resultado.innerHTML = "Dados inválidos. Nenhuma das medidas pode ser menor ou igual a zero!";
    resultado.style.color = "#FF0000";
  } else {
    let medidaLadoA = Number(ladoA.value);
    let medidaLadoB = Number(ladoB.value);
    let medidaLadoC = Number(ladoC.value);

    resultado.style.color = "#006400";

    if (medidaLadoA === medidaLadoB && medidaLadoB === medidaLadoC) {
      resultado.innerHTML = "Este é um triângulo Equilátero";
    } else if (medidaLadoA === medidaLadoB || medidaLadoB === medidaLadoC || medidaLadoC === medidaLadoA) {
      resultado.innerHTML = "Este é um triângulo Isósceles";
    } else {
      resultado.innerHTML = "Este é um triângulo Escaleno";
    }
  }
}
