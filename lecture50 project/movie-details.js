const params = new URLSearchParams(location.search);

const imdbID = params.get("id");

console.log(params, imdbID);

const display = document.querySelector(".display");

if (imdbID) {
    searchmovie(imdbID);

}
async function searchmovie(imdbID) {

    let mocie1 = await fetch(
        `http://www.omdbapi.com/?apikey=1d4d5cc4&i=${imdbID}`
    );

    let rrr = await mocie1.json();

    // console.log(rrr);

    displaymovie(rrr);
}


function displaymovie(movie) {

    display.innerHTML = `
        <div class="movie-card">

            <img src="${movie.Poster}">

            <p>Title: ${movie.Title}</p>

            <p>Year: ${movie.Year}</p>

            <p>IMDb ID: ${movie.imdbID}</p>

            <p>Genre: ${movie.Genre}</p>

            <p>Director: ${movie.Director}</p>

            <p>Actors: ${movie.Actors}</p>

            <p>Plot: ${movie.Plot}</p>

     
            <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank" >View on IMDb</a>
          
          
        </div>
    `;
}

