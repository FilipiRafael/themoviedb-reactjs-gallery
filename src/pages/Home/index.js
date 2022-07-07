import React from 'react';
import { Container, MovieList, Movie } from './styles';

function Home() {

  const movies = [
    {
      id: 1,
      title: 'Marvel',
      image_url: 'https://wallpaperaccess.com/full/117211.jpg'
    },
    {
      id: 2,
      title: 'Flash',
      image_url: 'https://i.pinimg.com/originals/a5/57/ff/a557fffaba6e90a039026c9f09bc19d8.jpg'
    },
    {
      id: 3,
      title: 'American Capitain',
      image_url: 'https://i.pinimg.com/originals/ff/f4/0a/fff40ad4b2dea793c57c8963aed9a9c4.jpg'
    },
    {
      id: 4,
      title: 'Avangers',
      image_url: 'https://wallpapercave.com/wp/wp5323628.jpg'
    },
    {
      id: 5,
      title: 'DC Comics',
      image_url: 'https://i.pinimg.com/originals/c4/64/1b/c4641b32899b42120019bcc199570331.jpg'
    }
  ]

  return (
    <Container>
        <h1>Movies</h1>
        <MovieList>

          {movies.map(movie => {
            return (
              <Movie key={movie.id}>
                <a href="https://google.com">
                  <img src={movie.image_url} alt="movie cover" />
                </a>
                <span>{movie.title}</span>
              </Movie>
            );
          })}
        </MovieList>
    </Container>
  );
}

export default Home;
