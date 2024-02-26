//Ficar na linha

function nextInLine(arr, item) {
    // Altere apenas o código abaixo desta linha
    arr.push(item);
//Portanto, o que esse trecho de código faz é adicionar o valor contido na variável item ao final do array representado pela variável arr. Após a execução deste comando, o array terá um elemento adicional no final.


    // Remove o primeiro elemento do array e armazena em uma variável
    let removedElement = arr.shift();
    // Retorna o elemento removido
    return removedElement;
    // Altere apenas o código acima desta linha
  }
  
  // Configuração
  let testArr = [1, 2, 3, 4, 5];
  
  // Exibir o código
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));