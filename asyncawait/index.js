// topic 1
// async function f1() {
//     console.log("a")
// }


// function f2() {
//     console.log("b")
// }

// f1()
// f2()


//  difference between sync and async function (topic 2)

// async function f1() {
//     // console.log("a")
// }


// function f2() {
//     // console.log("b")
// }

// console.log(f1()) 
// console.log(f2())


// what if we return something
// async function f1() {

//     return 12
//     //  same as return Promise.resolve(12)
// }


// function f2() {

//     return 12
// }

// console.log(f1()) 
// console.log(f2())

// topic 3 (consume the promise)

// async function f1() {

//     return 12
//     //  same as return Promise.resolve(12)
// }


// f1().then((data)=>{
//     console.log(data)
// })


// topic 4 (using the await instead of then)
// async function f1() {

//     return 12
//     //  same as return Promise.resolve(12)
// }

// async function f2(){

//     let data = await f1();
//     console.log(data)
// }


// f2()


// see which one is the first (topic 5)


// console.log("1")

// async function f1() {
//     return "hello"
// }

// async function f2() {
//     return "hii"
// }

// async function f3() {
//     console.log(2)
//     let data = await f1()
//     console.log(3)

//     let data2 = await f2()
//     console.log(4)
// }
// f3()

// console.log(5)


// topic 6 (try catch )


// async function f1() {
//     return "hello"
// }
// function f2(){
//     return Promise.reject("server down hai bhai")
// }

// async function f3(){
//     try {
//         let data = await f2()
//     } catch (error) {
//         console.log(error)
//     }

// }


// f3()



// topic 7 (project order food )
async function searchpizza() {
    console.log("searching the pizza")
    return new Promise(function (resolve, reject) {
        let price = 300;
        setTimeout(() => {
            console.log("here is the pizza")
            console.log(price)
            resolve(price)
        }, 2000);
    })
    //   return p;
}
async function addtocart(price) {
    // console.log("adding to cart")
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("adding to cart")
            resolve(`added to cart of price ${price}`)
        }, 3000);
    })

}

async function payment(price) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("payment done")
            console.log("payment done with price ", price)
            resolve(` payment donw with rs ${price}`)
        }, 4000);
    })
}


async function f1() {
    try {
        let price = await searchpizza();
        await addtocart(price);
        await payment(price);
    } catch (error) {
        console.log(error)
    }

}

f1()