/*
Dada una cadena de texto, devolver el caracter más usado.

Mapear letras en json
Recorrer el mapeo y ver cual es el maximo
*/

function mostUsed(text){

    let mapLetras = {};
    let maxRepeticiones = 0;
    let maxLetra = '';

    for (let letra of text){
        if( !mapLetras[letra]){
            mapLetras[letra] = 1;
        }else{
            mapLetras[letra]++;
        }
        
    }
    for( let letra in mapLetras){
        if( letra !== ' ' && mapLetras[letra] > maxRepeticiones){
            maxRepeticiones = mapLetras[letra];
            maxLetra = letra;
        }
    }
console.log(maxLetra,maxRepeticiones)

}
mostUsed('el perro del hortelano')

