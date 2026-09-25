API = "http://www.omdbapi.com/?apikey=1d4d5cc4&"

const formm = document.querySelector("#formm")
const movie = document.querySelector("#movie")
const display = document.querySelector("#display")


formm.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = movie.value.trim();
    if (!name) {
        return;
    }

    searchmovie(name);
})

async function searchmovie(movie) {
    display.innerHTML=`<p> searching </p>`
    let mocie1 = await fetch(`http://www.omdbapi.com/?apikey=1d4d5cc4&s=${movie}`)
    let rrr = await mocie1.json()
    displaymovie(rrr.Search)
}

function displaymovie(movies) {
display.innerHTML=''


    movies.forEach(movie => {
        let div2 = document.createElement('div')

        div2.innerHTML = `
        <img src= '${movie.Poster}'>
        <p>title :${movie.Title}</p>
        <p>year :${movie.Year} </p>
  `
        display.append(div2)
    }


    );



}