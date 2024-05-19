// Reemplaza '[yourkey]' con tu API Key válida
const apiKey = 'abf601b2';
const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&`;

//para hacer unas pruebas sin tirar muchas solicitudes a la API (1.000 máx diario)
//const apiUrl = ``;
loadingTittle = document.getElementById('loadingTittle');

async function searchMovies() {
    loadingTittle.style.display = "block";
    const searchInput = document.getElementById('searchInput').value;

    if (searchInput == "")
        {
            loadingTittle.innerHTML = "Introducí algún término para buscar!"
        }else{
            const response = await fetch(`${apiUrl}s=${searchInput}`);
            const data = await response.json();
            displayMovies(data.Search);

            loadingTittle.innerHTML = "Buscando películas..."
        }
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

    loadingTittle.style.display = "none";
}


//funcion para que el título de buscar tenga un margen acorde al tamaño de la navbar, ya que en celulares
//se superponian al tener posición absoluta

document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var navbarHeight = header.offsetHeight;
    var searcherTittle = document.querySelector('#searcherTittle');


    if (navbarHeight > 300)
        {
        searcherTittle.style.marginTop = navbarHeight + 'px';
    }else{
        searcherTittle.style.marginTop = navbarHeight / 2 + 'px';
    }
});