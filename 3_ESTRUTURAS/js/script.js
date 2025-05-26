// 1 - variáveis
let nome = "Carol"
console.log(nome);

nome = "Carol teixeira";
console.log(nome);

const idade = 31;
console.log(idade);
/* idade = 21;
Ai dá erro quando vai rodar */
console.log(typeof idade);
console.log(typeof nome);

// 2 - mais sobre variáveis
// let 2teste = "inválido"
// let @teste = "inválido"
let a = 10, 
    b = 20, 
    c = 30;
console.log(a, b ,c);

const nomecompleto = "Ana teixeira";
const nomeCompleto = "Carol";

console.log(nomecompleto);
console.log(nomeCompleto); //uma letra maiúscula pode mudar tudo

let _teste = "ok";
let $teste = "ok";

console.log(_teste, $teste);

// 3 - prompt
// const age = prompt("Digite sua idade: ");
// console.log(`Você tem ${age} anos.`);

// 4 - alert
// alert("Testando");

// const z = 10;
// alert(`O número é ${z}.`);

// 5 - Math.x
// console.log(Math.max(5,2,1,10));
// console.log(Math.floor(5.14));
// console.log(Math.ceil(5.14));

// 6 - console
// console.log("teste!");
// console.error("ERRO");
// console.warn("aviso!");

// 7 - if
// const m = 10;

//     if(m > 5){
//         console.log("M é maior que cinco");
// }

// const user = "Ana";

//     if(user === "Ana"){
//         console.log("Olá, Ana!");
//     }

// console.log(user === "Ana", user === "Naíma");

// //  8 - else
// const loggedin = false;

// if(loggedin){
//     console.log("Está autenticado!");
// }

// else{
//     console.log("Não está autenticado!");
// }

// const q = 10;
// const w = 15;

// if(q > 5 && w > 20){
//     console.log("Números mais altos");
// }
// else{
//     console.log("Os números não são mais altos");
// }

// // 9 - else if
// if(1 > 2){
//     console.log("Teste");
// }
// else if(2 > 3){
//     console.log("Teste 2");
// }
// else if(5 > 1){
//     console.log("Agora sim");
// }

// 10 - while
// let p = 0;

// while(p < 5){
//    console.log(`Repetindo ${p}`);
//    p++; 
// }

// 11 - do while
// let o = 10;

// do{
//     console.log(`Valor de o: ${o}`);
//     o--; 
// }
// while(o > 1);

// 12 - for
for(let t = 0; t < 10; t++){
    console.log("Repetindo algo..."); 
}
// outra maneira, é deixando a variável do lado de fora
let r = 10;

for(r; r > 0; r--){
    console.log(`O r está diminuindo: ${r}`); 
}

// 14 - break
for(let g = 20; g > 10; g--){
    console.log(`O valor de g é ${g}`); 

    if(g === 15){
        console.log("O g é 15!");
        break; 
    }
}

// 15 - continue
for(let s = 1; s < 10; s++){
    // operador de resto = %
    if(s % 2 === 0) {
        console.log("Número par!"); 
        continue
    }
    console.log(s); 
}
//  16 - switch
const job = "Programador"

switch(job){
     case "Programador":
        console.log("Você é um programador"); 
        break; //Se não colocar o brake, ele roda todos os case!

     case "Advogado":
        console.log("Você é um advogado"); 
        break;
     case "Engenheiro":
        console.log("Você é um engenheiro");
        break; 

     default:
        console.log("Profissão não encontrada"); 
}