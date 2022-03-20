// Fibinacci con funcion generadora

function* fibo(){
    yield 0;
    yield 1;

    let first = 0;
    let second = 1;
    let aux;

    while(true){
        aux = first +second;
        first = second;
        second = aux;
        yield second;
    }
}

const generator = fibo();
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
