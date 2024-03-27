import React, { FC, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../store";
import {IGenre} from "../../interfaces";


const Genres: FC = () => {
    const dispatch = useAppDispatch();
    const { genres } = useAppSelector((state) => state.genre);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);

    const handleSelectGenre = (genre: IGenre) => {
        navigate(`/movies?page=1&genreId=${encodeURIComponent(genre.id)}`, );
    };


    return (
            <Dropdown className="m-2">
                <Dropdown.Toggle variant="outline-success" id="dropdown-genres">
                    Select Genre
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {genres && genres.length >= 1 && genres.map(genre => (
                        <Dropdown.Item key={genre.id} onClick={() => handleSelectGenre(genre)}>
                            {genre.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
    );
};

export { Genres };
