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

const daysList = document.getElementById('days');

function liCreate() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const dias = dezDaysList[i];
    const dianovo = document.createElement('li')
    dianovo.innerText = dias;
    dianovo.style.color = 'rgb(119, 119, 119)';

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

function HolidayB(param1) {
  const botao = document.createElement('button');
  botao.innerText = param1;
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

const container = document.querySelector('.buttons-container')

function dayF(param1) {
  const btnF = document.createElement('button');
  btnF.id = 'btn-friday';
  btnF.innerText = param1;
  btnF.name = param1;
  container.appendChild(btnF);
};

dayF('Sexta-feira');

function dianmOnF() {
  const sF = document.querySelectorAll('.Friday');
  for (let i = 0; i < sF.length; i += 1) { 
     if (sF[i].style.border !== '1px solid green') {
      sF[i].style.setProperty('border', '1px solid green');
    }
     else if (sF[i].style.border === '1px solid green') {
      sF[i].style.border = '';
    }
  }
}

const btnF = document.getElementById('btn-friday');

btnF.addEventListener('click', dianmOnF)

function zoomIn(event) {
  event.target.style.fontSize = '30px';
  event.target.style.transition = 'font-size 500ms';
}

function zoomOut(event) {
  event.target.style.fontSize = '20px';
}

daysList.addEventListener('mouseover', zoomIn);
daysList.addEventListener('mouseout', zoomOut);

const mytask = document.querySelector('.my-tasks')

function criaTarefa(param) {
  const tarefa = document.createElement('span');
  tarefa.innerText = param;
  mytask.appendChild(tarefa)
}

criaTarefa('cozinhar');

function descricao(param) {
  const cor = document.createElement('div');
  cor.style.backgroundColor = param;
  cor.className = 'task';
  mytask.appendChild(cor);
}

descricao('green');

function seleciona(event) {
  const evento = event.target;
  if (evento.className === 'task') {
  event.target.className = 'task-selected';
  } else if (evento.className === 'task-selected') { 
    evento.className = 'task'
  } else {
    evento.className = evento.className
  }
}

mytask.addEventListener('click', seleciona);

function mudaCor(event) {
  const evento = event.target;
  const div = document.querySelector('.task-selected');
  if (evento.classList.contains('day') && evento.style.color !== 'rgb(119, 119, 119)') {
  evento.style.color = 'rgb(119, 119, 119)';
  } else if (evento.classList.contains('day')) { 
    evento.style.color = div.style.backgroundColor;
  }
}

daysList.addEventListener('click', mudaCor);