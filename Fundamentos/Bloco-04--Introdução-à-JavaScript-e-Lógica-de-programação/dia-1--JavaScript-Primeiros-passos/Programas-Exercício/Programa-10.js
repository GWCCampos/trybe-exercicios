//Programa 10
  //Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que 
  //ela faz. 
  // > Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras 
  //   maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
  // > Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras
  //   minúsculas (lower case) .
  // > Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
  // > Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = '';

peca = 'peao';

if (peca.toLowerCase(String) === 'peao') {
  console.log('Um para Frente, ou dois pra frente se for o primeiro movimento e mata na diagonal')
} 

else if (peca.toLowerCase(String) === 'torre') {
  console.log('Para frente e para os lados')
}

else if (peca.toLowerCase(String) === 'cavalo') {
  console.log('Movimenta em L')
}

else if (peca.toLowerCase(String) === 'bispo') {
  console.log('Move na diagonal')
}

else if (peca.toLowerCase(String) === 'rei') {
  console.log('Uma casa em todas as direções')
}

else if (peca.toLowerCase(String) === 'rainha') {
  console.log('Todas as direções')
}

else {
  console.log('error')
};

