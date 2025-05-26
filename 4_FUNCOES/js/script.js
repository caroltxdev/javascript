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
const multiplication = function (n, m) {
  if (m === undefined) {
    return n * 2;
  } else {
    return m * n;
  }
};

console.log(multiplication(4, 4));
console.log(multiplication(4));

const greeting = (name) => {
  if (!name) {
    console.log("Olá!");
    return;
  }

  console.log(`Olá ${name}!`);
};

greeting();
greeting("Matheus");

//  8 - valor default
const customGretting = (name, greet = "Olá") => {
    return `${greet}, ${name}`;
}

console.log(customGretting("Ana"));
console.log(customGretting("Carol", "Ohayô"));

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};

repeatText("Testando");
repeatText("Agora repete 5 vezes", 5);

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
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

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
};
untilTen(100, 7);

// infinite recursion, tomar cuidado
// function run() {
//   console.log("Executando...");
//   run();
// }

// run();

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

const num = 6;

const result = factorial(num);

console.log(`O fatorial do número ${num} é ${result}`);

// CLOSURE (REVISÃO MINHA)
// 1 - Função que "lembra uma variável"
function saudacao (nome) {
    return function() {
        console.log(`Olá, ${nome}`);
    };
}
let ola = saudacao("João");
ola();

// 2 - Contador
function criarContador() {
    let contador = 0;

    return function() {
        contador++;
        console.log(contador);
    };
}
let contar = criarContador();
contar();
contar();
contar();

// 3 - Função que soma com valor fixo
function somador(x) {
    return function(y){
        return x + y;
    };
}
let soma10 = somador(10);
console.log(soma10(11));
console.log(soma10(10));

// 4 - Função que guarda configuração
function configurarSaudacao(saudacao) {
    return function(nome) {
        console.log(`${saudacao}, ${nome}`);
    };
}
let oi = configurarSaudacao("Oi");
let bomdia = configurarSaudacao("Bom dia");
oi("Ana");
bomdia("Luiz");