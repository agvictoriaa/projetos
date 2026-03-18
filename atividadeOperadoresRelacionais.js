let lerTeclado = require('readline-sync')
// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:
// let exemplo1 = 10;
// let exemplo2 = "10";
// let exemplo3 = 0;
// let exemplo4 = false;
// let exemplo5
// let exemplo6 = undefined;
// let exemplo7 = "JS";
// let umum = exemplo1 == exemplo1;
// let umdois = exemplo1 == exemplo2
// let tresquatro = exemplo3 == exemplo4;
// let cincoseis = exemplo5 == exemplo6;
// let setesete = exemplo7 == exemplo7;
// console.log(`${exemplo1} == ${exemplo1} = ${umum} == ${umum}`);
// console.log(`${exemplo1} === ${exemplo1} = ${umum} === ${umum}`);
// console.log(`${exemplo1} == ${exemplo2} = ${umum} == ${umdois}`);
// console.log(`${exemplo1} === ${exemplo2} = ${umum} === ${umdois}`);
// console.log(`${exemplo3} == ${exemplo4}`);
// console.log(`${tresquatro} === ${tresquatro}`);
// console.log(`${exemplo5} == ${exemplo6}`);
// console.log(`${exemplo5} === ${exemplo6}`);
// console.log(`${exemplo7} == ${exemplo7}`);
// console.log(`${exemplo7} === ${exemplo7}`);

// console.log

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:
console.log(5 !== 5);
console.log(5 !== "5");
console.log(7 !== 3);
console.log(true !== 1);
console.log(5 !== 3); 

// let a = 5;
// let b = "5"; 
// let c = 7;
// let d = 3;
// let e = true; 
// let f = 1; 


// let aa = a !== a;
// let bb = a !== b;
// let cc = c !== d; 
// let dd = e !== f;

// console.log(`${a} !== ${a} → ${aa}`);
// console.log(`${a} !== ${b} → ${bb}`);
// console.log(`${c} !== ${d} → ${cc}`);
// console.log(`${e} !== ${f} → ${dd}`);
// console.log(`${a} != ${a} → ${aa}`);
// console.log(`${a} != ${b} → ${bb}`);
// console.log(`${c} != ${d} → ${cc}`);
// console.log(`${e} != ${f} → ${dd}`);



// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:
// let salarioA = 3500;
// let salarioB = 4200; 

// let a = salarioA > salarioB; 
// let b = salarioA < salarioB;
// let c = salarioA >= salarioB; 
// let d = salarioA <= salarioB; 
// let e = salarioA === salarioB;

// console.log(`${salarioA} > ${salarioB}: ${a}`);
// console.log(`${salarioA} < ${salarioB}: ${b}`);
// console.log(`${salarioA} >= ${salarioB}: ${c}`);
// console.log(`${salarioA} <= ${salarioB}: ${d}`);
// console.log(`${salarioA} === ${salarioB}: ${e}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:
// let estoque = 0;
// let temEstoque = estoque > 0;
// let estoqueZerado = estoque === 0; 
// let temperatura = 36.5;
// let febre = temperatura >= 37.6;

// console.log(`Estoque: ${estoque}`); 
// console.log(`Tem estoque (> 0): ${temEstoque}`); 
// console.log(`Estoque zerado (===0): ${estoqueZerado}`);
// console.log(`Está com febre(>= 37.6): ${febre}`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:

// let num1 = lerTeclado.questionInt('Digite o numero: ');
// let num2 = lerTeclado.questionInt('Digite segundo numero: ')
// let num3 = num1 > num2; 
// let num4 = num1 < num2; 
// let num5 = num1 === num2; 
// let num6 = num1 >= num2; 

// console.log(`${num1} (>) ${num2} = ${num3}`);
// console.log(`${num1} (<) ${num2} = ${num4}`);
// console.log(`${num1} (===) ${num2} = ${num5}`);
// console.log(`${num1} (>=) ${num2} = ${num6}`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:
// let preco = lerTeclado.questionInt('Digite o preco: ');
// const precoMaximo = 100; 
// let estaDentroDoorcamento = preco <= precoMaximo; 
// let esteItemEhCaro = preco > precoMaximo; 
// console.log(`Preco informado: ${preco}`);
// console.log(`Dentro do orcamento (<) R$${precoMaximo}?: ${estaDentroDoorcamento ? "Sim" : "Não"}`);
// console.log(`Item caro (>) ${precoMaximo}?: ${esteItemEhCaro ? "Sim" : "Não"}`);

// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:
// let cadastro = [
//     {
//         nome: lerTeclado.question('Digite o nome '),
//         idade: lerTeclado.questionInt('Digite a idade: ')
//     },{
//         nome: lerTeclado.question('Digite o nome '),
//         idade: lerTeclado.questionInt('Digite a idade: ')
//     }
// ]

// let idadePessoa1 = cadastro[0].idade; 
// let idadePessoa2 = cadastro[1].idade;
// let a = idadePessoa1 > idadePessoa2;
// let b = idadePessoa1 === idadePessoa2;
// let c = idadePessoa1 >= 18 ;
// let d = idadePessoa2 >= 18;

// console.log(`Idade da ${cadastro[0].nome} é ${cadastro[0].idade} e ela é ${idadePessoa1 ? "maior de idade" : "menor de idade"} `);



// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    
// → Seu código aqui:

let alunos = [
    {
        nome: lerTeclado.question('Digite o nseu nome: '),
        notas: lerTeclado.questionInt('Digite tres notas ') 
    }
]
// console.log("_______________________________");