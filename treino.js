let lerTeclado = require('readline-sync')

// let number = lerTeclado.question("Digite um numero: ");

// if (number > 0) {
//     console.log("O numero é positivo");
// } else if (number < 0) {
//     console.log("O numero é negativo");
// } else {
//     console.log("O numero é zero");
// };

// let idade = lerTeclado.questionInt("Digite a sua idade: ");

// if (idade >= 18){
//     console.log("Maior de idade")
// } else {
//     console.log("Menor de idade")
// };

// let number = lerTeclado.questionInt("Digite um número: ")

// if (number % 2 === 0){
//     console.log ("Par")
// } else {
//     console.log("Impar")
// };

// let dados = {
//     usuario: lerTeclado.question("Digite seu nome: "),
//     senha: lerTeclado.question("Digite a sua senha: ")
// }; 
// if (dados.senha === "admin"){
//     console.log("Acesso liberado")
// } else if (dados.senha === "1234"){
//     console.log("Acesso liberado")
// } else {
//     console.log("Acesso negado")
// };

// let valorCompra = lerTeclado.questionInt("Digite o valor da compra: ");
// let desconto = valorCompra * 0.10;
// let valorFinal = valorCompra - desconto;

// if (valorCompra >= 100){
//     console.log(`${valorFinal}`)
// } else {
//     valorCompra
// };

// let nota = lerTeclado.questionFloat("Digite a nota: ");
// if (nota >= 60){
//     console.log("Aprovado")
// } else {
//     console.log("Reprovado")
// }; 

// let num1 = lerTeclado.questionInt("Digite o primeiro numero: ");
// let num2 = lerTeclado.questionInt("Digite o segundo número: ");

// if (num1 > num2){
//     console.log(`${num1} é maior que ${num2}`)
// } else if (num1 < num2){
//     console.log(`${num1} é menor que ${num2}`)
// } else {
//     console.log("São iguais")
// }; 

// let temperatura = lerTeclado.questionFloat("Qual a temperatura atual: ")

// if (temperatura < 15){
//     console.log("Frio")
// } else if (temperatura >= 15 && temperatura <= 25){
//     console.log("Ameno")
// }else {
//     console.log("Quente")
// };


let produto = {
    nome: "Iphone",
    preco: 4.000,
    emPromocao: true
};

if (produto.emPromocao === true) {
    desconto = produto.preco * 0.10
    precoFinal = produto.preco - desconto
    console.log(`Ò valor do aparelho é ${produto.preco}, aplicando o desconto de 10% ficou ${precoFinal.toFixed(2)}`);
} else {
    console.log(`O aparelho ficou ${produto.preco}`)
};


/*
╔════════════════════════════════════════════════════════════════════╗
║           EXERCÍCIOS: MÉTODO toFixed()                            ║
║           Nível: Iniciante                                        ║
╚════════════════════════════════════════════════════════════════════╝

PARA QUE SERVE?
===============
O toFixed() é um método que arredonda um número e limita a quantidade 
de casas decimais, retornando o resultado como uma string (texto).

É muito útil quando você trabalha com:
  - Valores monetários (R$ 10.50)
  - Porcentagens (85.50%)
  - Notas escolares (7.25)
  - Qualquer número que precisa de casas decimais controladas
*/

// console.log("╔═══════════════════════════════════════════════════════╗");
// console.log("║ EXERCÍCIO 1: ENTENDER O BÁSICO                        ║");
// console.log("╚═══════════════════════════════════════════════════════╝");

// Sintaxe: numero.toFixed(quantidade_de_casas)

let nota = 7.456789;
console.log("Número original:", nota); // 7.456789
console.log("Com 1 casa decimal:", nota.toFixed(1)); // "7.5"
console.log("Com 2 casas decimais:", nota.toFixed(2)); // "7.46"
console.log("Com 3 casas decimais:", nota.toFixed(3)); // "7.457"
console.log("Com 4 casas decimais:", nota.toFixed(5)); // "7.4567"

// console.log("\n╔═══════════════════════════════════════════════════════╗");
// console.log("║ EXERCÍCIO 2: O toFixed RETORNA UMA STRING             ║");
// console.log("╚═══════════════════════════════════════════════════════╝");

// let preco = 15.7;
// let precoFormatado = preco.toFixed(2);

// console.log("Valor original:", preco, "- Tipo:", typeof preco); 
// // 15.7 - Tipo: number

// console.log("Com toFixed(2):", precoFormatado, "- Tipo:", typeof precoFormatado); 
// // 15.70 - Tipo: string

// // Se quiser converter de volta para número:
// let precoNumero = parseFloat(precoFormatado);
// console.log("Convertido para número:", precoNumero, "- Tipo:", typeof precoNumero);


// console.log("\n╔═══════════════════════════════════════════════════════╗");
// console.log("║ EXERCÍCIO 3: COM VALORES MONETÁRIOS 💰                ║");
// console.log("╚═══════════════════════════════════════════════════════╝");

// let preco1 = 19.999; // Muito caro!
// let preco2 = 5.1; // Falta casa decimal
// let preco3 = 100.556; // Precisa de arredondamento

