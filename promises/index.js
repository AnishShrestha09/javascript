
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

























