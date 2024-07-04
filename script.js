//Synchronous programming : the program is executed in a particular sequence which makes code which take longer sequence to execute make other code wait for it to execute 
//Asynchronous programming : the program is executed in any sequence and longer code can be made to run parallel to other code
 
//setTimeout(function,time in ms) : this function sets the timeout from when super function is called and doesn't depend on where this code is present
//Callback hell : nested callbacks stacked below one another forming a pyramid of doom. Generally seen in linking sequence of functions

//Promises : It's a promise to eventually complete a task
//syntax : let promise = new Promise((resolve,reject) => {...})

//Promise has 3 states : pending, fulfilled(resolved), rejected and a result along with the state

function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Data = ${data}`);
            resolve('Success');
        },3000)
    })
}

/* let promise1 = getData(5);
let promise2 = promise1.then((res)=>{return getData(6)});
let promise3 = promise2.then((res)=>{return getData(7)}); */

//or this can also be done by

/* getData(5).then((res)=>{getData(6).then((res)=>{getData(7)})});  */

//or 

function gettingDataPromiseChain(){ return new Promise((resolve,reject)=>{
    getData(5)
        .then((res)=>{return getData(6)})
        .then((res)=>{return getData(7)})
        .then((res)=>{return resolve('Success')}); //This is called Promise chaining and it's better callback hell
})} 

//Async-Await
//syntax : async function functionName(){...} await functionName()
//Async : an async function will always return a promise
//Await : the await keyword stops the execution of other async functions until its function fulfills/rejects its promise. It can only be used with async functions

function asyncGetData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`New Data = ${data}`);
            resolve('Success');
        },3000);
    })
}
async function dataDisplay(data){
    await gettingDataPromiseChain();
    await asyncGetData(9);
    await asyncGetData(11);
    await asyncGetData(13);
}

//IIFE : Immediately invoked function expression
//IIFE are functions which are executed when they are defined
//syntax : (function(){...})();