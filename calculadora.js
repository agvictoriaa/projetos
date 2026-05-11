let lerTeclado = require('readline-sync')
let dados = {// Aqui eu criei um objeto para coletar os primeiros dados.
    num1: lerTeclado.questionFloat(`Digite o primeiro número: `),
    num2: lerTeclado.questionFloat(`Digite o segundo número: `),
    operacao: lerTeclado.questionInt("Selecione a operacao desejada:\n 1) Soma |\n 2) Subtracao |\n 3) Multiplicacao |\n 4) Divisao |\n 5) Resto |\n 0) Sair ")
};

while (dados.operacao !== 0) { // Enquanto a operaçãonão for '0', continua
    switch (dados.operacao) { // Case para definir a operação
        case 1:
            dados.simbolo = "+" // Símbolo definido
            dados.resultado = dados.num1 + dados.num2; // Cálculo e soma
            break; // Para
        case 2: 
            dados.simbolo = "-"
            dados.resultado = dados.num1 - dados.num2;
            break;
        case 3:
            dados.simbolo = "*"
            dados.resulta8do = dados.num1 * dados.num2;
            break;
        case 4: // DENTRO DO CASE 4:
            if (dados.num2 === 0) { // Se o segundo numero for '0', erro
                console.log("ERRO");
            } else {
                dados.simbolo = "/";
                dados.resultado = dados.num1 / dados.num2;
            }
            break;
        case 5:
            dados.simbolo = "%" // Resto da divisão
            dados.resultado = dados.num1 % dados.num2;
            break;
        default:// Opção inválida

            console.log("Operação inválida")
    };

    console.log(`${dados.num1} ${dados.simbolo} ${dados.num2} = ${dados.resultado}`);

    let continuar = lerTeclado.keyInYN("Deseja continuar? ");

    if(continuar){ // Se for 'true': continua, 'false': Acaba
        dados.num1 = dados.resultado;
        dados.num2 = lerTeclado.questionFloat("Digite o proximo numero: ")// Vaisolicitar o usuario o proximo numero.
        dados.operacao = lerTeclado.questionInt ("Selecione a operacao desejada: 1) Soma | 2) Subtracao | 3) Multiplicacao | 4) Divisao | 5) Resto | 0) Sair ")
    } else{
        dados.operacao = 0 // Caso ele digite que não deseja continuar, vai cair na condição do while e sair.
    }
}

console.log(`Fim de seus calculos, o resultado final é: ${dados.resultado}`) // Depois disso, ele vai mostrar o resultado final.