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
    display.innerHTML = `<p> searching </p>`
    let mocie1 = await fetch(`http://www.omdbapi.com/?apikey=1d4d5cc4&s=${movie}`)
    let rrr = await mocie1.json()
    console.log(rrr)
    displaymovie(rrr.Search)
}

function displaymovie(movies) {
    display.innerHTML = ''


    movies.forEach(movie => {
        let div2 = document.createElement('div')
        div2.setAttribute("class", "movie-card")
        div2.dataset.imdbID = movie.imdbID;
        div2.innerHTML = `
        <img src= '${movie.Poster}'>
        <p>title :${movie.Title}</p>
        <p>year :${movie.Year} </p>
  `
        display.append(div2)
    });
}

display.addEventListener("click",(e)=>{
    e.stopPropagation();

    const card = e.target.closest(".movie-card")
    const imdbID = card.dataset.imdbID
    location.href = `movie-details.html?id=${imdbID}`;

})

