// Con un array y for
console.time('fibo')
function fibo(n){
  
    let array = [1,1]
    for(let i=2; i<= n; i++){
        array.push(array[i-1]+array[i-2]);
    }
    return array[n] ;
   
}

console.log(fibo(500))
console.timeEnd('fibo')