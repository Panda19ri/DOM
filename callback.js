// call backs
function hello(callBackFunction){
    console.log("Hello!!");
    callBackFunction();
}
function goodMrng(){
    console.log("Good Morning!");
}
function goodEvng(){
    console.log("Good Evening!");
}
hello(goodEvng);


//callback usage
function sumOfSomething(a,b,callback){
    let val1=callback(a);
    let val2=callback(b);
    return val1+val2;
}
function square(x){
    return x*x;
}
function cube(x){
    return x*x*x;
}
console.log(sumOfSomething(4,5,square));
console.log(sumOfSomething(4,5,cube));



//array map method
let arr=[1,2,3,4,5];
let newarray=arr.map(multiply);

function multiply(element){
    return element*2;
}
console.log(newarray);

//array filter method
let filterArray=[1,2,3,4,5];
let newArray=filterArray.filter(evenValues);
let oddArray=filterArray.filter(oddValues);

function evenValues(number){
    return number%2==0;
}
function oddValues(number){
    return number%2!=0;
}
console.log(newArray);
console.log(oddArray);

//settimeout  -asynchronous operation
//setTimeout(functionName,time);
console.log("without usage of timeout");
setTimeout(printMyname,5000);
function printMyname(){
    console.log("My name is pandarikaksha");
}


//setInterval function  and kitting time interval
setInterval(()=>{
    console.log("noo thinale..");
    
},2000);

//JS visualizer  **********jsv9000********
//async promises and async wait 

