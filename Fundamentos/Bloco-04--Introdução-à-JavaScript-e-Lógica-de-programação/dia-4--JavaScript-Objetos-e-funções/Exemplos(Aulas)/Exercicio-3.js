// Exercicio 3
// Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções 
// de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e 
// transformadas em parâmetros das funções.

//Exercicio 1 dia 4.1
//1
function soma (a, b) {
  return a + b;
};

console.log('soma :')
console.log(soma(1, 2));
 
//2

function  subtracao (a, b) {
  return a - b;
};

console.log('')
console.log('subtração :')
console.log(subtracao(1, 2));

//3

console.log('')
console.log('multiplicacao:')

function multiplicacao (a, b) {
  return a * b;
};

console.log(multiplicacao(1, 2));
 
 //4

 console.log('')
 console.log('divsão :')

 function divisao (a, b) {
  return a / b;
};

console.log(divisao(1, 2));

//5

console.log('')
console.log('módulo :')

function modulo (a, b) {
  return a % b;
};

console.log(modulo(1, 2));
 
//Exercício 2 dia 4.1
// Faça um programa que retorne o maior de dois números. 
// Defina no começo do programa duas constantes com os valores que serão comparados.

function maior (num1, num2) {
  if (num1 > num2) {
    console.log(num1, 'é o maior.');
  }

  else if(num2 > num1) {
    console.log(num2, 'é o maior.');
  };
}


console.log('')
console.log('maior :')

maior(3, 2);

// Exercicio 3 dia 4.1
// Faça um programa que retorne o maior de três números.
// Defina no começo do programa três constantes com os valores que serão comparados.

function maior2 (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1, 'é o maior.');
  }

  else if(num2 > num1 && num2 > num3) {
    console.log(num2, 'é o maior.');
  }

  else if(num3 > num1 && num3 > num2) {
    console.log(num3, 'é o maior.');
  }
};

console.log('');
console.log('o maior entre os três é :');

maior2(3, 2, 6);

//Exercicio 4 dia 4.1
// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, 
// "negative" se for negativo e "zero" caso contrário.

function nPZ (num) {
  if (num > 0) {
    console.log('positive');
  }
  else if (num < 0) {
    console.log('negative');
   }
  else {
    console.log('zero');
  };
};

console.log('');
console.log('positivo, negativo ou zero?')

nPZ(1);

//Exercício 5 dia 4.1
// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum 
// ângulo for inválido o programa deve retornar uma mensagem de erro.
// >>Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// >>Um ângulo será considerado inválido se não tiver um valor positivo.

function triangulo (ang1, ang2, ang3) {
  
  if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    console.log('erro');
  }
  
  else if (ang1 + ang2 + ang3 === 180) {
    console.log(true);
  }

  else if (ang1 + ang2 + ang3 !== 180) {
    console.log(false);
  };
};

console.log('');
console.log('É um triângulo?');

triangulo(60, 60, 60);