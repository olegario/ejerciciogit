function dividiArray(array,n){

    let arreglos = [];

    for(let elemento of array) {

        let ultimo = arreglos[arreglos.length - 1];

        if (!ultimo  || ultimo.length === n){
            arreglos.push([elemento]);
        }else{
            ultimo.push(elemento);
        }
    }
    console.log(arreglos);
    
}

dividiArray([7,8,9,10,45,0,3,6,3,],3);