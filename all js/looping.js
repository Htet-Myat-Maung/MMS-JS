// 5 times => 1 loops, 2 loops, 3 loops, 4 loops, 5 loops

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
    // if ( i === 3) break;
    // if ( i === 3) continue; //skip
//     if ( i === 2 ||  i === 4 )  continue;
//     console.log('*');
//     console.log('* *');
//     console.log('* * *');


// looping explain
// for (
//     let i= (function(){
//         console.log("First Statement");
//         return 1;
//     })();
//     (function(){
//         const condition = i <= 5;
//         console.log("Second Statement", condition);
//         return condition
//     })();
//     i = (function(){
//         i = i + 1;
//         console.log("Third Statement", i);
//         return i;
//     })()
// ){
//     console.log(i, "Code Block Loop");
// }


// const fruits = [
//     "Apple",
//     "Banana",
//     "Cherry",
//     "Orange",
//     "Mango",
//     "Pineapple",
//     "Grapes", 
//     "Strawberry", 
//     "Peach", 
//     "Kiwi"];
// console.log(fruits);
// for of and for in
// el => element

// for(let i= 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for(let el of fruits) {
//     console.log(el);
// }

// i in for-in loop will show only index
// for(let i in fruits) {
//     console.log(i , fruits[i]);
// }


// const students = {
//       name: "John Doe",
//       age: 20,
//       gender: "Male",
//       township: "Riverdale"
//     }
// console.log(students);

// i will always show the key of object
// for(let i in students) {
//     console.log(i, students[i]);
// }


const students = [
    {
      id: 1,
      name: "John Doe",
      age: 20,
      gender: "Male",
      township: "Riverdale"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 22,
      gender: "Female",
      township: "Brooklyn"
    },
    {
      id: 3,
      name: "Alex Johnson",
      age: 19,
      gender: "Non-binary",
      township: "Greenwich"
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 21,
      gender: "Female",
      township: "Sunset Bay"
    },
    {
      id: 5,
      name: "Michael Brown",
      age: 23,
      gender: "Male",
      township: "Hilltop"
    }
  ];
  

// console.log(students);

// for (let student of students) {
//     console.log(
//         student.id,
//         student.name,
//         student.gender
//     );
// }

// for(let student of students) {
//     for(let key in student){
//         console.log(key,student[key]);
//     };
//     console.log("-------------------");
// }