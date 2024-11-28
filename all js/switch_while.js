console.log("switch", "while", "do...while", "delete", "in", "typeOf", "this");

// const x = 3;

// switch (x) {
//   case 1:
//     console.log("*");
//     break;

//   case 2:
//     console.log("* *");
//     break;

//   case 3:
//     console.log("* * *");
//     break;
// }

// let x = 1;

// while (x <= 5) {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
//   x++;
// }

// let x = 1;

// do {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
//   x++;
// } while (x <= 5);

// let person = {
//   firstName: "htet myat",
//   lastName: "maung",
//   age: 21,
// };

// delete person.lastName;

// console.log(person);

// const car = { make: "Honda", model: "Accord", year: 1998 };
// console.log(car);
// console.log("make" in car);

// delete car.make;
// console.log(car);

// if ("make" in car === false) {
//   car.make = "BMW";
// }

// console.log(car.make);

// let test = function (x) {
//   return "Hello " + x;
// };
// console.log(test("world"));

// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof "");
// console.log(typeof 0);
// console.log(typeof null);

const test = {
  num: 2,
  fun: function () {
    return this.num;
  },
};
console.log(test.fun());
