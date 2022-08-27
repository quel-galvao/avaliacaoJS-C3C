function contar(){
    let num1 = document.querySelector('#txtNum1');
    let resultado = document.getElementById('res');

    if (num1.value.length == 0){
          resultado.innerHTML = 'Impossível contar. Faltam Dados!';
          resultado.style.color = 'red';
      
    } else {
      resultado.innerHTML = ''
      resultado.style.color = 'black';
      resultado.style.textAlign = 'center';
      let numeroInserido = Number(num1.value);

      if( numeroInserido > 15){
        resultado.style.textAlign = 'justify';
      }
      
      for (let i = 1; i <= numeroInserido; i++) {
            
            if (i % 5 === 0 && i % 9 === 0) {
                resultado.innerHTML += `LuidyMoura `
            } else if (i % 5 === 0) {
                resultado.innerHTML += `Luidy `
            } else if (i % 9 === 0) {
                resultado.innerHTML += `Moura `
            } else {
                  resultado.innerHTML += `${i} `
            }
        }
    }
}

