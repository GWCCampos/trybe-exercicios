// Exercicio 1
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele 
// contidos com a função console.log() ;

console.log('Exercicio 1');
console.log('');

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let numero of numbers){
  console.log(numero); 
};

// Exercicio 2
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

console.log('');
console.log('Exercicio 2');
console.log('');

let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
  let calculo = soma + numbers[index];
  soma = calculo;
};

console.log(soma);

// Exercicio 3
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// > A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.


console.log('');
console.log('Exercicio 3');
console.log('');

let media = soma / 2;

console.log(media);

// Exercicio 4 
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
// imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

console.log('');
console.log('Exercicio 4');
console.log('');

//media = 19; , pra testar se estava funcionando

if(media > 20){
  console.log('Valor maior que 20');
}

else{
  console.log('Valor menor que 20');
};

// Exercicio 5
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

console.log('');
console.log('Exercicio 5');
console.log('');

let maior = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
   if (maior < numbers[index]) {
    maior = numbers[index];
   }

   else {
     maior = maior;
   };
};

console.log(maior)

// Exercicio 6
// Descubra quantos valores ímpares existem no array e imprima o resultado.
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

console.log('');
console.log('Exercicio 6');
console.log('');

let impar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
    impar += 1 ;
    }

    else {
      impar = impar
    };
};

if (impar > 0) {
  console.log(impar)
}

else{
  console.log('nenhum valor ímpar encontrado')
};

// Exercicio 7 
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];

console.log('');
console.log('Exercicio 7');
console.log('');

for (let index = 0; index < numbers.length; index += 1) {
  if (menor > numbers[index]) {
    menor = numbers[index];
  }
  else {
    menor = menor;
  };
};

console.log(menor);