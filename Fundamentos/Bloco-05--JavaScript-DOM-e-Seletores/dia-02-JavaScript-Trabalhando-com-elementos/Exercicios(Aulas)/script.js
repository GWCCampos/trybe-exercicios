const esta = document.getElementById('elementoOndeVoceEsta');

esta.parentNode.style.color = 'red';

const pFilho = document.getElementById('elementoOndeVoceEsta');

pFilho.firstElementChild.innerText = 'primeiro filho do filho';

console.log(document.getElementById('pai').firstElementChild);

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling.textContent);

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

console.log(document.getElementById('pai').lastElementChild.previousElementSibling);

let irmaoDoElemento = document.querySelector('#pai');
let irmao = document.createElement('section');
irmao.id = 'quintoirmao';

irmaoDoElemento.appendChild(irmao);

let filhoDoElemento = document.querySelector('#elementoOndeVoceEsta');
let filho = document.createElement('section');
filho.id = 'filhoTres';

filhoDoElemento.appendChild(filho);

let acesso = document.getElementById('filhoTres');

console.log(acesso.parentElement.nextElementSibling);

let remove = document.querySelector('#paiDoPai');
let compar = remove.children;
 for (let i = 0; i <= compar.length; i += 1) {
  if (compar[i].id !== 'pai') {
     remove.removeChild(id = compar[i]);
   }
 };