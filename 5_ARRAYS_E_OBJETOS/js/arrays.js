// 1 - ARRAYS
const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista);

//  2 - Mais sobre arrays
const arr = ["a", "b", "c", "d", "e"];
console.log(arr[2]);

//  3 - Propriedades
const numbers = [5, 3, 4, 7];
console.log(numbers.length);

const myName = "Carol";
console.log(myName.length);

// 4 - MÉTODOS
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);

const text = "algum texto";
console.log(text.toUpperCase()); //Coloca as letras todas em maiúsculas
console.log(typeof text.toUpperCase);
console.log(text.indexOf("x")); //Mostra a posição do elemento que eu coloquei

// 5- objetos
const person = {
    name: "Carol",
    age: 21,
    job: "Programadora",
};

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// 6 - criando e deletando propriedades
const car = {
    engine: 2.0,
    marca: "VW",
    model: "Tiguan",
    km: 20000,
};
console.log(car);
car.doors = 4;
console.log(car);

delete car.km;
console.log(car);

// 7 - Mais sobre objetos
const obj = {
    a: "teste",
    b: true,
};
console.log(obj instanceof Object);

const obj2 = {
    c: []
}

Object.assign(obj2, obj); //Serve para pegar as propriedades do obj e acrescentar no obj2
console.log(obj2);

// 8 - Conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2)); //Aqui mostra as chaves que temos nos objetos

console.log(Object.entries(car));/*No entries ele mostra o nome da propriedade
ex(model) e o valor ex(Tiguan)*/
console.log(Object.entries(obj)); 

// 9 - Mutação (Referência, pode mudar a original)
const a = {
    name: "Matheus",
};
const b = a;
console.log(a);
console.log(b);
console.log(a === b);

a.age = 31;
console.log(a);
console.log(b);

delete b.age; // nessa parte de delte, ele não vai deletar só o b, ele deleta também o a
console.log(a);
console.log(b);

// 10 - Loop em arrays
const users = ["Matheus", "João", "Pedro", "Miguel"];

for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}
