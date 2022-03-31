function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function liCreate() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.getElementById('days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const dias = dezDaysList[i];
    const dianovo = document.createElement('li')
    dianovo.innerText = dias;

    daysList.appendChild(dianovo);
    dianovo.classList.add('day');
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      dianovo.classList.add('Holiday')
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
      dianovo.classList.add('Friday');
    }
  }
};

liCreate();

function HolidayB(Feriados) {
  const botao = document.createElement('button');
  botao.innerText = Feriados;
  const local = document.querySelector('.buttons-container');

  local.appendChild(botao);
  botao.id = 'btn-holiday'
};

HolidayB('Feriados');

function dinamOnHB() {
  const botao = document.querySelector('#btn-holiday')
  botao.addEventListener('click', function() {
    const dias = document.getElementById('days').children;
    for (let i = 0; i < dias.length; i += 1) {
      const feriado = dias[i].classList;
      for (let z = 0; z < feriado.length; z += 1) {
      if (feriado[z].includes('Holiday') && dias[i].style.backgroundColor !== 'red') {
          dias[i].style.backgroundColor = 'red'
          dias[i].style.color = 'white';
        } else if (feriado[z].includes('Holiday') && dias[i].style.backgroundColor === 'red') {
        dias[i].style.backgroundColor = 'rgb(238,238,238)';
        dias[i].style.color = 'rgb(119, 119, 119)';} 
          dias[i] = dias [i];
        
      }
    }
  }
  )
};

dinamOnHB();


function dayE(Sextafeira) {

};