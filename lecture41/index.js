const form = document.querySelector("#formm")
const username = document.querySelector("#username")

const email = document.querySelector("#email")
const password = document.querySelector("#password")
const biio = document.querySelector("#biio")
const error_user = document.querySelector("#error_user")



function validusername(username1){
    if (username1.trim().length === 0) {
        error_user.textContent = "username must be 8 characters"
        return false
    }

   else if (username1.trim().length < 8) {
        error_user.textContent = "username must be 8 characters hai"
        return false
    }
    return true
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log("hi")

    const isvalid = validusername(username.value)


    if (isvalid) {
        console.log("form is valid")
    }
    else {
        console.log("form is not valid")
    }


})


// username.addEventListener('input', () => {
//     console.log(username.value)

// })
// const paragraph = document.createElement('p')
// biio.addEventListener('input', () => {
//     console.log(biio.value.length)

//     paragraph.textContent = biio.value.length
//     document.body.append(paragraph)
// })

// country = document.getElementById('country')
// checkbox = document.getElementById('checkbox')


// country.addEventListener('input', () => {
//     console.log(country.value)
// })



// checkbox.addEventListener('change', () => {
//     console.log(checkbox.checked)
// })


// const pass = document.getElementById('passwordp')


// password.addEventListener('focus', () => {
//     // console.log("radhavallabh lal sri harivansh")
//     pass.classList.remove("hidden")

// })

// password.addEventListener('blur', () => {
//     pass.classList.add("hidden")

// })


