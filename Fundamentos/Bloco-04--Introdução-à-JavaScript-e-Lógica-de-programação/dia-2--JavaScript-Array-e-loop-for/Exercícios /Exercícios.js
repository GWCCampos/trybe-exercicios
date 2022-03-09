// Exercicio 1
//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele 
//contidos com a função console.log() ;

console.log('Exercicio 1');
console.log('')

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let numero of numbers){
  console.log(numero); 
};

//Exercicio 2
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

console.log('')
console.log('Exercicio 2');
console.log('')

let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
  let calculo = soma + numbers[index];
  soma = calculo;
};

console.log(soma)

//Exercicio 3
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// > A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.


console.log('')
console.log('Exercicio 3');
console.log('')

let media = soma / 2;

console.log(media);

//Exercicio 4 
//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
//imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

console.log('')
console.log('Exercicio 4');
console.log('')

//media = 19, pra testar se estava funcionando

if(media > 20){
  console.log('Valor maior que 20')
}

else{
  console.log('Valor menor que 20')
}