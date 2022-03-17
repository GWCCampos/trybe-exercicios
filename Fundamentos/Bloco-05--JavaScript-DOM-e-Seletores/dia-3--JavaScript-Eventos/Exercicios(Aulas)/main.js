const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// R : Acontece pois a classe "tech" possui a propriedade transformY que altera a altura do mesmo .

//firstLi.classList.remove('tech') serve para retirar a classe css 'Tech'

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addclass(param){
  param.classList.remove('tech');
 param.addEventListener('click', function() {
 if (param.className === 'tech') {
  param.classList.remove('tech');
  } else {param.classList.add('tech')}
  }
  )};
  addclass(firstLi);
  addclass(secondLi);
  addclass(thirdLi);
  // Daqui pra baixo foram testes, servem apenas para estudo.
// function addclass(param){
// if (param.className === 'tech') {
//   param.classList.remove('tech');
//   } else {param.classList.add('tech')}
//   };
  
// firstLi.addEventListener("click", function (){ 
//   if (firstLi.className === 'tech') {
//    firstLi.classList.remove('tech');
//    } else {firstLi.classList.add('tech')}
//   });
// secondLi.addEventListener("click", function (){ 
//   if (secondLi.className === 'tech') {
//    secondLi.classList.remove('tech');
//    } else {secondLi.classList.add('tech')}
//   });
// thirdLi.addEventListener("click", function (){ 
//   if (thirdLi.className === 'tech') {
//   thirdLi.classList.remove('tech');
//   } else {thirdLi.classList.add('tech')}
//   });

// for(let i = 0; i > lista.length; i++) {
//   let classe = lista[i].classList;
//   for (let z = 0; z < classe.length; z += 1) {
//     console.log(classe[z]);
//     if (classe[z] === 'tech'){
//       classe = classe;
//     } else {
//       classe.add('tech')}
//   }};

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';



// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi';