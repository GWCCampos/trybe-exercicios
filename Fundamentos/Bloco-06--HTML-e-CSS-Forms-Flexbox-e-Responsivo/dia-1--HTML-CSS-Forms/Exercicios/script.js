const btnEnviar = document.querySelector('#btnEnviar');
const btnReset = document.getElementById('btnReset')

function previnir(event){
  event.preventDefault();
};

btnEnviar.addEventListener('click', previnir);

const nome = document.getElementById('inputNC');
const email = document.getElementById('inputEmail');
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');
const textoArea = document.getElementById('textoArea');
const data = document.getElementById('data');
const concordo1 = document.getElementById('concordo1');
const concordo2 = document.getElementById('concordo2');

function reset() {
  nome.innerHTML = '';
  email.innerHTML = '';
  op1.innerHTML = '';
  op2.innerHTML = '';
  op3.innerHTML = '';
  op4.innerHTML = '';
  textoArea.innerHTML = '';
  data.innerHTML = ''
  concordo1.innerHTML = '';
  concordo2.innerHTML = '';
};

btnReset.addEventListener('click', reset);
