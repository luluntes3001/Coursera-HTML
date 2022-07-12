// function b() {
//     return {
//         name:"Luiz"
//     };
// }
// console.log (b())

// var message = "in global";
// console.log ("global: message = " + message);


// EXEMPLO DE GLOBAL E NÃO 

// var message = "in global";
// console.log("Global: message" + message);

// var a = function () {
//     var message = "inside a";
//     console.log("a: message =" + message);
//     function b () {
//         console.log("b: message =" + message);
//     }
//     b();
// }
// a ();


//EXEMPLO DE UNDEFINED

// var x;
// console.log(x);

// if (x == undefined) {
//     console.log("x is undefined");
// }

// x = 5;
// if (x == undefined) {
//     console.log("x is undefined");
// }
// else {
//     console.log("x has been defined");
// }

////Aula 45////
////APLICAÇÃO DE OBJETOS DE FORMA EXTENSA
// var company = new Object();
// company.name = "Facebook";
// //////company["name"] = "Facebook"//////
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";
// console.log(company);
// console.log(company.ceo.firstName);

// // console.log(company["name"]) //// forma de brackets para falar sobre 


// //BETTER WAY: OBJECT LITERAL//

// var testando = {
//     name: "Facebook",
//     ceo: {
//         firstName: "Mark",
//         favColor: "blue"
//     },
//     "stock of company": 110
// };
// console.log(testando);

////Aula 46 - Functions///
// function makeMultiplier(multiplier) {
//     var myFunc = function (x) { //todo o X é o multiplier * x que por sua vez esta dentro de my Func
//         return multiplier * x;
//     };
//     return myFunc; //qnd eu retorno myFunc, estou retornando x
// };

// var multiplyby3 = makeMultiplier(3);  //aqui estou definindo que a var tem o valor de 3 * x
// console.log(multiplyby3(10))  // enquanto qnd eu chamo com o (10) estou falando que é 3*(10)


// ////Passing functions as arguments////
// function doOperationON(x, operation) {
//     return operation(x);
// };
// var result = doOperationON(5, multiplyby3);
// console.log(result);


////Aula 47  - passing variables///

// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);

var a = {x: 7};
var b = a;
console.log(a);
console.log(b);
b.x = 5;
console.log(a.x)
console.log(a);
console.log(b);

////value
// function changePrimitive(primValue) {
//     console.log("in changePrimitive...");
//     console.log("before:");
//     console.log(primValue);  //aqui ele esta puxando a linha 123
        
//     primValue = 5;
//     console.log("after:");
//     console.log(primValue);
// };
  
// var value = 7;
// changePrimitive(value); // primValue = value
// console.log("after changePrimitive, orig value:");
// console.log(value);

// ////object
// function changeObject(objValue) {
//     console.log("in changeObject...");
//     console.log("before:");
//     console.log(objValue);
        
//     objValue.x = 5;
//     console.log("after:");
//     console.log(objValue);
// };
  
// value = { x: 7 };
// changeObject(value); // objValue = value
// console.log("after changeObject, orig value:");
// console.log(value);

////Interlúdio videos do MOSH////

// let name = "Luiz";
// console.log(name);

// let person = {
//     name: 'Mosh',
//     age: 30
// };
// person.name = 'John'
// let selection= 'name';
// person[selection] = 'Mary'; //selection vira name que tb é uma propriedade que foi feita anteriormente
// console.log(person.name);

//////////////////array//

// let selectedColors = ['red', 'blue'];  ///lembrar que eles ficam na ordem 0,1,2,3.

// console.log(selectedColors[0]); //estou selecionando o red

// selectedColors[2] = 'green'; //como o primeiro array ia até um, estou colocando um item dois

// console.log(selectedColors[2]);

// selectedColors[3] = 1;  ///como a linguagem é dinâmica dá para juntar tudo
// console.log(selectedColors[3]);

////////////////////Funções/////

// function greet(name) {    //////name é um parametro e pode exister vários parametros 
//     console.log('Hello ' + name);
// }
// greet('John');  /////john é um argumento 

//função de cálculo//

// function square(number) {
//     return number * number;
// }

// let result = square(2);
// console.log(result);


///Object oriented programming//

// let employee = {  ///exemplo de objeto reduzido
//     baseSalary: 30_000,
//     overtime: 10,
//     rate: 20,
//     getWage: function() {
//         return this.baseSalary + (this.overtime * this.rate);
//     }
// };

// console.log(employee.getWage());


/////function factory

// function createCricle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }
// const circle = createCricle(1);
// console.log(circle)


//Contructor function

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const another = new Circle(1) //se usar this, tem que usar o new



///////AULA 48/////////

//fazer o this apontar para dentro//

// function Circle (radius) {
//     console.log(this);
// }

// var myCircle = new Circle(10);  //equivalente a new object ()
// console.log(myCircle);

// function Circle (radius) {
//     this.radius = radius;

//     this.getArea = 
//         function () {
//             return Math.PI * Math.pow(this.radius, 2);
//         };
// }

// var MyCircle = new Circle(10);  ///quando se cria um novo as linhjas 243 a 246 são criadas sempre
// console.log(MyCircle.getArea());

////////colocando o prototype/////

// function Circle (radius) {
//     this.radius = radius;
// }
  
// Circle.prototype.getArea = 
//     function () {
//     return Math.PI * Math.pow(this.radius, 2);
//     };
  
  
// var myCircle = new Circle(10);
// console.log(myCircle.getArea());
  
// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle.getArea());


///////AULA 50/////

// var array = new Array();  ////colocando vários objetos em uma array
// array[0] = "Luiz";
// array[1] = 2;
// array[2] = function (name) {
//     console.log("Hello " + name);
// };

// array[3] = {couse: "Html"};
// console.log(array);
// array[2](array[0]);


// var names = ["Luiz", "Carol", "Sushi"];
// // console.log(names);

// for (var i = 0; i< names.length; i++) {
//     console.log("Hello " + names[i])
// }

// var names2 = ["Luiz", "Carol", "Sushi"];

// names2.greeting = "Hi!"; //como é uma propriedade eu posso adicionar mais e eles vão se tornando o proximo na array, neste caso o 3
// for (var name in names2) {
//     console.log("Hello " + names2[name]);
// }


///////Aula 51/////////


