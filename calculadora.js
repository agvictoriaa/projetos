let lerTeclado = require('readline-sync')
let dados = {// Aqui eu criei um objeto para coletar os primeiros dados.
    num1: lerTeclado.questionFloat(`Digite o primeiro número: `),
    num2: lerTeclado.questionFloat(`Digite o segundo número: `),
    operacao: lerTeclado.questionInt("Selecione a operacao desejada:\n 1) Soma |\n 2) Subtracao |\n 3) Multiplicacao |\n 4) Divisao |\n 5) Resto |\n 0) Sair ")
};

while (dados.operacao !== 0) {// criei um loop para que a calculadora fique fazendo o calculo ate que o
    // usuario digite 0 "Sair"
    switch (dados.operacao) {// dentro do while coloquei um switch, onde os cases são as operações.
        case 1:
            dados.simbolo = "+" // adicionei a variavel "Simbolo" dentro do objeto e ele vai definir qual a operação.
            dados.resultado = dados.num1 + dados.num2;// Aqui o calculo normal né, se for soma vai ficar
// numero 1 + numero 2, subtração numero 1 - numero 2 e assim vai.
            break;
        case 2:
            dados.simbolo = "-"
            dados.resultado = dados.num1 - dados.num2;
            break;
        case 3:
            dados.simbolo = "*"
            dados.resultado = dados.num1 * dados.num2;
            break;
        case 4: // DENTRO DO CASE 4:
            if (dados.num2 === 0) { //Para que o erro da divisao não acontecesse, crie um if, caso o usuario
    // digite 0 no numero 2 irá aparecer a mensagem "ERRO"
                console.log("ERRO");
            } else {// E o else, caso digite numeros normais o calculo continue.
                dados.simbolo = "/";
                dados.resultado = dados.num1 / dados.num2;
            }
            break;
        case 5:
            dados.simbolo = "%"
            dados.resultado = dados.num1 % dados.num2;
            break;
        default:// No default eu coloquei que caso o usuario digite qualquer outra coisa, de opçao invalida.
            console.log("Operação inválida")
    };

    console.log(`${dados.num1} ${dados.simbolo} ${dados.num2} = ${dados.resultado}`); // Console para aparecer o calculo para o usuario.

    let continuar = lerTeclado.keyInYN("Deseja continuar? ");

    if(continuar){// Ainda dentro do while, eu criei um if com a variavel continuar, ela pergunta se o usuario
// deseja continuar, se sim, ela vai puxar o resultado inicial.
        dados.num1 = dados.resultado;
        dados.num2 = lerTeclado.questionFloat("Digite o proximo numero: ")// Vaisolicitar o usuario o proximo numero.
        dados.operacao = lerTeclado.questionInt ("Selecione a operacao desejada:\n 1) Soma |\n 2) Subtracao |\n 3) Multiplicacao |\n 4) Divisao |\n 5) Resto |\n 0) Sair ")
// Vai pedir para ele selecionar qual operaçaoo deseja fazer, e calcular.
    } else{
        dados.operacao = 0 // Caso ele digite que não deseja continuar, vai cair na condição do while e sair.
    }
}

console.log(`Fim de seus calculos, o resultado final é: ${dados.resultado}`) // Depois disso, ele vai mostrar o resultado final.