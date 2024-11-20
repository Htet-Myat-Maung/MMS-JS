// const run = function (x){
//     return x * 2;
// };
// console.log(run(5));


// (function(){
//     console.log("IIFE");
// })();


// const x = function(){
//     return "this is x";
// };

// const y = function(){
//     return x() + " this is y"
// };

// console.log(x());
// console.log(y());


// {
//     let x = 5;
//     let y = 3;
// }
// console.log(x + y); //can't use outside of code block

// function run(){
//     let x = 5;
// };
// run();
// console.log(x); //can't use outside of function code block

// let x = 8; //global scope can use in code,function
// {
//     console.log(x);
// }
// console.log(x);
// function run(){
//     console.log(x);
// };
// run();

// console.log(run());
// support hoisting in function
// function run(){
//     return "this is run";
// };

// console.log(run());
// not support in function expression
// const run = function () {
//     return "this is run";
// };

// console.log(x);
// var x = 5;


// let results = [];
// let resultIndex = 0;
// function area(width, breadth){
//     let result = width * breadth;
//     results[resultIndex++] = {
//         width,
//         breadth,
//         area: result
//     };
//     return `${result} sqft` ;
// }
// console.log(area(15,50));
// console.log(area(16,60));
// console.log(area(17,50));

// console.table(results);

// 200 usd to mmk
// 50 eur to mmk
// 15 sgd to mmk

// const rates = {
//     usd : 2100,
//     eur : 2220,
//     sgd : 1568,
// };

// const exchangeToMMK = function (amount,currency) {
//     let currencyRate = rates[currency];
//     let result = amount * currencyRate;
//     return `${result} mmk`;
// };
// console.log(exchangeToMMK(200,"usd"));
// console.log(exchangeToMMK(50,"eur"));
// console.log(exchangeToMMK(15,"sgd"));

//500000 mmk to usd
//300000 mmk to eru
//700000 mmk to sgd

// const exchangeFromMmktoAnyCurrency =function (amount,currency){
//     let currencyRate = rates[currency];
//     let result = amount / currencyRate;
//     return `${result} ${currency}`;
// };
// console.log(exchangeFromMmktoAnyCurrency(500000,"usd"));
// console.log(exchangeFromMmktoAnyCurrency(300000,"eur"));
// console.log(exchangeFromMmktoAnyCurrency(700000,"sgd"));
