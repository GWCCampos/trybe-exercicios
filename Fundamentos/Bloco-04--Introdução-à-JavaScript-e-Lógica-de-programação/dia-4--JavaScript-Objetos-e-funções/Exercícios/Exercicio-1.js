//Exercicio 1

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Imprima no console uma mensagem de boas-vindas para a personagem acima, 
// incluindo seu nome. Valor esperado no console:
// | Bem-vinda, Margarida |

  console.log('Bem vinda', info.personagem);

//Exercicio 2 
//Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, 
//em seguida, imprima o objeto no console. Valor esperado no console:
// | {
// | personagem: 'Margarida',                                                 |
// | origem: 'Pato Donald',                                                   |
// | nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',  |
// | recorrente: 'Sim'                                                        |
// |}                                                                         |

info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

console.log('');
console.log(info);

//Ecercicio 3
//Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

console.log('');

for (key in info) {
  console.log(key);
};

//Ecercicio 4
//Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

console.log('');

for (prop in info) {
  console.log(info[prop]);
};

//Exercicio 5
//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
//'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
//Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

console.log('');

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let i in info && info2) {
  if (info[i] === info2[i]) {
  console.log('Ambos', i + 's')
  }
  else {
    console.log(info[i], 'e', info2[i]);
  };
};


//Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
// Exercício 6
// Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um 
// console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

console.log('');

let leitoL = leitor.livrosFavoritos[0]

console.log('O livro favorito de', leitor.nome, '', leitor.sobrenome, 'se chama', leitoL.titulo + '.')

// Exercicio 7
// Adicione um novo livro favorito na chave livrosFavoritos , que é um array . 
// Atribua a esta chave um objeto contendo as seguintes informações:

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

// Exercicio 8
// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: 
// "Julia tem 2 livros favoritos"

console.log('');
console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos.')