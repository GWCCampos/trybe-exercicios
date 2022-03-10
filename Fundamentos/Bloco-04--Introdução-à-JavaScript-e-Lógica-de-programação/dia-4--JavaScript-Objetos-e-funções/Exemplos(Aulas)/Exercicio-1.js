// Exercicio 1
// Crie um objeto player contendo as variáveis listadas abaixo

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
  nome: name ,
  sobrenome: lastName,
  idade: age , 
  medalhas: { golden: 2, 
    silver: 3 },
};

// Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem 
// no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log('A jogadora', player.nome, player.sobrenome, 'tem', player.idade, 'anos de idade.');

// Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um 
// array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

  player = {
  nome: name ,
  sobrenome: lastName,
  idade: age , 
  medalhas: medals,
  bestintheworld: [2006, 2007, 2008, 2009, 2010, 2018],
};

// Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: 
// "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('');
console.log('A jogadora', player.nome, player.sobrenome, 'foi eleita a melgor do mundo por', player.bestintheworld.length, 'vezes.');

// Acesse a chave medals e faça um console.log no seguinte 
// formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata"

console.log('');
console.log('A jogadora possui', player.medalhas.golden, 'medalhas de ouro e', player.medalhas.silver, 'medalhas de prata')