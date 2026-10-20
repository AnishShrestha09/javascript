let colors = ["yellow","green","white"]

let user={
  namee:"Shyamshyam",
  isonline:true
}

function displayName(){
  console.log("ShyamShyam")
}
function App() {

  return (
    <>
      <div>hello world</div>
      <div>hello world</div>

      <ul>
        {
          colors.map((c)=>{
           return <li>{c}</li>;
          })
        }
      </ul>


        <p>
          {user.isonline ? `${user.namee} is online`:`${user.namee} is offline`}
        </p>


      <button onClick={displayName}>click name</button>
    </>
  )
}

export default App