// console.log("Preço 1: R$", preco1.toFixed(2)); // R$ 20.00
// console.log("Preço 2: R$", preco2.toFixed(2)); // R$ 5.10
// console.log("Preço 3: R$", preco3.toFixed(2)); // R$ 100.56


// console.log("\n╔═══════════════════════════════════════════════════════╗");
// console.log("║ EXERCÍCIO 4: COM NOTAS ESCOLARES 📚                   ║");
// console.log("╚═══════════════════════════════════════════════════════╝");

// let notaPortugues = 8.7654;
// let notaMatematica = 9.2;
// let notaCiencias = 7.145;

// console.log("Português:", notaPortugues.toFixed(2)); // 8.77
// console.log("Matemática:", notaMatematica.toFixed(2)); // 9.20
// console.log("Ciências:", notaCiencias.toFixed(2)); // 7.14


// console.log("\n╔═══════════════════════════════════════════════════════╗");
// console.log("║ EXERCÍCIO 5: ARREDONDAMENTOS ESPECIAIS               ║");
// console.log("╚═══════════════════════════════════════════════════════╝");

// let numero1 = 5.995; // Vai arredondar para 6.00? Cuidado!
// let numero2 = 5.994;
// let numero3 = 5.996;

// console.log("5.995 com toFixed(2):", numero1.toFixed(2)); // 6.00 (arredonda para cima)
// console.log("5.994 com toFixed(2):", numero2.toFixed(2)); // 5.99 (arredonda para baixo)
// console.log("5.996 com toFixed(2):", numero3.toFixed(2)); // 6.00 (arredonda para cima)


// console.log("\n╔═══════════════════════════════════════════════════════╗");
// console.log("║ EXERCÍCIO 6: ARREDONDANDO PARA 0 CASAS DECIMAIS      ║");
// console.log("╚═══════════════════════════════════════════════════════╝");

// let valor1 = 10.7;
// let valor2 = 10.4;
// let valor3 = 10.5;

// console.log("10.7 arredondado:", valor1.toFixed(0)); // "11"
// console.log("10.4 arredondado:", valor2.toFixed(0)); // "10"
// console.log("10.5 arredondado:", valor3.toFixed(0)); // "10" (pode variar conforme JS)


// console.log("\n╔═══════════════════════════════════════════════════════╗");
// console.log("║ EXERCÍCIO 7: CALCULADORA COM DESCONTO 🎁             ║");
// console.log("╚═══════════════════════════════════════════════════════╝");

// let precoOriginal = 199.90;
// let desconto = 0.15; // 15% de desconto

// let valorDesconto = precoOriginal * desconto;
// let precoFinal = precoOriginal - valorDesconto;

// console.log("Preço original: R$", precoOriginal.toFixed(2));
// console.log("Desconto (15%): R$", valorDesconto.toFixed(2));
// console.log("Preço final: R$", precoFinal.toFixed(2));


// console.log("\n╔═══════════════════════════════════════════════════════╗");
// console.log("║ EXERCÍCIO 8: MÉDIA DE NOTAS                           ║");
// console.log("╚═══════════════════════════════════════════════════════╝");

// let nota_A = 8.5;
// let nota_B = 7.3;
// let nota_C = 9.8;

// let media = (nota_A + nota_B + nota_C) / 3;

// console.log("Nota 1:", nota_A);
// console.log("Nota 2:", nota_B);
// console.log("Nota 3:", nota_C);
// console.log("Média calculada: " + media); // Muito número após a vírgula!
// console.log("Média formatada:", media.toFixed(2)); // Agora está legal! 8.53


// console.log("\n╔═══════════════════════════════════════════════════════╗");
// console.log("║ EXERCÍCIO 9: CALCULADORA DE GORJETA 💵               ║");
// console.log("╚═══════════════════════════════════════════════════════╝");

// let contaRestaurante = 145.87;
// let percentualGorjeta = 0.10; // 10%

// let valorGorjeta = contaRestaurante * percentualGorjeta;
// let totalComGorjeta = contaRestaurante + valorGorjeta;

// console.log("Conta: R$", contaRestaurante.toFixed(2));
// console.log("Gorjeta (10%): R$", valorGorjeta.toFixed(2));
// console.log("Total: R$", totalComGorjeta.toFixed(2));


// console.log("\n╔═══════════════════════════════════════════════════════╗");
// console.log("║ EXERCÍCIO 10: FORMATANDO PERCENTUAIS 📊              ║");
// console.log("╚═══════════════════════════════════════════════════════╝");

// let percentualAprovacao = 85.3456;
// let percentualDesaprovacao = 14.6544;

// console.log("Aprovação: " + percentualAprovacao.toFixed(2) + "%"); // 85.35%
// console.log("Desaprovação: " + percentualDesaprovacao.toFixed(2) + "%"); // 14.65%


// console.log("\n╔═══════════════════════════════════════════════════════╗");
// console.log("║ 🎯 RESUMO: QUANDO USAR toFixed()                     ║");
// console.log("╚═══════════════════════════════════════════════════════╝");

