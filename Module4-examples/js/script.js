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

// var a = {x: 7};
// var b = a;
// console.log(a);
// console.log(b);
// b.x = 5;
// console.log(a.x)
// console.log(a);
// console.log(b);

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

////Aula 48////

