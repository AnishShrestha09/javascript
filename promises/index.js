
// resolve
// const p = new Promise(function(resolve,reject){
//     resolve("hi")
// })


// console.log(typeof p)
// console.log(p)


// reject
// const p = new Promise(function(resolve,reject){
//     reject("hi")
// })


// console.log(typeof p)
// console.log(p)


// 3 topic (sync or async) //

// console.log("a")
// const p = new Promise(function (resolve, reject) {
//     console.log("b")
// })
// console.log("c")



// consume the promise (topic 4)
// const p = new Promise(function (resolve, reject) {
//     // resolve("hello")
//     reject("server down xa hai")
// })


// // p.then(function onresolve(value) {
// //     console.log(value)
// // },function onrejected(value) {
// //     console.log(value)
    
// // })


// // easy part of (topic 4)
// p.then(function (value) {
//     console.log(value)
// },function (value) {
//     console.log(value)
    
// })



//  topic 5 (.then again returns the promise

// const p = new Promise(function(resolve,reject) {
//      resolve("hello")
// })


// const a = p.then(function (value) {
//     console.log(value)
// },function (value) {
//     console.log(value)
// })


// console.log(a,"a")


//  topic 6 (catch)

// const p = new Promise(function(resolve,reject) {
//      reject("server down hai bhai")
// })

// const a = p.then(function (value) {
//     console.log(value)
// })
// .then(()=>{})
// .then(()=>{})
// .catch(function (value) {
//     console.log(value)
// })


// topic 7 (.then goes to micro task queue)

// console.log("a")

// const p = new Promise(function(resolve,reject) {
//      resolve("server down hai bhai")
// })

// p.then(function (value) {
//     console.log("b")
// })


// console.log("c")


// topic 8
// Promise.resolve().then(function () {
//     console.log("result")
// })


// topic 9 (taskqueue vs microtaskQueue)


// setTimeout(() => {
//     console.log("shyamashyam")
// }, 0);



// Promise.resolve().then(function () {
//     console.log("result")
// })



// Promise.resolve().then(function () {
//     console.log("result")
// })



// Promise.resolve().then(function () {
//     console.log("result")
// })


 // topic 10 (pizza inversion control issue solve
 

 function searchpizza(){
    console.log("searching the pizza")
    return new Promise(function (resolve,reject) {
        let price = 300;
        setTimeout(() => {
            console.log("here is the pizza")
            resolve(price)
        }, 2000);
    })
//   return p;
 }


 function addtocart(price) {
    // console.log("adding to cart")
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            // console.log("adding to cart")
            resolve(`added to cart of price ${price}`)
        }, 3000);
    })
    
 }


 function payment(price){
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("payment done")
            resolve(` payment donw with rs ${price}`)
        }, 4000);
    })
 }

// searchpizza()
// .then(function (price) {
//     console.log(price)
//     addtocart(price).then(function (cart) {
//         console.log(cart)
//         payment(price).then(function (value) {
//             console.log(value)
//         })
//     })
// })


// topic 11 ( can be done 10 in another way also)


searchpizza()
.then(function (price) {
    console.log(price)
    return addtocart(price)
})
.then(function (price) {
    console.log(price)
    return payment(price)
})
.then(function (price) {
    console.log(price)
   
})

