
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui: 
let meuHobby = "assistir vídeos de pessoas conhecendo a Coreia"
const Nome = "Vitoria"
let Idade = 23
console.log(`Meu nome é ${Nome} e eu tenho ${Idade} anos.\nMeu hobby favorito é, ${meuHobby}.`);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
const cidade = "São Paulo";
let temperatura = 20;
const serie = "Brigerton";
console.log(`Hoje em ${cidade} está fazendo ${temperatura}°C, perfeito para assistir ${serie}`);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:
let oPalmeirasTemMundial = false;
console.log(oPalmeirasTemMundial);
let semValor 
let palavra = "coisa"
console.log(semValor);
let contaUsuario = null;
console.log(contaUsuario);
console.log(`O palmeiras tem algum mundial? ${oPalmeirasTemMundial}`,typeof oPalmeirasTemMundial);
console.log(`O número de vezes que choveu essa semana foi ${semValor}`,typeof semValor);
console.log(`A variavel palavra contém o valor ${palavra} e o tipo dela é ${typeof palavra}`);

console.log (typeof oPalmeirasTemMundial);
let informação = null
console.log(`A variavel informação contém o valor ${informação} e o tipo dela é ${typeof informação}`);
let number = 23;
console.log(typeof number);
let string = "Vitoria"
console.log(`Hoje a ${string} vai para casa e vai fazer um mousse de limão`, typeof string);









console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
const personagem1 = "Mike"
const personagem2 = "Ana"
const personagem3 = "João"
let idadePersonagem1 = 10
let idadePersonagem2 = 8
let idadePersonagem3 = 15
const cidade1 = "Santos"
let missão1 = "brincar juntos"
let missão2 = "se cansam e vão para casa jantar"

console.log(`Na cidade de ${cidade1} moram três crianças de diferentes idades. ${personagem1}, ${personagem2} e ${personagem3}. ${personagem3} dificilmente brinca com ${personagem1} e ${personagem2}, pois ele já se acha muito grande, eles brigam, choram e depois de muito custo João cede. E assim passam o dia todo, cai chuva, vem o sol e tudo o que eles fazem é ${missão1}.\n Depois disso eles ${missão2} prontos para o dia seguinte`);

    console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
const nome4 = "Vitoria"
let objetivo = "ter foco"
console.log(`${nome4} prazeres temporários não trazem coisas permanentes, e por isso você precisa ${objetivo}`);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

console.log("========================================");
console.log("          Sistema do usuário");
console.log("========================================");
console.log("1 - Ver Perfil");
console.log("2 - Editar Perfil");
console.log("3 - Configuração");
console.log("4 - Notificação");
console.log("5 - Relatórios");
console.log("6 - Ajuda");
console.log("7 - Sobre o Sistema");
console.log("0 - Sair");
console.log("=====================================");
console.log("Digite o número da opção desejada");
console.log("====================================");

console.log(`===================================
         Sistema do usuário
===================================
1 - Ver Perfil
2 - Editar Perfil
3 - Configuração
4 - Notificação
5 - Relatórios
6 - Ajuda
7 - Sobre o Sistema
0 - Sair
=====================================
Digite o número da opção desejada
====================================`);
// → Seu código aq____________________________