1. // Basic concept jest
function sum(a,b){
    return a + b;

}
module.exports = sum;

2. // toThrow()
function myFunction(input){
    if(typeof input != 'number'){
        throw new Error('Invalid Input')
    }
}
module.exports = myFunction;

3. // Asynchronus Code
function fetchData(callback){
    setTimeout(()=>{
        callback("Peanut butter")
    },1000)
}
module.exports = fetchData