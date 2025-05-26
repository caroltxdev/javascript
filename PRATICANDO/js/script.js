// FUNÇÃO
//1. Crie uma função chamada digaOla que imprima "Olá, mundo!" no console.
function digaOla () {
    console.log("Olá, mundo!");
}
digaOla();

//2.Crie uma função soma que recebe dois números como parâmetros e retorna a soma deles.
function soma(a, b){
    return (a + b)
}
console.log(soma(5, 7));

//3.Crie uma função chamada ehPar que receba um número como argumento e retorne true se for par e false se for ímpar.
function ehPar(numero) {
    return numero % 2 === 0;
}
console.log(ehPar(4));
console.log(ehPar(7));

//4.Crie uma função chamada boasVindas que receba um nome como argumento e retorne a frase: "Bem-vindo(a), [nome]!"
function boasVindas(nome) {
    return (`Bem vindo(a), ${nome}`);
}
console.log(boasVindas("Carol"));

// 5.Crie uma função chamada quadrado que receba um número e retorne o valor dele ao quadrado.
function quadrado(number){
    return number * number;
}
console.log(quadrado(9))
console.log(quadrado(7))

// 6.Crie uma função chamada triplo que receba um número e retorne o seu triplo.
function triplo(num) {
    return num * 3;
}
console.log(triplo(6));
console.log(triplo(5));

// 7. Crie uma função chamada cumprimentar que receba um nome e um horário do dia (ex: "manhã", "tarde", "noite") e retorne a frase:"Bom [horário], [nome]!
function cumprimentar(horario, nome) {
    return `Bom ${horario}, ${nome}!`;
}
console.log(cumprimentar("dia", "Carol"));

// 8. Crie uma função chamada multiplica que receba dois números como argumentos e retorne o resultado da multiplicação entre eles.
function multiplica(num1, num2){
    return num1 * num2;
}
console.log(multiplica(7, 9));

// 9. Crie uma função chamada maiorDeIdade que receba uma idade e retorne "É maior de idade" se for 18 ou mais, senão "É menor de idade".
function maiorDeIdade (idade) {
    return idade >= 18 ? "É maior de idade" : "É menor de idade";
}
console.log(maiorDeIdade(17));
console.log(maiorDeIdade(21));

// 10. Crie uma função chamada inverterTexto que receba uma string e retorne o texto invertido.Exemplo: "Olá" → "álO"
function inverterTexto(texto) {
    return texto.split("").reverse().join("");
}
console.log(inverterTexto("Tchau"));
console.log(inverterTexto("Carol"));
/*Explicação linha por linha
1. texto.split("")
Isso quebra a string em um array de caracteres.

Exemplo: "Olá" vira ["O", "l", "á"]

2. .reverse()
Esse método inverte a ordem dos itens do array.

Exemplo: ["O", "l", "á"] vira ["á", "l", "O"]

3. .join("")
Junta todos os elementos do array de volta em uma única string.

Exemplo: ["á", "l", "O"] vira "álO"*/

// FUNÇÃO Escopo aninhado, Closure e Recursão
// 1.Crie uma função cumprimento() que guarda uma variável saudacao = "Olá".Ela deve retornar uma função que recebe um nome e imprime "Olá, [nome]!".
function cumprimento () {
    let saudacao = "Olá"
    return function(nome){
        console.log(`${saudacao}, ${nome}!`);
    }
}
let ola = cumprimento();
ola("Carol");

// 2. Crie uma função contador() que começa em 0. Ela deve retornar outra função que, toda vez que for chamada, soma +1 ao contador e retorna o novo valor.
function contador() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
let contar = contador();
console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());