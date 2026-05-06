let lerTeclado = require('readline-sync')
// ============================================================
//   RECUPERAÇÃO – ATIVIDADE AVALIATIVA N5
//   Módulos: Operadores e Estruturas Condicionais (if/else, switch/case)
// ============================================================
//
//  Instruções Gerais:
//  • NÃO utilize funções (function) nem laços de repetição (for, while, do/while).
//  • Utilize readline-sync para entrada de dados.
//  • O código deve ser elaborado individualmente (códigos identicos serão considerados plágio - nota 0).
//
// ============================================================


// ------------------------------------------------------------
// QUESTÃO ÚNICA (peso: 10) – Triagem Hospitalar
// ------------------------------------------------------------
//
// Crie um sistema de triagem de pronto-socorro que colete dados
// do paciente e determine o nível de urgência.
//
// Sempre que o usuário digitar um valor inválido, exiba uma mensagem de erro e encerre o programa.
//
// ─────────────────────────────────────────────────────────────
// PASSO A – Coleta de dados
// ─────────────────────────────────────────────────────────────
//
// Colete via terminal:
//   • "nomePaciente"  → nome
//   • "nivelDor"      → nível de dor de 1 a 10
//   • "temperatura"   → temperatura corporal em °C
//
// Exiba: "Paciente <nomePaciente> registrado. Iniciando triagem."

let dados = {
    nomePaciente: lerTeclado.question("Digite o nome do paciente: "),
    nivelDor: lerTeclado.questionInt("nível de dor de 1 a 10: "),
    temperatura: lerTeclado.question("temperatura corporal em °C")
};
console.log(`Paciente ${dados.nomePaciente} registrado. Iniciando triagem.`)
// ─────────────────────────────────────────────────────────────
// PASSO B – Categoria do sintoma (switch/case)
// ─────────────────────────────────────────────────────────────
//
// Exiba o menu e colete "categoria":
//
let categoria = lerTeclado.questionFloat("Qual e a categoria do sintoma principal?\n 1) Cardiorrespiratorio\n 2) Infeccioso / Febril\n 3) Trauma / Lesao? ");

//
// Use switch/case para exibir a categoria escolhida:
//   1 → "Categoria: Cardiorrespiratório"
//   2 → "Categoria: Infeccioso / Febril"
//   3 → "Categoria: Trauma / Lesão"

switch (categoria) {
    case 1:
        categoria = "1"
        console.log("1 → Categoria: Cardiorrespiratório")
        break;
    case 2:
        categoria = "2"
        console.log("2 → Categoria: Infeccioso / Febril")
        break;
    case 3:
        categoria = "3"
        console.log("3 → Categoria: Trauma / Lesão")
        break;
    default:
        console.log("Digite uma categoria de 1 a 3");
};

// ─────────────────────────────────────────────────────────────
// PASSO C – Nível de urgência (if/else if/else)
// ─────────────────────────────────────────────────────────────
//
// Com base na combinação de "categoria", "nivelDor" e "temperatura",
// determine o nível de urgência usando if/else:
//
//   categoria igual a 1 (Cardiorrespiratório):
//     nivelDor maior ou igual a 7 OU temperatura maior ou igual a 38.5 → urgencia = "A"
//     senão → urgencia = "B"
//
//   categoria igual a 2 (Infeccioso):
//     temperatura maior ou igual a 39.0 OU nivelDor maior ou igual a 7 → urgencia = "B"
//     senão → urgencia = "D"
//
//   categoria igual a 3 (Trauma):
//     nivelDor maior ou igual a 7 → urgencia = "A"
//     nivelDor maior ou igual a 5 → urgencia = "C"
//     senão → urgencia = "E"

if (
    (categoria === "1" && (dados.nivelDor >= 7 || dados.temperatura >= 38.5))
) {
    console.log("Urgência = A");

} else if (
    (categoria === "2" && (dados.temperatura >= 39.0 || dados.nivelDor >= 7))
) {
    console.log("Urgência = B");

} else if (
    categoria === "3" && dados.nivelDor >= 7
) {
    console.log("Urgência = A");

} else if (
    categoria === "3" && dados.nivelDor >= 5
) {
    console.log("Urgência = C");

} else if (categoria === "1") {
    console.log("Urgência = B");

} else if (categoria === "2") {
    console.log("Urgência = D");

} else if (categoria === "3") {
    console.log("Urgência = E");

} else {
    console.log("Categoria inválida");
};
// ─────────────────────────────────────────────────────────────
// PASSO D – Exibição do resultado
// ─────────────────────────────────────────────────────────────
//
// Exiba com console.log() e template literal:
//
//   =========================================
//   Paciente    : <nomePaciente>
//   Nível de dor: <nivelDor> de 10
//   Temperatura : <temperatura>°C
//   Resultado   : <descrição do nível>
//   =========================================
//
// Use switch/case para traduzir "urgencia" na descrição:
//   "A"  →  "EMERGÊNCIA — Atendimento imediato"
//   "B"  →  "URGÊNCIA ALTA — Será chamado em breve"
//   "C"  →  "URGÊNCIA MODERADA — Aguarde na sala de espera"
//   "D"  →  "CONSULTA NORMAL — Agende pelo sistema"
//   "E"  →  "BAIXA PRIORIDADE — Procure uma UBS"

// → Seu código aqui:
let categoriadefinida;

switch (categoriadefinida) {
    case 1: categoria = "Urgência = A"
        categoriadefinida = console.log("A  →  EMERGÊNCIA — Atendimento imediato")
        break;
    case 2: categoria = "Urgência = B"
        categoriadefinida = console.log("B  →  URGÊNCIA ALTA — Será chamado em breve")
        break;
    case 3: categoria = "Urgência = C"
        categoriadefinida = console.log("C  →  URGÊNCIA MODERADA — Aguarde na sala de espera")
        break;
    case 4: categoria = "Urgência = D"
        categoriadefinida = console.log("D  →  CONSULTA NORMAL — Agende pelo sistema")
        break;
    case 5: categoria = "Urgência = E"
        categoriadefinida = console.log("E  →  BAIXA PRIORIDADE — Procure uma UBS")
};

console.log("=========================================");
console.log(`Paciente    : ${dados.nomePaciente}`);
console.log(`Nível de dor: ${dados.nivelDor}`);
console.log(` Temperatura : ${dados.temperatura}°C`);
console.log(`Resultado   : ${categoriadefinida}`);
console.log("=========================================");

