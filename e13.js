// Dado un string y un numero, repetir el string tantas veces como indique el numero.

function repetir(string, n) {
  let stringNew = "";
  for (let i = 1; i <= n; i++) {
    stringNew += string;
  }
 return stringNew;
}

let saludo = "hola ";
console.log(repetir(saludo, 5));

String.prototype.repetir = function ( n) {
    let stringNew = "";
    for (let i = 1; i <= n; i++) {
      stringNew += this;
    }
   return stringNew;
  }

  console.log(saludo.repetir(3))
