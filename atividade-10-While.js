// ============================================================
//   ATIVIDADE 10 – Estruturas de Controle (Repetição - While)
// ============================================================
let lerTeclado = require('readline-sync')

// ------------------------------------------------------------
// EXERCÍCIO 1 – While simples
// ------------------------------------------------------------
// a) Declare uma variável 'n' com valor 1.
// b) Usando while, exiba os números de 1 a 7 no console.
// c) Ao final, exiba: "Fim da contagem!"

// → Seu código aqui:
// let n = 1;
// while(n <= 7){
//     console.log(`${n}`)
//     n++
// };
// console.log("Fim da contagem!")

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Contagem regressiva
// ------------------------------------------------------------
// a) Declare uma variável 'regressiva' com valor 10.
// b) Usando while, exiba a contagem de 10 até 1.
// c) Ao final, exiba: "Lançamento ON!"

// → Seu código aqui:
// let regressiva = 10;

// while (1 <= regressiva){
//     console.log(`${regressiva--}`)
// }
// console.log("Lançamento ON!")


// ------------------------------------------------------------
// EXERCÍCIO 3 – Validação de entrada
// ------------------------------------------------------------
// a) Usando while, peça ao usuário um número entre 1 e 5 e repita enquanto o valor for inválido.
//    A cada entrada inválida, exiba: "Valor fora do intervalo. Tente novamente."
// b) Quando o valor for válido, exiba: "Você escolheu: <número>"

// → Seu código aqui:

// let blabla = lerTeclado.questionInt("Digite um numero: ")
// while( blabla < 1 || blabla > 5){
//      console.log("Valor fora do intervalo. Tente novamente.")
//      blabla = lerTeclado.questionInt("Digite outro numero: ")
// }
// console.log(`Você escolheu: ${blabla}`)



// ------------------------------------------------------------
// EXERCÍCIO 4 – Acumulador com while
// ------------------------------------------------------------
// a) Usando while, peça ao usuário números até que ele digite 0.
// b) Acumule a soma de todos os números digitados.
// c) Conte quantos números foram digitados (exceto o 0).
// d) Ao final, exiba a soma, a quantidade de numeros digitados e quais foram os números digitados.

// → Seu código aqui:
// let numero = lerTeclado.questionInt("Digite um numero: ");
// let soma = 0;
// let quantidade = 0;
// while(numero !== 0){
//     soma += numero
//     quantidade++
//      numero = lerTeclado.questionInt("Digite um numero: ");
// };

// console.log(`Soma: ${soma}`);
// console.log(`Quantidade ${quantidade}`);


// ------------------------------------------------------------
// EXERCÍCIO 5 – Média com while e validação
// ------------------------------------------------------------
// a) Usando while, peça ao usuário notas de 0 a 10 até que ele digite -1 para encerrar.
//    Se a nota for inválida (< 0 e diferente de -1, ou > 10), exiba: "Nota inválida." e peça novamente.
// b) Calcule e exiba a média.

// → Seu código aqui:
// let nota = lerTeclado.questionInt("Ola! Digite a nota: ");
// let soma = 0; // Somar o numero de vezes que joguei as notas e fazer parte do calculo da media, inicia em 
// // zero, porque vou começar a colocar numero dentro do while.
// let quantidade = 0; // Conta quantas vezes eu digitei as notas, e vai dentro do while.

// while (nota !== -1) { // o -1 não vai entrar no calculo, ele só serve para contar quantas notas eu coloquei e 
//     // fazer a media.
//     if (nota < 0 || nota > 10) { // uso para as condições, definir de qual numero a qual numero ele pode colocar
//         // Uso para não colocar numero invalido, string e assim por diante.
//         console.log("Nota invalida.")
//     } else {
//         soma += nota // a Soma + a nota vai fazer a media, exemplo: Coloquei 3 notas, esse numero de vezes que 
//         // eu coloquei, vai definir a media. 
//         quantidade++
//     }
//     nota = lerTeclado.questionInt("Ola! Digite a nota: ") // Aqui eu sempre preciso colocar novamente a variavel
//     // de pergunta para o loop voltar, porque caso contrario o while não vai entender se roda ou não.
// }

// if (quantidade > 0) {
//     let media = soma / quantidade
//     console.log(`Media ${media}`)
// } else {
//     console.log("Nenhuma nota válida foi digitada");
// }




// ------------------------------------------------------------
// EXERCÍCIO 6 – Do...while: menu simples
// ------------------------------------------------------------
// a) Usando do...while, exiba um menu repetitivo:
//    1 – Exibir hora atual  (use: new Date().toLocaleTimeString())
//    2 – Exibir data atual  (use: new Date().toLocaleDateString())
//    0 – Sair
// b) Processe a opção com switch/case.
// c) O menu deve repetir até o usuário escolher 0.

