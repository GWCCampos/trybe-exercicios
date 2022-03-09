// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS 
// e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, 
// use as seguintes referências:
//   > INSS (Instituto Nacional do Seguro Social)
//     >> Salário bruto até R$ 1.556,94: alíquota de 8%
//     >> Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//     >> Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//     >> Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//   > IR (Imposto de Renda)
//     >> Até R$ 1.903,98: isento de imposto de renda
//     >> De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//     >> De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//     >> De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//     >> Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.



let salarioB = 6570.88;


let INSS = 0;
let ParcelaIR = 0;

if (salarioB <= 1556.94) {
  INSS = salarioB * 8 / 100; 
}

else if (salarioB >= 1556.95 && salarioB <= 2594.92) {
  INSS = salarioB * 9 / 100;
}

else if (salarioB >= 2594.93 && salarioB <= 5189.82) {
  INSS = salarioB * 11 / 100;
}

else {
  INSS = 570.88;
};

let IR = 0;

if (salarioB <= 1903.98) {
  IR = 0;
}

else if (salarioB >= 1903.99 && salarioB <= 2826.65) {
  ParcelaIR = 142.80;
  IR = salarioB * 7.5 / 100 + ParcelaIR;
}

else if (salarioB >= 2826.66 && salarioB <= 3751.05) {
  ParcelaIR = 354.80;
  IR = salarioB * 15 / 100 + ParcelaIR;
}

else if (salarioB >= 3751.06 && salarioB <= 4664.68) {
  ParcelaIR = 63613;
  IR = salarioB * 22.5 / 100 + ParcelaIR;
}

else {
  ParcelaIR = 869.36;
  IR = salarioB * 27.5 / 100 + ParcelaIR
};

let salarioL = salarioB - INSS - IR; 
console.log(salarioL)