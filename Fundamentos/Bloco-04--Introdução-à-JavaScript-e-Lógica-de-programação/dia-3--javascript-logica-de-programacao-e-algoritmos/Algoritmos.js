//Exercicio 1
// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// |O fatorial é representado pelo sinal !|
// |! = 4 x 3 x 2 x 1 = 24                |
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

console.log('Exercicio 1');
console.log('');

let fatorial = 10;

for (let number = 10; number > 0; number -= 1) {
  
  fatorial *= number;
};

console.log('O fatorial desse número é: ', fatorial)

// Exercicio 2
// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". 
// Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

console.log('');
console.log('Exercicio 2');
console.log('');

let word = 'tryber';
let wordR = [];
let reverse = '';

for (let index of word) {
  wordR.unshift(index);
  };

for (let i of wordR){
  reverse += i
};


console.log('A palavra ao contrário fica assim: ', reverse);

// Exercicio 3
// Faça um programa que retorne o maior de três números. Defina no começo do programa 
// três constantes com os valores que serão comparados.

console.log('');
console.log('Exercicio 3');
console.log('');
