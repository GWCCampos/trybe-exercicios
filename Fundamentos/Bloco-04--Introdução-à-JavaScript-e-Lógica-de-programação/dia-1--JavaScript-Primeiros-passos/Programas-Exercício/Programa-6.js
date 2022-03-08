//Programa 6
  //Faça um programa que retorne o maior de dois números.
  //Defina no começo do programa duas constantes com os valores que serão comparados.
 
const a = 1;
const b = 2;

if (a > b) {
  console.log('o maior é', a, '(a)')
}

else if (b > a) {
 
  console.log('o maior é', b, '(b)') 
}

else if (a === b){
  console.log('Não há maior entre esses, são todos iguais')
}

else {
  console.log('Algo tá errado')
}
