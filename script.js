// Reemplaza '[yourkey]' con tu API Key válida
const apiKey = 'abf601b2';
const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&`;

async function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;
    const response = await fetch(`${apiUrl}s=${searchInput}`);
    const data = await response.json();
    displayMovies(data.Search);
}

function displayMovies(movies) {
    const moviesGrid = document.getElementById('moviesGrid');
    moviesGrid.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = 
        `
            <a href="movie-details.html">
                <img src="${movie.Poster}" alt="${movie.Title}" class="">
            </a>
            <div class="movieTittle">
                <h5>${movie.Title}</h5>
            </div>
        `;
        moviesGrid.appendChild(movieElement);
    });
}