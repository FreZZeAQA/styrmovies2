import React from 'react';

import { Col, Container, Row } from "react-bootstrap";
import './styles/MoviesPage.scss';
import {Movies} from "../components";

const MoviesPage = () => {
    return (
        <section className="movies-page">
            <Container className="custom-container">
                <Row>
                    <Col lg={12}>
                        <Movies />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export { MoviesPage };
