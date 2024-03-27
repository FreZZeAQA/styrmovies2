import React from 'react';
import {Link} from "react-router-dom";
import './styles/Logo.scss'

const Logo = () => {
    return (
        <Link to={'/movies'} className="logo m-2">
            <span className="logo-text">Styr</span>
            <span className="logo-text text-success">Movies</span>
        </Link>
    );
};

export {Logo};