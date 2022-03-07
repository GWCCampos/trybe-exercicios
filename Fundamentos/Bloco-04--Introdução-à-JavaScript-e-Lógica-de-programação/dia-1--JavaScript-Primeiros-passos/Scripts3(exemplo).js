const notaDesafio = 20;

if (notaDesafio >= 80){
  console.log('Parabêns, você foi Aprovada(o)')
}
else if(notaDesafio < 80 && notaDesafio >= 60){
  console.log('Você está na nossa lista de espera')
}

else if(notaDesafio < 60 && notaDesafio >= 0) {
  console.log('Você foi reprovado')
}

else {
  console.log('Algo está errado com sua nota, por favor entre em contato com nosso time de suporte')
}