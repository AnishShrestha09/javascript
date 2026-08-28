
//global scope
let username = 'anish';

{
    // block scope
    let city = "ktm"
    console.log(username);
    console.log(city);
}

// console.log(city); error can not print out of scope


// function scope

function hello(){
    const number = 12;
    
}

hello()
// console.log(number); // cannot do this




// var , let , const


{
    var country = 'nikunj'
}

console.log(country);


{
    let country1 = 'nikunj'
}

// console.log(country1);



function x(){
    var name = "shyamashyam"
}

// console.log(name); error


// function counter(){
//     let count = 0;
//     count += 1;
//     console.log(count);
// }

// counter() // 1

// counter() // 1


// let count = 0

// function counter(){
//  count += 1 ;
//  console.log(count);
// }

// counter() // 1

// counter()





let count = 0


function counter(){
 let count = 2
 count += 1 ;
 console.log(count);
}

counter() // 1

counter()



