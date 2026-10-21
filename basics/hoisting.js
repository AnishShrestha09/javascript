// console.log(a);
// let a = 35;

// hoistimg
// variables and functions declaration goes to the up
// hosted => var let const

// var a = 5;

// function addNum() {
//   let a = 6;
//   console.log(a);
// }

// addNum();

// console.log(a);
// var a = 5;

function outer() {
  function inner() {
    console.log(username1);
  }
  return inner;
}

const username = outer();
let username1 = "anish";
username();
