// class User{

//     constructor(name){
//        this.name = name
//     }

//     printName(){
//         console.log(this.name)
//     }
// }

// const u1 = new User("babal");
// const u2 = new User("babal2");


// u1.printName()
// u2.printName()

class BankAccount{
    #amount // private the amount 
    constructor(amount){
        this.#amount = amount
    }

    get(){
        console.log(this.#amount)
    
    }

    deposit(amount){
        this.#amount +=amount
    }
    withdraw(amount){
        this.#amount -= amount
    }

    static calcaulateTax(){
        console.log("calculating tax...")
    }
}

let ba1 = new BankAccount(500)
ba1.get()
ba1.deposit(500)
ba1.get()
ba1.withdraw(500)
ba1.get()
ba1.amount = 100;
ba1.get()

// ba1.calcaulateTax() // cannot call because it is static method





