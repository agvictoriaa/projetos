let lerTeclado = require('readline-sync')
// ============================================================
//   DESAFIOS (para quem já terminou a atividade 03) – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Cadastro completo
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados:
//    nome, idade, profissão, cidade, se gosta de JavaScript, lista de comida favoritos e lista de pessoa(s) com que mora (nome e idade).
//    pense em qual tipo de dado cada resposta representa para armazena-los corretamente.
// b) Crie um objeto "cadastro" com todas essas propriedades.
// c) Exiba o objeto com console.table().
// d) Exiba também uma mensagem usando template literal com todos os dados, ex:
//    "Nome: <nome>. Idade: <idade> anos. Profissão: <profissão> em <cidade>. Gosta de JS: <sim/não> ...."

// → Seu código aqui:
// const cadastro = {
//     nome: lerTeclado.question('Digite o seu nome: '),
//     idade: lerTeclado.questionInt('Digite a sua idade: '),
//     profissao: lerTeclado.question('Digite a sua profissão: '),
//     cidade: lerTeclado.question('Digite o nome da sua cidade: '),
//     gostaDeJavaScript: lerTeclado.keyInYN('Gosta de java script? (s/n) '),
//     comidasFavoritas: {
//         comida1: lerTeclado.question('Digite sua primeira comida: '),
//         comida2: lerTeclado.question('Digite sua segunda comida: '),
//         comida3: lerTeclado.question('Digite sua terceira comida: ')
//     },
//     pessoasQueMoramComigo: {
//         nome1: lerTeclado.question('Digite o nome da pessoa: '),
//         idade1: lerTeclado.questionInt('Digite a idade da pessoa: ')
//     },
    
// };

// console.table(cadastro);
// console.log(`Nome:${cadastro.nome}, idade${cadastro.idade} anos. Profissão:${cadastro.profissao} moro em ${cadastro.cidade}. Gosta de JS: ${cadastro.gostaDeJavaScript}.\n
// Suas comidas favoritas são:${cadastro.comidasFavoritas.comida1}, ${cadastro.comidasFavoritas.comida2}, ${cadastro.comidasFavoritas.comida3}, mora com:${cadastro.pessoasQueMoramComigo.nome1} e ela tem ${cadastro.pessoasQueMoramComigo.idade1} anos`);

// ------------------------------------------------------------
// DESAFIO 2 – Dois amigos
// ------------------------------------------------------------
// a) Peça os dados de 2 pessoas diferentes (nome, idade e enderecoCompleto de cada uma).
//    enderecoCompleto deve ser um objeto contendo rua, cidade e estado
// b) Crie um objeto para cada pessoa com essas propriedades.
// c) Crie uma array chamada "amigos" contendo os dois objetos.
// d) Exiba a array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 2º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:

const cadastro = {
    nome: lerTeclado.question('Digite o seu nome: '),
    idade: lerTeclado.questionInt('Digite o sua idade: '),
    enderecoCompleto = {
        Rua: lerTeclado.question('Digite o nome da sua rua: '),
        Bairro: lerTeclado.question('Digite o nome do seu bairro: '),
        numeroDaCasa: lerTeclado.questionInt('Digite o numero da sua casa: '), 
        Cidade: lerTeclado.question('Digite o nome da sua cidade: ')
    },
};

const cadastro2 = {
    nome: lerTeclado.question('Digite o seu nome: '),
    idade: lerTeclado.questionInt('Digite o sua idade: '),
    enderecoCompleto = {
        Rua: lerTeclado.question('Digite o nome da sua rua: '),
        Bairro: lerTeclado.question('Digite o nome do seu bairro: '),
        numeroDaCasa: lerTeclado.questionInt('Digite o numero da sua casa: '), 
        Cidade: lerTeclado.question('Digite o nome da sua cidade: ')
    },
};

let amigos = [cadastro,cadastro2];

console.table(amigos);



// ------------------------------------------------------------
// DESAFIO 3 – Pedido de restaurante
// ------------------------------------------------------------
// a) Informe ao usuário (com console.info) que ele vai montar um pedido.
// b) Exiba um menu (quanto mais estilizado melhor!) com as opções de entrada, prato principal, sobremesa e bebidas.
// b) Peça ao usuário que escolha:
//    - Uma entrada
//    - Um prato principal
//    - Uma sobremesa
//    - Duas bebidas (uma de cada vez)
// c) Crie um objeto "pedido" com as propriedades: entrada, pratoPrincipal, sobremesa e listaBebidas.
// d) Exiba o pedido com console.table().
// e) Exiba também no console a mensagem:
//    "Seu pedido: Entrada: <entrada>, Prato Principal: <pratoPrincipal>, Sobremesa: <sobremesa>, Bebida 1: <bebida1>, Bebida 2: <bebida2>. Bom apetite!"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Perfil de jogador
// ------------------------------------------------------------
// a) Peça ao usuário: apelido, jogo favorito e horas totais jogadas (aproximadas)
// b) Pergunte se ele joga em time (sim/não).
// c) Crie um objeto "perfil" com todas as propriedades:
//    apelido, jogoFavorito, horasTotaisJogadas, jogaEmTime.
// d) Exiba o perfil com console.table().
// e) Use console.warn() para exibir: "Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade."

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Comparador de dados
// ------------------------------------------------------------
// a) Peça o nome e a cidade favorita de 3 pessoas diferentes.
// b) Crie um objeto para cada pessoa com as propriedades: nome e cidadeFavorita.
// c) Exiba um dos objetos com console.table().
// d) Crie uma array "viajantes" com os 3 objetos.
// e) Exiba a array com console.table().
// f) Exiba com console.info() quantos viajantes estão na lista (use .length).
// g) Exiba com console.log() a cidade favorita do 2º viajante.
// h) Exiba com console.log() o nome do 1º viajante.

// → Seu código aqui:



console.log("_______________________________");
