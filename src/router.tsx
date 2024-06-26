import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import {MainLayout} from "./layouts";
import {MoviesPage,MovieDetailsPage} from "./pages";



const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: 'movie/:id', element: <MovieDetailsPage/>
            }
        ]
    }
]);

export {
    router
}
