// let student = {
//     name: "radhavallabh sri harivansh",
//     PrintName: function () {
//         // console.log(this)
//         console.log(this.name)
//     }
// }

// let student2 = {
//     name: "pran radhavallabh sri harivansh",
//     PrintName: student.PrintName
// }


// student2.PrintName()


// student.PrintName()  // radhavallabh sri harivansh
// let result = student.PrintName
// console.log(result()) // undefined


// this keyword


// let product = {
//     name: "IPhone",
//     printName: function () {
//        console.log(this)
//         const nameee = () => {
//             console.log(this.name)
//         }
//         nameee()
//     }
// }


"use strict"

function fun4() {
    let name = "something"
    let product = {
        name: "IPhone",

        printName : () => {
            console.log(this.name)

        }
    }
    // console.log(this)
    product.printName()


}

fun4()



