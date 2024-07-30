import React, { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Movie } from "./Movie";

import { Row, Col, Container } from "react-bootstrap";
import { CustomPagination } from "../Pagination";
import { movieActions } from "../../store";
import { useAppDispatch, useAppSelector } from "../../hooks";

const Movies: FC = () => {
    const { movies, currentPage, totalPages } = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') || '1';
    const query = searchParams.get('query') || '';
    const genreId = searchParams.get('genreId') || '';

    const fetchMovies = async (query: string, page: string, genreId: string) => {
        if (genreId) {
            dispatch(movieActions.getByGenreIds({ page, ids: [parseInt(genreId)] }));
        } else if (query) {
            dispatch(movieActions.searchByWord({ query, page }));
        } else {
            dispatch(movieActions.getAll({ page }));
        }
    };

    useEffect(() => {
        fetchMovies(query, page, genreId);
    }, [dispatch, query, page, genreId]);

    const handlePageClick = (page: number) => {
        setSearchParams({ query, genreId, page: page.toString() });
    };

    return (
        <Container className='mt-5'>
            <Row className="g-5">
                {movies.map(movie => <Movie movie={movie} key={movie.id} />)}
            </Row>
            <Row>
                <Col className="d-flex justify-content-center mt-5">
                    <CustomPagination paginationProps={{ currentPage, totalPages, onPageClick: handlePageClick }} />
                </Col>
            </Row>
        </Container>
    );
};

export { Movies };