// → Seu código aqui:
// let usuario = lerTeclado.questionInt("Digite a opcao desejada. 1 - Hora | 2 - Data | 0 - Sair: ")
// let horaAtual = new Date().toLocaleTimeString();
// let dataAtual = new Date().toLocaleDateString();// Eu não preciso de uma variavel chamada "Sair" eu posso deixar 
// // o case opção 0 vazio e colocar no final do do while a opção dizendo "Saindo" que ele vai reproduzir. 

// do {
//     switch (usuario) { // No switch, eu costumo colocar a variável que eu vou escolher a opção, pois se trata de opções mesmo. 
//         case 1: horaAtual
//             console.log(`Agora são ${horaAtual}`)
//             usuario = lerTeclado.questionInt("Digite a opcao desejada. 1 - Hora | 2 - Data | 0 - Sair: ")
//             break;
//         case 2: dataAtual
//             console.log(`Hoje é dia ${dataAtual}`)
//             usuario = lerTeclado.questionInt("Digite a opcao desejada. 1 - Hora | 2 - Data | 0 - Sair: ")
//             break;
//         case 0:
//             break;
//         default:
//             console.log("Digite um numero valido")
//             usuario = lerTeclado.questionInt("Digite a opcao desejada. 1 - Hora | 2 - Data | 0 - Sair: ")
//     }
// } while (usuario !== 0); // Aqui significa "Se a escolha for diferente de 0 o loop vai se repetir, porque ele é o oposto
// // de igual a 0, ou seja !== significa "Diferente de 0"
// console.log("Saindo...") // coloquei o console fora do while porque achei mais facil de reproduzir, eu não estava
// // conseguindo fazer dentro (lá ele).


// ------------------------------------------------------------
// EXERCÍCIO 7 – Adivinhe o número (while)
// ------------------------------------------------------------
// a) Gere um número secreto aleatório de 1 a 50 (Math.random())
// b) Peça o nome do jogador.
// c) Usando while, repita até o jogador acertar:
//    - Peça um palpite.
//    - Se muito alto, exiba: "Muito alto! Tente menor."
//    - Se muito baixo, exiba: "Muito baixo! Tente maior."
//    - Se acertou, saia do while.
// d) Ao acertar, exiba:
//    "<nome> acertou após <tentativas> tentativa(s)! O número era <secreto>."

// → Seu código aqui:
// let number = Math.floor(Math.random() * 50) + 1; // Uso o math floor para fazer o numero inteiro e math random para que ele jogue o numero secreto
// //(numero aleatorio)
// let nome = lerTeclado.question("Digite o seu nome: ")// Aqui eu crio a variavel do nome normal 
// let palpite; // Essa variavel é a do palpite, eu preciso sempre criar fora do while senão ela não roda no código. Posso apenas criar a variável 
// // e colocar dentro do while depois.
// let tentativas = 0; // Coloco zero porque ele vai iniciar ainda, e dentro do loop vai começar a contar as tentativas. 
// // Da para colocar NULL também, vai rodar do mesmo jeito. O que importa é o contador em cada if ou switch de dentro do while. 
// while (true) {// aqui daria para colocar tambem o <palpite !== number> ou seja: Enquanto palpite for diferente do numero que o computador
//     // vai lançar, o loop vai rodar. Mas caso for igual ele encerra. Se eu não estivesse usando o quebra laçõ de repetição, eu usaria o !==. 
//     palpite = lerTeclado.questionInt("Digite um numero de 1 a 50: ") // Aqui agora eu lanço a pergunta. 
//     if (palpite < number) { //aqui eu utilizei if porque eu preciso saber se é menor ou maior, e o switch case não entraria bem, já que trata 
//         // tudo se for ===, serve mais para escolhas. 
//         console.log("Muito baixo! Tente maior.")
//         tentativas++// Aqui eu utilizo para contar minhas tentativas. FAMOSO CONTADOR!!!
//     } else if (palpite > number) {
//         console.log("Muito alto! Tente menor.")
//         tentativas++ // Aqui eu utilizo para contar minhas tentativas. FAMOSO CONTADOR!!!
//     } else if (palpite === number) {
//         console.log("Acertou!")
//         break;
//     }
// };

// console.log(`${nome} acertou após ${tentativas} tentativa(s)! O número era ${number}.`) // Console do lado de fora para poder rodar o numero de 
// // tentativas. 



