const body = document.querySelector('body');
const inputCF = document.getElementById('corDeFundo');
const inputC = document.getElementById('corTexto');
const inputTF = document.getElementById('tamanhoFonte');
const inputE = document.getElementById('espacamento');
const inputFF = document.getElementById('tipoFonte');
const ps = document.querySelectorAll('p');
const hs = document.querySelector('h3');
const sec = document.getElementById('espaco')
const reset = document.getElementById('resetaP');

function chama() {
  const bgC = localStorage.getItem('backgroundColor');
  const hsC = localStorage.getItem('hs');
  const hsT = localStorage.getItem('hsT')
  const hsP = localStorage.getItem('hsP')
  const hsFF = localStorage.getItem('hsFF')
  const secC = localStorage.getItem('borderC')
  const pC = localStorage.getItem('p');
  const pT = localStorage.getItem('pT');
  const pP = localStorage.getItem('pP')
  const pFF = localStorage.getItem('pFF')
 
  body.style.backgroundColor = bgC;
  sec.style.borderColor = secC;
  hs.style.color = hsC;
  hs.style.fontSize = hsT; 
  hs.style.padding = hsP;
  hs.style.fontFamily = hsFF;
  for (let i = 0; i < ps.length; i += 1){
    ps[i].style.color = pC;
    ps[i].style.fontSize = pT;
    ps[i].style.padding = pP;
    ps[i].style.fontFamily = pFF;
  }
}

function mudaCorDeFundo(event) {
  const valor = inputCF.value.toLowerCase();
  if (event.key === "Enter" && valor === 'black') {
    body.style.backgroundColor = valor;
    hs.style.color = 'white';
    sec.style.borderColor = 'white';
    for (let i = 0; i < ps.length; i += 1){
      ps[i].style.color = 'white';
      localStorage.setItem('p', 'white');
    }
    inputCF.value = '';
  } else if (event.key === 'Enter' && valor !== 'black') {
    body.style.backgroundColor = valor;
    hs.style.color = 'black';
    sec.style.borderColor = 'black';
    for (let i = 0; i < ps.length; i += 1){
      ps[i].style.color = 'black';
      localStorage.setItem('p', 'black');
    }
    inputCF.value = '';
    localStorage.setItem('p', 'black');
  }
localStorage.setItem('backgroundColor', valor);
localStorage.setItem('hs', hs.style.color);
localStorage.setItem('borderC', sec.style.borderColor);
}

inputCF.addEventListener('keydown', mudaCorDeFundo);

function mudaCorTexto(event) {
  const valor = inputC.value.toLowerCase();
  if (event.key === 'Enter') {
    hs.style.color = valor;
    for (let i = 0; i < ps.length; i += 1){
      ps[i].style.color = valor;
    }
    inputC.value = '';
  }
  localStorage.setItem('p', valor);
  localStorage.setItem('hs', hs.style.color);
}

inputC.addEventListener('keydown', mudaCorTexto)

function mudaTF(event) {
  let valor = inputTF.value.toLowerCase();
  if (event.key === 'Enter' && valor.includes('px')) {
    hs.style.fontSize = valor;
    for (let i = 0; i < ps.length; i += 1){
      ps[i].style.fontSize = valor;
    }
    inputTF.value = ''; 
  } else if (event.key === 'Enter') {
      valor += 'px';
      hs.style.fontSize = valor;
      for (let i = 0; i < ps.length; i += 1){
      ps[i].style.fontSize = valor;
      inputTF.value = '';
    }
    };
  localStorage.setItem('pT', valor);
  localStorage.setItem('hsT', hs.style.fontSize);
}

inputTF.addEventListener('keydown', mudaTF);

function mudaEsp(event) {
  let valor = inputE.value.toLowerCase();
  if (event.key === 'Enter' && valor.includes('px')) {
    hs.style.padding = valor;
    for (let i = 0; i < ps.length; i += 1){
      ps[i].style.padding = valor;
    }
    inputE.value = '';
    localStorage.setItem('pP', valor); 
  } else if (event.key === 'Enter') {
      valor += 'px';
      hs.style.padding = valor;
      for (let i = 0; i < ps.length; i += 1){
      ps[i].style.padding = valor;
      inputE.value = '';
      localStorage.setItem('pP', valor);
    }
    };
  localStorage.setItem('hsP', hs.style.padding);
}

inputE.addEventListener('keydown', mudaEsp);

function mudaFonte(event) {
  const valor = inputFF.value.toLowerCase();
  if (event.key === 'Enter') {
  hs.style.fontFamily = valor;
  for (let i = 0; i < ps.length; i += 1) {
    ps[i].style.fontFamily = valor;
  }
  inputFF.value = '';
  localStorage.setItem('pFF', valor)
  localStorage.setItem('hsFF', valor)
  }
}

inputFF.addEventListener('keydown', mudaFonte);

function reseta() {
  body.style.backgroundColor = '';
  sec.style.borderColor = '';
  hs.style.color = '';
  hs.style.fontSize = ''; 
  hs.style.padding = '';
  hs.style.fontFamily = '';
  for (let i = 0; i < ps.length; i += 1){
    ps[i].style.color = '';
    ps[i].style.fontSize = '';
    ps[i].style.padding = '';
    ps[i].style.fontFamily = '';
  }

  const bgC = localStorage.setItem('backgroundColor', '');
  const hsC = localStorage.setItem('hs', '');
  const hsT = localStorage.setItem('hsT', '')
  const hsP = localStorage.setItem('hsP', '')
  const hsFF = localStorage.setItem('hsFF', '')
  const secC = localStorage.setItem('borderC', '')
  const pC = localStorage.setItem('p', '');
  const pT = localStorage.setItem('pT', '');
  const pP = localStorage.setItem('pP', '')
  const pFF = localStorage.setItem('pFF', '')
}

reset.addEventListener('click', reseta);

window.onload = chama;
  