import React, { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Button, Col, Container, Image, Row} from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { movieActions } from '../../store';
import { urls } from '../../constants';
import './styles/MovieDetails.scss';
import {Rating, Tooltip} from "@mui/material";
import {TrailerModal} from "../TrailerContainer/TrailerBox";

const MovieDetails: FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const selectedMovie = useAppSelector(state => state.movies.selectedMovie);
    const { original_title, poster_path, popularity, release_date, vote_average,overview } = selectedMovie ?? {};
    const navigate = useNavigate();

    dispatch(movieActions.getTrailer({id}))
    const watchTrailer = () => {
        dispatch(movieActions.setTrailerStatus(true))
    }
    const back = () => {
        navigate(-1);
    };

    useEffect(() => {
        dispatch(movieActions.getById(+id));
    }, [dispatch, id]);

    return (
        <Container className="movie-details-container mb-5">
            <Row>
                <Col xs={12} md={6}>
                    {poster_path ? (
                        <Image className="movie-image" src={`${urls.img.base}${poster_path}`} alt={original_title} fluid />
                    ) : (
                        <Image className="movie-image" src={`https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-32.png`} alt={original_title} fluid />
                    )}
                </Col>
                <Col xs={12} md={6} className="movie-details">
                    <h2 className='text-success'>{original_title}</h2>
                    <p><strong>Popularity:</strong> {popularity}</p>
                    <p><strong>Release Date:</strong> {release_date}</p>
                    <Rating name="read-only" value={vote_average} max={10} readOnly size="large" />
                    <p><strong>Vote Average:</strong> {vote_average}</p>
                    <Col>
                            <Button variant="outline-success" onClick={watchTrailer}>Trailer</Button>
                            <TrailerModal/>
                    </Col>
                    <p><strong>Overview:</strong> {overview}</p>
                    <Tooltip title="Return to Movies">
                        <Button className="back-button" variant="success" onClick={back}>BACK</Button>
                    </Tooltip>
                </Col>
            </Row>
        </Container>
    );
};

export { MovieDetails };
