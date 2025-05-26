// // 1 - criando uma função
// function minhaFuncao(){
//     console.log("Testando");
// }

// minhaFuncao();

// const minhaFuncaoEmVariavel = function (){
//     console.log("Função em variável");
// }

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt) {
//     console.log(`Mostrando: ${txt}`);
// }

// funcaoComParametro("Imprimindo alguma coisa");

// // 2 - return
// const a = 10
// const b = 20
// const c = 30
// const d = 40

// function soma(n1, n2){
//     return n1 + n2;
// }
// const resultado = soma(a, b);

// console.log(resultado);
// console.log(soma(c, d));

// //  3 - escopo da função GLOBAL 
// let y = 10

// function testandoEscopo() {
//     let y = 20;
//     console.log(`Y dentro da função é: ${y}`);
// }
// testandoEscopo();

// console.log(`Y fora da função é: ${y}`);
// testandoEscopo();

// //  4 - escopo aninhado
// let m = 10;

// function escopoAninhado() {
//     let m = 20;

//         if(true) {
//             let m = 30;

//                 if(true) {
//                     let m = 40
//                         console.log(m);
//                 }
//                 console.log(m);
//             }
//             console.log(m);
//     }
// escopoAninhado();
// console.log(m);

// // 5 - arrow function
// const testeArrow = () => {
//     console.log("Esta é uma arrow function");
// }
// testeArrow();

// const parOuImpar = (n) => {
//     if(n % 2 === 0) {
//         console.log("Par");
//         return
//     }

//     console.log("Ímpar");
// }
// parOuImpar(5);
// parOuImpar(10);
// parOuImpar(21);

// // 6 - mais sobre arrow functions
// const raizQuadrada = (x) => {
//     return x * x;
// }
// console.log(raizQuadrada(4));

//  7 - parametro opcional

//  8 - valor default
const customGretting = (name, greet = "Olá") => {
    return `${greet}, ${name}`;
}

console.log(customGretting("Ana"));
console.log(customGretting("Carol", "Ohayô"));

//  9 - closure
function someFunction() {
    let txt = "Alguma coisa"

    function display() {
        console.log(txt);
    }
    display();
}
someFunction();

//  10 - mais obre closure
const multiplicationClosure = (n) => {

}

// 11 - recursion
const untilTen = (n, m) => {
    if (n < 10) {
        console.log("A função terminou!");
    } 
    else{
        const x = n - m;
        console.log(x);
        untilTen(x, m);
    }
}
untilTen(100, 7);