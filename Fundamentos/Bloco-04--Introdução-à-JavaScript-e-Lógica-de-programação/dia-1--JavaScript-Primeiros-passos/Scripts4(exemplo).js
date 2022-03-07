// Inicio exercício 1 Sobre && 
const currentHour = 0;
let message = '';

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir'
}

else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D'
}

else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?'
}

else if (currentHour >= 11 && currentHour < 14) {
  message = 'Hora do almoço!!!'
}

else if (currentHour >= 4 && currentHour < 11) {
  message = 'Hmmm, cheiro de café recém passado'
}

else {
  message = 'VAI DORMIR, TÁ NA HORA DE COMER NADA NÃO D:< (mas se quiser pode)'
};

console.log(message);

// Fim exercício 1 Sobre &&

// Inicio exercício 2 Sobre ||

let weekday = "quarta-feira"; 

if (weekday === 'segunda-feira' || weekday === 'terça-feira' || weekday === 'quarta-feira' || weekday === 'quinta-feira' || weekday === 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D')
}

else if (weekday === 'sabado' || weekday === 'domingo') {
  console.log('FINALMENTE, descanso merecido UwU')
}

else {
  console.log('Acho que está acessando o multiverso errado, esse aqui não possui esse dia ainda o-o')
};

