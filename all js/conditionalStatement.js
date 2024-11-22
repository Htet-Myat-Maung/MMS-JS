//scope
// if (true) {
//     let x = 5;
// } else {
//     let x = 8;
// };

// console.log(x);

// let x = 0;
// if (false) {
//     x = 5;
// } else {
//     x = 8;
// };
// console.log(x);


// const run = function () {
//     if (false) {
//         return "It's true";
//     };

//     return "when false";

// }
// console.log(run());



//conditional expression
// console.log(true ? "this is true" : "this is false");


//logical AND &&

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// console.log(true && true && true);
// console.log(true && false && true);
// console.log(true && true && false);

// console.log(true && "haha");
// console.log(false && "haha");



// logical OR ||

// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// console.log(true || true || true);
// console.log(true || false || true);
// console.log(true || true || false);
// console.log(false || false || false);


// logical NOT !

// console.log(!true);
// console.log(!!true);
// console.log(!!!true);


//Exercise
// const wakeUp = function (wakeUpTime) {
//     if (wakeUpTime < 8) {
//         return "It's ok ";
//     };

//     return "U will be punish";
// };
// console.log(wakeUp(6));
// console.log(wakeUp(8));


// const goToSchool = function (pocketMoney) {
//     if (pocketMoney >= 200) {
//         return "Go to school by bus";
//     };

//     return "Go to school by walking";
// };
// console.log(goToSchool(220));
// console.log(goToSchool(100));


// const teaching = function (waitingTime) {
//     if (waitingTime <= 10 ) {
//         return "Wait students for teaching";
//     };
//     return  "start teaching";
// };
// console.log(teaching(9));
// console.log(teaching(11));


// const examMark = function (mark) {
//     if (mark >= 80)  {
//         return "passed with D"
//     } else if (mark >= 40) {
//         return "passed"
//     } else if (mark <  40) {
//         return "failed"
//     }
// }
// console.log(examMark(30));
// console.log(examMark(85));
// console.log(examMark(70));


// const entrance = function (examMark, viperMark) {
//     if (examMark > 60 && viperMark > 60) {
//         return "passed"
//     };

//     return "fail"
// };
// console.log(entrance(85,90));
// console.log(entrance(25,90));
// console.log(entrance(75,90));
// console.log(entrance(75,20));


// const vote = function (age, nationality) {
//     if (age >= 18 && nationality === "mm") {
//         return "U can vote"
//     };

//     return "U can't vote"
// };
// console.log(vote(18,"mm"));
// console.log(vote(16,"mm"));
// console.log(vote(18,"US"));


// const bus = function (no) {
//     if (no === 20  || no === 65) {
//         return  "U will reach the MMS IT"
//     }; 

//     return "U will not reach MMS IT"
// };
// console.log(bus(65));
// console.log(bus(20));
// console.log(bus(35));


// const eat = function (food) {
//     if (food === "malar shankaw" || food ===  "hotpot") {
//         return "Bike pyae ml"
//     }else if(food === "icecream") {
//         return "Bike ma pyae vuu"
//     }
// };
// console.log(eat("malar shankaw"));
// console.log(eat("hotpot"));
// console.log(eat("icecream"));


