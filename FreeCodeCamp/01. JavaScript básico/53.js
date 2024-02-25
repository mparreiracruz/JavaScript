//Conhecer o escopo local e funções

function myLocalScope() {  
  
    const myVar = "variavel";
    console.log('inside myLocalScope', myVar);
  }
  
  myLocalScope();
  
  console.log('outside myLocalScope', myVar);