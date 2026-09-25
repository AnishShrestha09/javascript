 async function fun1(value){
    let response = await fetch(`https://api.github.com/users/${value}`);
    let usee = await response.json()
    console.log(usee)  
    
 let showdetails = document.querySelector("#showdetails")
 let name = document.querySelector("#name")
 let bio = document.querySelector("#bio")
 let followers = document.querySelector("#followers")
 let following = document.querySelector("#following")
 let hari = document.querySelector("#hari")


hari.setAttribute("src",usee.avatar_url)
followers.textContent=`followers ${usee.followers}` ;
name.textContent = `name is ${usee.name}`;
bio.textContent = ` bio is ${usee.bio}`;
following.textContent =`following is ${ usee.following}`;

 }

form1 = document.querySelector("#formm")

 form1.addEventListener("submit",(e)=>{
    e.preventDefault();
    let username = document.getElementById("username")
    let value1 = username.value
    fun1(value1)
 })
 

