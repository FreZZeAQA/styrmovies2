import React, {FC, PropsWithChildren} from 'react';

import {ThemeProvider} from "react-bootstrap";
import {useAppSelector} from "../hooks";

const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const { theme } = useAppSelector(state => state.theme);

    return (
        <ThemeProvider initialTheme={theme}>
            {children}
        </ThemeProvider>
    );
};

export { ThemeContextProvider };