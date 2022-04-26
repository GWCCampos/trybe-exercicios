const btnEnviar = document.querySelector('#btnEnviar');
const btnReset = document.getElementById('btnReset')
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

function previnir(event) {
  event.preventDefault();
};

function checkN() {
  if (nome.value.length < 10 || nome.value.length > 40) {
    window.alert('Dados inválidos. Seu nome deve ter no minimo 10 caracteres e no máximo 40')
    return false;
  } return true;
};

function checkE() {
  if (email.value.length < 10 || email.value.length > 50) {
    window.alert('Dados inválidos. Seu email deve ter no minimo 10 caracteres e no máximo 40')
    return false;
  } return true;
};

function checkTA() {
  if (email.value.length > 500) {
    window.alert('Dados inválidos. Sua resposta precisa ser menor que 500 caracteres')
    return false;
  } return true
};

function checkA() {
  if (checkN() === false || checkE() === false || checkTA === false) {
    return true;
  } else {
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
};

btnEnviar.addEventListener('click', previnir);
btnEnviar.addEventListener('click', checkA);

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
