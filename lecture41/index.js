const form = document.querySelector("#formm")
const username = document.querySelector("#username")

const email = document.querySelector("#email")
const password = document.querySelector("#password")
const biio = document.querySelector("#biio")


form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("hi")




    console.log(username.value)
    console.log(email.value)

    console.log(username.value)



})


username.addEventListener('input',()=>{
    console.log(username.value)

})
const paragraph = document.createElement('p')
biio.addEventListener('input',()=>{
    console.log(biio.value.length)

    paragraph.textContent=biio.value.length
    document.body.append(paragraph)
})






