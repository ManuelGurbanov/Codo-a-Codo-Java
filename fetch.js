const apiKey = 'abf601b2';
const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&`;

//para hacer unas pruebas sin tirar muchas solicitudes a la API (1.000 máx diario)
//const apiUrl = ``;
loadingTittle = document.getElementsByClassName('loadingTittle');

async function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;

    if (searchInput == "")
        {
            loadingTittle[0].innerHTML = "Introducí algún término para buscar!"
        }else{
            const response = await fetch(`${apiUrl}s=${searchInput}`);
            const data = await response.json();
            displayMovies(data.Search);

            loadingTittle[0].innerHTML = "Buscando películas..."
        }
}

showMenu = document.getElementById('showMenu')

showMenu.addEventListener('click', function() {
    const hiddenMenu = document.getElementById('hiddenMenu');
    if (hiddenMenu.style.display !== "block") {
        hiddenMenu.style.display = "block";
    }else{
        hiddenMenu.style.display = "none";
    }
}, false);

function displayMovies(movies) {
    const resultsGrid = document.getElementById('resultsGrid');
    resultsGrid.innerHTML = '';

    let count = 0;
    const maxItems = 12;

    if (count < maxItems)
    {
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
                resultsGrid.appendChild(movieElement);
            });
        count++; //para que no se muestren muchísimas películas cuando la búsqueda no es muy precisa
    }

    loadingTittle[0].style.display = "none";
}


//funcion para que el título de buscar tenga un margen acorde al tamaño de la navbar, ya que en celulares
//se superponian al tener posición absoluta

/*
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
*/