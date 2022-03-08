//Programa 9
  //Faça um programa que defina três constantes com os valores dos três ângulos internos de 
  //um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e 
  //false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma 
  //mensagem de erro.
  // > Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
  // > Um ângulo será considerado inválido se não tiver um valor positivo.


const a = 60;
const b = 60;
const c = 60;

console.log('Seu triângulo é válido?')

if (a + b + c === 180) {
  console.log('True:D')
}

else if (a + b + c !== 180 ) {
  console.log('false D:')
}

else {
  console.log('erro')
};