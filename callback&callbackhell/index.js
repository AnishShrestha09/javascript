// function fun1(callback){
//     console.log("in function 1");
//     callback()
// }

// function fun2(){
//     console.log("in function 2")
// }
// fun1(fun2)


// function searchpizza(addtocart){
//     console.log("searching pizza")
//     setTimeout(() => {
//         console.log("here is your pizza menu")
//         addtocart()
//     }, 3000);
// }


// function addtocart(){
//     console.log("pizza add to cart")
// }

// searchpizza(addtocart)

function searchpizza(addtocart) {
    console.log("searching pizza")
    setTimeout(() => {
        console.log("here is your pizza menu")
        let price = 700
        addtocart(price)
    }, 3000);
}

function addtocart() {
    console.log("adding pizza to cart ")
    setTimeout(() => {
        console.log("adding to cart")
    }, 1000);
}

function payment(price) {
    console.log("doing payment")
    setTimeout(() => {
        console.log(price)
        console.log("done payment")
    }, 2000);
}


searchpizza(function (price) {
    addtocart(() => {

        payment(price)
        // console.log(price)

    })

})




