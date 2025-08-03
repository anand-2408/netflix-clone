const API_KEY =  '5f5b9f7be9ded3e5d4080cb1354455f5'; // Replace with your TMDb API key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Fetch trending movies
fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    const trendingRow = document.getElementById('trending-row');

    movies.forEach(movie => {
      const img = document.createElement('img');
      img.src = `${IMAGE_BASE_URL}${movie.poster_path}`;
      img.classList.add('poster');
      img.alt = movie.title;
      trendingRow.appendChild(img);
    });
  })
  .catch(error => console.error("Error fetching trending movies:", error));
