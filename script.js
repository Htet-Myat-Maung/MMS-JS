// let lunchBox = ["rice", "curry", "snap", "soup"];
// let fruits = ["Apple", "Orange", "Mango", "Blueberry"];

// console.log(lunchBox[0]);  //[0] = "0" ko index loh call dl
// console.log(lunchBox[1]);
// console.log(lunchBox[2]);
// console.log(lunchBox[3]);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// console.log(lunchBox[10]); //ma shi loh undefined loh pl paw dl
// _________________________________________________________________________________________________________________________________________________________________________________________

// Object = (key,value) set
// let mySelf = { myName : "Htet Myat Maung", myAge : 21, myJob : "Developer", township : "Hpado"};
// console.log(mySelf);
// console.log(mySelf["myName"]);
// console.log(mySelf["myAge"]);
// console.log(mySelf["myJob"]);
// console.log(mySelf["township"]);

// console.log(mySelf.myName); //with dot we don't need to write key with string
// console.log(mySelf.myAge);
// console.log(mySelf.myJob);
// console.log(mySelf.township);
// _________________________________________________________________________________________________________________________________________________________________________________________

// Arithmetic Operators 
// console.log(2+2);
// console.log(2-2);
// console.log(6/2);
// console.log(2*4);
// console.log(2**4);
// console.log(7%2);

//Assignment Operators
// console.log(x = 10);
// console.log(x += 3); //cuz x = 3 ,now we added 3 to x so the answer will be =13;
// console.log(x -= 3); // now we substrate 3 so the answer is 10;
// console.log(x *= 3); 
// console.log(x /= 2);
// console.log(x %= 4);
// console.log(x **= 2);
// _________________________________________________________________________________________________________________________________________________________________________________________


//String Operators
// let firstName = "Htet";
// let middleName = "Myat" 
// let lastName = "Maung";
// console.log(myName = firstName + middleName + lastName);

// let weight = 80;
// let weightUnit = "lb"
// console.log(myWeight = weight + weightUnit);

// Comparison Operators
// console.log(5==5);
// console.log(5=="5");
// console.log(5===5);
// console.log(5==="5");
// console.log(5!=4);
// console.log(5!="4");
// console.log(5!==5);
// console.log(5!=="5");
// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 <= 5);
// console.log(5 >= 8);
// _________________________________________________________________________________________________________________________________________________________________________________________


// function 
// find Age! , Require birth year
// born 1994 age? 
// born 2003 age? 
// born 2007 age? 
// formula => currentYear - birthYear

// function findAge(birthYear){
//     let currentYear = 2024;
//     let age = currentYear - birthYear;
//     return age;
// }
// console.log(findAge(1994));
// console.log(findAge(2003));
// console.log(findAge(2007));
// _________________________________________________________________________________________________________________________________________________________________________________________

// buying products
// 1.select product 2.check price 3.quantity
// cost = price * quantity

// let total = 0;

// function buy(productName,productPrice,quantity){
//     let cost = productPrice * quantity;
//     total += cost;
//     return productName + " - " + quantity + " = " + cost;
// };

// function findTax(amount,percentage){
//     return amount * (percentage/100);
// };

// console.log(findTax(3000,5));
// console.log(findTax(4000,5));
// console.log(findTax(5000,5));

// console.log(buy("Apple",500,5));
// console.log(buy("Mango",300,10));
// console.log(buy("Blueberry",50,45));
// console.log(buy("Orange",400,5));
// console.log("Total = " + total);

// let tax = findTax(total,5);
// console.log("Tax = " + tax);

// let netTotal = total + tax;
// console.log("cash = " + netTotal); 

// if (netTotal > 10000) {
//     console.log("U got lucky draw");
// } ;
// if u use if we need netTotal
// console.log("cash = " + total + tax); ဆိုရင် stringတွေပါလာရင် stringအချင်း"ပဲပေါင်းတာမို့သတ်သတ်ပေါင်းပေးရမယ်...
// console.log("cash = " + (total+tax)); လို့လဲသုံးလို့ရတယ်...
// _________________________________________________________________________________________________________________________________________________________________________________________


// is Even or is Odd
// number/2
// if reminder (%) is 1 = odd;
// e;se reminder (%) is 0 = even;

// conditional statement (if else)

// function findEvenOdd (number) {
//     let reminder = number % 2;
//     if(reminder == 0){
//         return "even";
//     } else {
//         return "odd";
//     };
// };
// console.log(findEvenOdd(35));
// console.log(findEvenOdd(2003));
// console.log(findEvenOdd(1994));
// console.log(findEvenOdd(20));
// _________________________________________________________________________________________________________________________________________________________________________________________


// let result = "Over all passed";

// function findPassFail (mark) {
//     if (mark >= 40) {
//         return "passed";
//     } else {
//         result = "Over all failed";
//         return "failed";
//     };
// }

// console.log(findPassFail(40));
// console.log(findPassFail(50));
// console.log(findPassFail(70));
// console.log(findPassFail(40));
// console.log(findPassFail(20));
// console.log(findPassFail(40));

// console.log(result);


// Data Structure

// let marks = [52,89,32,59,56,95];
// let markObj = {
//     mm: 52,
//     eng: 89,
//     math: 42,
//     chem: 59,
//     phy: 56,
//     bio: 95
// };

// let studentMarks = [
//     {
//         id: 1,
//         subject: "Myanmar",
//         short: "mm",
//         mark: 52
//     },
//     {
//         id: 2,
//         subject: "English",
//         short: "eng",
//         mark: 89
//     },
//     {
//         id: 3,
//         subject: "Mathematic",
//         short: "math",
//         mark: 42
//     },
//     {
//         id: 4,
//         subject: "Chemistry",
//         short: "chem",
//         mark: 56
//     },
//     {
//         id: 5,
//         subject: "Physic",
//         short: "phy",
//         mark: 95
//     },
//     {
//         id: 6,
//         subject: "Biology",
//         short: "bio",
//         mark: 95
//     }
// ];

// for (z of studentMarks){
//     console.log(z.subject,z.mark,findPassFail(z.mark));
// }

// for (let i=0; i<=marks.length; i++){
//     console.log(i,findPassFail(marks[i]));
// };

// for (i of marks) {
//     console.log(findPassFail(i));
// }
// console.log(result);

// for(x in markObj){
//     console.log(x, markObj[x], findPassFail(markObj[x]));
// }


// console.log(studentMarks);
// _________________________________________________________________________________________________________________________________________________________________________________________


// lopping
// for (let i=0; i<=6; i++) {
//     console.log(i);
// }

// 1=>100
// for (let i=1; i<=100; i++){
//     console.log(i);
// }

// 100=>1
// for(let i=100; i>=1; i--){
//     console.log(i);
// }