// ------------------------------------------------------------
// EXERCÍCIO 8 – Tabuada com while
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro.
// b) Usando while, exiba a tabuada desse número de 1 a 10:
//    Formato para exibição: "<número> x <i> = <resultado>"

// → Seu código aqui:

let usuario = lerTeclado.questionInt("Digite um numero inteiro: ") // aqui eu busco a informação do usuario
let i = 1; // aqui vai ser o i para colocar dentro do while.
while(i <= 10){ // enquanto I for menor ou igual a 10 ele vai exibir o numero inteiro que o usuario digitar * o I até chegar no 10.
    let resultado = usuario * i // exemplo 5 * 1 - 5 * 2 - 5 * 3 - 5 * 4...
    console.log(`${usuario} x ${i} = ${resultado}`)
    i++ // aqui é usado de contador, para que o resultado sempre vá exibindo. 5 * 1 - 5 * 2 - 5 * 3 - 5 * 4...
};


// ------------------------------------------------------------
// EXERCÍCIO 9 – Contador com condição composta
// ------------------------------------------------------------
// a) Declare 'saldo' com valor 1000 e 'rodada' com valor 0.
// b) Usando while, simule saques aleatórios enquanto o saldo for maior que 0 E a rodada for menor que 10:
//    - A cada rodada, gere um saque aleatório de 50 a 200:
//    - Se o saque for maior que o saldo, exiba: "Saldo insuficiente. Fim!" e encerre.
//    - Caso contrário, desconte do saldo e exiba:
//      "Rodada <rodada>: sacou R$ <saque> | Novo saldo: R$ <saldo>"
// c) Ao final, exiba o saldo restante e o total de rodadas.

// → Seu código aqui:

// let saldo = 1000;
// let rodada = 1;
// let saque = 0;

// while (saldo > 0 && rodada < 10) {// Condição: Se saldo for maior que zero e rodada for menor que 10 - 
//     // Ele vai fazer saques até dar 10 rodadas ou acabar o saldo!
//     saque = Math.floor(Math.random() * 151) + 50  // math floor e math random tem que ser usado para fazer
//     // os saques aleatorios, tudo o que eu quiser que seja lançado numeros eu uso random, inteiros floor + random.
//     if (saque > saldo) {
//         console.log("Saldo insuficiente. Fim!")
//         break; // Aqui é usado um interrompendo laços para que o loop pare quando o saldo acabar. 
//     } else {
//         saldo -= saque // aqui eu usei o saldo - o saque para dar o resultado de quanto sacou, qual o saldo
//         // e numero de rodadas. 
//         console.log(`Rodada ${rodada}: sacou R$${saque} | Novo saldo: R$${saldo}`)
//     }
//     rodada++ // Usada como contador para contar cada vez que rodar. 
// }
// console.log(`Saldo restante: ${saldo} | Total de rodadas ${rodada}`) // esse console de resultados, sempre
// // fora do while.


// ------------------------------------------------------------
// EXERCÍCIO 10 – Do...while: cadastro em loop
// ------------------------------------------------------------
// a) Crie um array vazio 'contatos'.
// b) Usando do...while, repita:
//    - Peça nome e telefone do contato.
//    - Adicione um objeto { nome, telefone } ao array.
//    - Pergunte: "Adicionar outro contato?" (keyInYN()).
//    - Repita enquanto o usuário responder que sim.
// c) Ao sair do loop, exiba todos os contatos com console.table().
// d) Exiba: "Total de contatos cadastrados: <qtd>"

// → Seu código aqui:
let contatos = []; // Aqui em contatos temos uma array, eu coloco de forma vazia pois dentro do DO eu irei preencher.
let outro; // QUALQUER VARIAVEL EU PRECISO DECLARAR FORA DO DO E WHILE PARA PODER RODAR! - Essa em expecifico
// é a variavel para saber se o usuario deseja adicionar outro contato ou não! 
do {
   let nome = lerTeclado.question("Digite o nome: ")
   let telefone = lerTeclado.questionInt("Digite o telefone: ")

   contatos.push({
       nome: nome,
       telefone: telefone
   }) // Faço dessa forma para ficar mais facil. Uso o push que é a função de adicionar coisas dentro de uma lista
   // e dentro dessa função mesmo eu já crio o objeto, assim fica mais fácil. 
    outro = lerTeclado.keyInYN("Adicionar outro contato? ") // Lembra a avariavel que você declarou lá fora? 
    // Será usado agora no código. 
} while(outro === true);
console.table(contatos); // Aqui eu uso o table para mostrar a array em tabela. 