// console.log(`
// ✓ Quando trabalhar com dinheiro (valores monetários)
// ✓ Quando precisa de um número bem formatado na tela
// ✓ Quando quer limitar casa decimais
// ✓ Exemplo: preco.toFixed(2) → "19.99"

// IMPORTANTE:
// ⚠ toFixed() retorna uma STRING (texto), não um número
// ⚠ Se precisar de número depois, use parseFloat()
// ⚠ Use parseInt() se precisar de número inteiro
// `);

// // Exemplo prático completo:
// console.log("\n╔═══════════════════════════════════════════════════════╗");
// console.log("║ EXEMPLO PRÁTICO: SISTEMA DE LOJA                    ║");
// console.log("╚═══════════════════════════════════════════════════════╝");

// let precoItem1 = 29.99;
// let precoItem2 = 19.50;
// let precoItem3 = 15.777;

// let subtotal = precoItem1 + precoItem2 + precoItem3;
// let imposto = subtotal * 0.15; // 15% de imposto
// let total = subtotal + imposto;

// console.log("Item 1: R$", precoItem1.toFixed(2));
// console.log("Item 2: R$", precoItem2.toFixed(2));
// console.log("Item 3: R$", precoItem3.toFixed(2));
// console.log("─".repeat(40));
// console.log("Subtotal: R$", subtotal.toFixed(2));
// console.log("Imposto: R$", imposto.toFixed(2));
// console.log("─".repeat(40));
// console.log("TOTAL: R$", total.toFixed(2));


// EXERCÍCIO 7 – Percorrendo um array
// ------------------------------------------------------------
// a) Utilizando o array:
// b) Utilizando de um for, exiba cada cidade com seu índice no formato:
//    "[<indice>] - <Cidade>"
// c) Ao final, exiba: "Total de cidades: <quantidade>"

// → Seu código aqui:
const cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Fortaleza"];
for (let i = 0; i < cidades.length; i++) {
    console.log(`[${i}] - ${cidades[i]}`);
};
console.log(`Total de cidades: ${cidades.length}`);
// Aqui, o loop for é usado para iterar sobre o array de cidades. A variável i começa em 0 e vai até cidades.length - 1, que é o índice do último elemento do array. A cada iteração, o índice i e a cidade correspondente (cidades[i]) são exibidos no console no formato "[<indice>] - <Cidade>". Depois que o loop termina, a quantidade total de cidades pode ser exibida usando cidades.length, que retorna o número de elementos no array.




// ------------------------------------------------------------
// EXERCÍCIO 8 – Maior e menor valor
// ------------------------------------------------------------
// a) Declare o array:
//    const temperaturas = [28, 15, 32, 9, 21, 37, 14, 25];
// b) Usando um for, encontre o maior e o menor valor do array.
// c) Exiba:
//    "Maior temperatura: <maior>°C"
//    "Menor temperatura: <menor>°C"

// → Seu código aqui:
const temperaturas = [28, 15, 32, 9, 21, 37, 14, 25];
let maior = temperaturas[0];
let menor = temperaturas[0];
for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior){
        maior = temperaturas[i]
    }
    if (temperaturas[i] < menor){
        menor = temperaturas[i]
    }
};
console.log(`A maior temperatura é: ${maior}°C`);
console.log(`A menor temperatura é: ${menor}°C`);
// ------------------------------------------------------------
// EXERCÍCIO 9 – Contando com condição
// ------------------------------------------------------------
// a) Utilizando do array:
// const idades = [12, 25, 17, 34, 15, 42, 16, 29, 8, 19];
// b) Usando um for, conte:
//    - Quantas pessoas são menores de idade (< 18)
//    - Quantas são maiores de idade (>= 18)
// c) Exiba os dois totais.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Média com array
// ------------------------------------------------------------
// a) Utilizando do array:
const salarios = [1800, 3200, 950, 4500, 2100, 1500, 7800, 2900];
// b) Usando um for, calcule a média salarial.
// c) Exiba a média no formato: "Média salarial: R$ <media>"
// d) Usando outro for, exiba cada salário e se está acima ou abaixo da média:
//    "R$ 1800,00 – Abaixo da média"
//    "R$ 3200,00 – Acima da média"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Calcule a média das notas da turma e armazene em uma variável 'media'.
// e) Percorra o array e para cada aluno exiba no console:
//    "<nome>: <nota> – <situação>"
//    A situação deve ser:
//      "Aprovado"    → nota >= 7
//      "Recuperação" → nota >= 5 e < 7
//      "Reprovado"   → nota < 5
// f) Ao final, exiba a média da turma no formato:
//    "Média da turma: <media>"
// g) Exiba o array 'turma' com console.table().

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Coletando dados com for e input
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos produtos quer cadastrar (questionInt()).
// b) Usando um for, colete de cada produto:
//    - nome (question())
//    - preco (questionFloat())
// c) Armazene cada produto como objeto em um array 'estoque'.
// d) Após o cadastro, percorra o array e exiba cada produto no formato:
//    "<nome>: R$ <preco>"
// e) Exiba o produto mais caro e o mais barato.
// f) Exiba o array com console.table().

// → Seu código aqui:


console.log("_______________________________");