import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
    theme: boolean;
}

const initialState: ThemeState = {
    theme: localStorage.getItem('theme') === 'true',
};

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = !state.theme;
            localStorage.setItem('theme', String(state.theme));
        },
    },
});

const { reducer: themeReducer, actions } = themeSlice;

const themeActions = {
    ...actions
};

export { themeReducer, themeActions };
