import React from 'react';
import {BsPersonFill} from "react-icons/bs";
import './styles/UserIcon.scss'

const UserIcon = () => {
    return (
        <div className="user-icon text-success">
            <BsPersonFill className="user-icon__icon " />
            <span className="user-icon__label m-2 ">Yurii</span>
        </div>
    );
};

export {UserIcon};