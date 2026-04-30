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
let nota = lerTeclado.questionInt("Ola! Digite a nota: ");
let soma = 0; // Somar o numero de vezes que joguei as notas e fazer parte do calculo da media, inicia em 
// zero, porque vou começar a colocar numero dentro do while.
let quantidade = 0; // Conta quantas vezes eu digitei as notas, e vai dentro do while.

while (nota !== -1) { // o -1 não vai entrar no calculo, ele só serve para contar quantas notas eu coloquei e 
    // fazer a media.
    if (nota < 0 || nota > 10) { // uso para as condições, definir de qual numero a qual numero ele pode colocar
        // Uso para não colocar numero invalido, string e assim por diante.
        console.log("Nota invalida.")
    } else {
        soma += nota // a Soma + a nota vai fazer a media, exemplo: Coloquei 3 notas, esse numero de vezes que 
        // eu coloquei, vai definir a media. 
        quantidade++
    }
    nota = lerTeclado.questionInt("Ola! Digite a nota: ") // Aqui eu sempre preciso colocar novamente a variavel
    // de pergunta para o loop voltar, porque caso contrario o while não vai entender se roda ou não.
}

if (quantidade > 0) {
    let media = soma / quantidade
    console.log(`Media ${media}`)
} else {
    console.log("Nenhuma nota válida foi digitada");
}




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


console.log("_______________________________");


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


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Tabuada com while
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro.
// b) Usando while, exiba a tabuada desse número de 1 a 10:
//    Formato para exibição: "<número> x <i> = <resultado>"

// → Seu código aqui:


console.log("_______________________________");


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


console.log("_______________________________");


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


console.log("_______________________________");