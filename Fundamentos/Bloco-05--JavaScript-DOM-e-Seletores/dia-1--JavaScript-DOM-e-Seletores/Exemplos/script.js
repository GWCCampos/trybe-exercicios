const header = document.querySelector('#header-container');
header.style.position = 'sticky' ; 
header.style.top = '0';
header.style.color = '#7cb490';
header.style.backgroundColor = '#66666e';

const importante = document.getElementsByClassName('emergency-tasks');
importante[0].style.border = '4px solid black';
importante[0].style.backgroundColor = 'red';

const subTitulos = document.querySelectorAll ('.emergency-tasks div h3');
subTitulos[0].style.backgroundColor = 'white';
subTitulos[0].style.color = '#c3062c';
subTitulos[1].style.backgroundColor = 'white';
subTitulos[1].style.color = '#33605a';

const nImportante = document.getElementsByClassName('no-emergency-tasks');
nImportante[0].style.border = '4px solid black';
nImportante[0].style.backgroundColor = '#82bfa0';  

const nSubTitulos = document.querySelectorAll('.no-emergency-tasks div h3');
nSubTitulos[0].style.backgroundColor = '#211d19';
nSubTitulos[0].style.color = '#e05576';
nSubTitulos[1].style.backgroundColor = '#211d19';
nSubTitulos[1].style.color = '#ae8fba';

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#036b52';
footer.style.bottom = 0;
