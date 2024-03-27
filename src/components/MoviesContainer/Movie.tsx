import React, { FC, PropsWithChildren } from "react";
import { IMovie } from "../../interfaces/movieInterface";
import { Link } from "react-router-dom";
import { urls } from "../../constants/urls";
import { Card, Col } from "react-bootstrap";
import { Rating } from "@mui/material";
import "./styles/Movie.scss";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({ movie }) => {
    const { id, poster_path, original_title, vote_average } = movie;
    return (
        <Col lg={3} className="movie-card">
            <Link to={`/movie/${id}`} className="card-link">
                <Card className="card">
                    <div className="movie-poster">
                        {poster_path ? (
                            <Card.Img variant="top" src={`${urls.img.base}${poster_path}`} className="card-img-top"/>
                        ) : (
                            <Card.Img variant="top" src={`https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-32.png`} className="card-img-top"/>
                        )}
                        <div className="popularity-badge bg-success">
                            {vote_average.toFixed(1)}
                        </div>
                    </div>
                    <Card.Body>
                        <Card.Title className="card-title">{original_title}</Card.Title>
                            <Rating name="read-only" value={vote_average} max={10} readOnly size="small" />
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export { Movie };
