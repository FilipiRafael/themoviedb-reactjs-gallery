import React, { useState, useEffect } from 'react';
import { Container, MovieList, Movie } from './styles';
import { API_KEY, API_URL } from '../../config/key';
import { Link } from 'react-router-dom';

function Home() {

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`)
      .then(movie => movie.json())
      .then(data => setMovies(data.results));
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <Container>
        <h1>Movies</h1>
        <MovieList>
          {movies.map(movie => {
            return (
              <Movie key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie cover" />
                </Link>
                <span>{movie.title}</span>
              </Movie>
            );
          })}
        </MovieList>
    </Container>
  );
}

export default Home;
