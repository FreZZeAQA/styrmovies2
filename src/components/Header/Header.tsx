import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Genres } from "../GenreContainer";
import { MovieSearchForm } from "../Form";
import { Switcher } from "../Swithcer";
import "./styles/Header.scss";
import {Logo, UserIcon} from "../../icons";


const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row className="align-items-center">
                    <Col xs={4} className="d-flex align-items-center">
                            <Logo/>
                    </Col>
                    <Col xs={8} className="d-flex justify-content-end align-items-center">
                        <div className="search-switcher mr-4">
                            <MovieSearchForm />
                        </div>
                        <div className="user-genres d-flex align-items-center">
                            <Switcher />
                            <UserIcon />
                            <Genres />
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export { Header };
