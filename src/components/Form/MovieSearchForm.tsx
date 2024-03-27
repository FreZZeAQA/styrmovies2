import React from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";

const MovieSearchForm = () => {
    const { reset, register, handleSubmit } = useForm();
    const [, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        setSearchParams({ page: '1', query: data.search });
        navigate(`/movies?page=1&query=${data.search}`);
        reset();
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="gx-1 m-2">
                <Col lg={8}>
                    <FormControl type="text" placeholder="Search movies..." {...register('search')} />

                </Col>
                <Col lg={4}>
                    <Button variant="outline-success" type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    );
};

export { MovieSearchForm };
