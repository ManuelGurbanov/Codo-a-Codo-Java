const apiKey = '9c5168c50cf088f187f440e7a13a9b8e';
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&query=`;

loadingTittle = document.getElementsByClassName('loadingTittle');

let currentPage = 1;

async function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;

    if (searchInput === "") {
        loadingTittle[0].innerHTML = "Introducí algún término para buscar!";
    } else {
        loadingTittle[0].innerHTML = "Buscando películas...";
        
        try {
            const response = await fetch(`${apiUrl}${searchInput}`);
            const data = await response.json();
            displayMovies(data.results);

        } catch (error) {
            console.error('Error fetching data from TMDB:', error);
            loadingTittle[0].innerHTML = "Error al buscar películas.";
        }
    }
}

showMenu = document.getElementById('showMenu');

showMenu.addEventListener('click', function() {
    const hiddenMenu = document.getElementById('hiddenMenu');
    if (hiddenMenu.style.display !== "block") {
        hiddenMenu.style.display = "block";
    } else {
        hiddenMenu.style.display = "none";
    }
}, false);

function displayMovies(movies) {
    const resultsGrid = document.getElementById('resultsGrid');
    resultsGrid.innerHTML = '';

    const maxItems = 12;

    movies.slice(0, maxItems).forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = 
        `
            <a href="movie-details.html">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="">
            </a>
            <div>
                <h5 class="movieTittle">${movie.title}</h5>
            </div>
        `;
        resultsGrid.appendChild(movieElement);
    });

    loadingTittle[0].style.display = "none";
}

// Ahora busco las películas populares en la API
function nextPage() {
    currentPage++;
    getPopularMovies(currentPage);
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        getPopularMovies(currentPage);
    }
}

async function getPopularMovies(page = 1) {
    const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=${page}`;
    
    try {
        const response = await fetch(popularMoviesUrl);
        const data = await response.json();
        totalPages = data.total_pages;
        displayPopularMovies(data.results);
    } catch (error) {
        console.error('Error fetching popular movies from TMDB:', error);
    }
}

document.getElementById('nextButton').addEventListener('click', nextPage);
document.getElementById('prevButton').addEventListener('click', previousPage);

function displayPopularMovies(movies) {
    const moviesGrid = document.getElementById('moviesGrid');
    moviesGrid.innerHTML = '';

    let count = 0;
    const maxItems = 40;

    movies.slice(0, maxItems).forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = 
        `
            <a href="movie-details.html">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="">
            </a>
            <div class="movieTittle">
                <h5>${movie.title}</h5>
            </div>
        `;
        moviesGrid.appendChild(movieElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    getPopularMovies();
});



