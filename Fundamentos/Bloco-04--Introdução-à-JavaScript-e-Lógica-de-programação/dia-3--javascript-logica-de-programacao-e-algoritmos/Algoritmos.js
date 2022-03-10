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
// Considere o array de strings abaixo:
// |let array = ['java', 'javascript', 'python', 'html', 'css'];|
// Escreva dois algoritmos: um que retorne a maior palavra deste array e 
// outro que retorne a menor. Considere o número de caracteres de cada palavra.

console.log('');
console.log('Exercicio 3');
console.log('');

let array = ['java', 'javascript', 'python', 'html', 'css']
let maior = array[0];
let menor = array[0];
let numC = 0;

//Maior

for (let i = 0; i < array.length; i += 1) {
  let teste = array[i];
  numC = 0;
  for (let z of teste) {
    if (z = String) { 
      numC += 1; 
    };
    if (maior.length < numC) { 
      maior = teste; 
     }
  };
}; 

console.log('A maior palavra é', maior)

//Menor

for (let i = 0; i < array.length; i += 1) {
  let teste = array[i];
  numC = 0;
  for (let z of teste) {
    if (z = String) { 
      numC += 1; 
    };
    if (maior.length > numC) { 
      menor = teste; 
     }
  };
}; 

console.log('A menor palavra é', menor)

//Exercicio 4
// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o
// maior número primo entre 0 e 50.

console.log('');
console.log('Exercicio 4');
console.log('');

