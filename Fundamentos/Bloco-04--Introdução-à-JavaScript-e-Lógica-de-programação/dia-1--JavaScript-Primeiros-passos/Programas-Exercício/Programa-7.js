//Programa 7
//Faça um programa que retorne o maior de três números. 
//Defina no começo do programa três constantes com os valores que serão comparados.

const a = 1;
const b = 2;
const c = 3;

if (a > b && a > c) {
  console.log('o maior é', a, '(a)')
}

else if (b > a && b > c) {
  console.log('o maior é', b, '(b)') 
}

else if (c > a && c > b) {
  console.log('o maior é', c, '(c)')
}

else if (a === b && a === c){
  console.log('Não há maior entre esses, são todos iguais.')
}

else {
  console.log('Algo tá errado')
};
