//Programa 13
  //Escreva um programa que defina três números em constantes e retorne true se 
  //pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
  // > Bonus: use somente um if .

  const a = 1;
  const b = 2;
  const c = 3;

  console.log('tem impar?')
  
  if ((a % 2) != 0 || (b % 2) != 0|| (c % 2) != 0){
    console.log('true')
  }

  else {
    console.log('false')
  };