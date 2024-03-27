import {configureStore} from "@reduxjs/toolkit";
import {genreReducer,themeReducer,movieReducer} from "./slices";

let store = configureStore({
    reducer:{
        movies : movieReducer,
        theme : themeReducer,
        genre : genreReducer
    }
});

export {store}