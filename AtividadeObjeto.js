// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:
const aluno = {
    nome: "Vitória Cristiny",
    idade: 23,
    curso: "Desenvolvimento de sistemas"

};
console.log(aluno);

// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:
aluno.endereco = ["Avenida Paulista",1956,"Centro", 03960030, "São Paulo"];
console.log(aluno);

// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:
aluno.habilidades = {
    dormir: "Em qualquer lugar",
    organizar: "Qualquer bagunça",
    gravar: "Números",
    cozinhar: "Qualquer coisa que me dão a receita"

};
console.log(aluno);

// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:

aluno.notas = {
    Portugues: 7,
    Matematica: 9,
    Ingles: 2,
    Geografia: 5
    
    
};
console.log(aluno);


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:
aluno.responsavel = {
    mãe: "Maria",
    pai: "batman"

};
console.log(aluno);
aluno.responsavel.mãe = "Helena";

console.log(aluno);

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.


// → Seu código aqui:
const listaDeAlunos = [aluno];
let aluno2 = {
    nome: "Ana",
    idade: 23,
    curso: "Desenvolvimento de sistemas"
};
let aluno3 = {
    nome: "Natasha",
    idade: 20, 
    curso: "Desenvolvimento de sistemas"
};
listaDeAlunos.push(aluno2, aluno3);

console.log(listaDeAlunos);
console.log(listaDeAlunos[1].nome);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:


listaDeAlunos2 = [
    {
    nome: "Laura",
    idade: 25,
    nota: [7, 6, 9],
},
{
    
    nome: "Beatriz",
    idade: 20,
    nota: [7, 8, 9],
},
{
    nome: "Ana",
    idade: 17,
    nota: [7, 8, 9, 5],
}
];
console.log(listaDeAlunos2[0].nome, listaDeAlunos2[0].nota);
console.log(listaDeAlunos2[1].nome, listaDeAlunos2[1].nota);
console.log(listaDeAlunos2[2].nome, listaDeAlunos2[2].nota);

