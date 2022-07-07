import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_KEY, API_URL } from '../../config/key'
import { Container } from './styles';
import CircularProgress from '@mui/material/CircularProgress';

function Details() {

    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    const getMovie = async () => {
        await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(data => setMovie({
                title: data.title,
                image: data.poster_path,
                sinopse: data.overview,
                date: data.release_date
            }))
            .then(() => setLoading(false));
    }

    useEffect(() => {
        getMovie();
    }, [id])

    return (
        <Container>
            {loading ? (
                <div className="progressWrapper">
                    <CircularProgress
                        sx={{
                            color: '#FFF',
                            fontSize: '100px',
                        }}
                    />
                </div>
            ) : (
                <div className="movie">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.image}`} alt={movie.sinopse} />
                    <div className="details">
                        <h1>{movie.title}</h1>
                        <span>Sinopse: {movie.sinopse}</span>
                        <span className="release-date">Release Date: {movie.date}</span>
                        <Link to="/">
                            <button>Go Back</button>
                        </Link>
                    </div>
                </div>
            )}
        </Container>
    );
}

export default Details