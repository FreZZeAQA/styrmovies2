import React, { useEffect } from 'react';

import {Button} from "react-bootstrap";
import {themeActions} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {FaAdjust} from "react-icons/fa";

const Switcher = () => {
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector((state) => state.theme);

    useEffect(() => {
        document.body.style.backgroundColor = theme ? '#002300' : 'white';
        document.body.style.color = theme ? 'white' : 'black';
    }, [theme]);

    const handleToggleTheme = () => {
        dispatch(themeActions.toggleTheme());
    };

    return (
            <Button className='m-lg-2' variant="outline-success" onClick={handleToggleTheme}><FaAdjust size={23}/></Button>
    );
};

export { Switcher };
