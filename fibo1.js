// Con recursividad
console.time('fibo1')
function fibo(n){
    
    return n<2 ? n : fibo(n-1) + fibo(n-2)
   


console.log(fibo(15))
console.timeEnd('fibo1')
}